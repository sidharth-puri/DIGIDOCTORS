const express = require('express');
const router = express.Router();
let User=require('../Models/User.model');


router.route('/').post((req,res)=>{
    const username=req.body.username;
    const lastname=req.body.lastname;
    const country=req.body.country;
    const degree1=req.body.degree1;
    const degree2=req.body.degree2;
    const degree3=req.body.degree3;
    const password=req.body.password;
    const newUser = new User({username,lastname,country,degree1,degree2,degree3,password})
        newUser.save()
    .then(()=>{res.status(200).send("YES")})
    .catch(()=>res.status(400).send('NO'))
})

router.post('/admin', async(req, res)=>{
 if(req.body.user=="CHIRAG" || req.body.user=="SIDHARTH")
 {
  const user = await User.findOne({username : req.body.user, password:req.body.password});
    if(user)
    res.send('YES')
    else{
      res.send('NO')
    }
 }
 else
    {
          res.send('NO')
    }
})

  router.post('/login',async(req,res)=>{
      const user =await User.findOne({username : req.body.username, approve : "YES", password:req.body.password});
      if(!user){
        res.send('NO')
      }
      else{
        res.send('YES')
      }
      })

router.route('/').get((req, res) => {
    User.find()
      .then(exercises => res.status(200).json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/:id').delete((req, res) => {
     User.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/update/:id').put((req, res) => {
    User.findById(req.params.id)
      .then(exercise => {
        exercise.approve = "YES";
        exercise.save()
          .then(() => res.json(User.getSizeOfArray()))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/revoke/:id').put((req, res) => {
    User.findById(req.params.id)
      .then(exercise => {
        exercise.approve = "NO";
        exercise.save()
          .then(() => res.json('Excersie updated.'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports=router;