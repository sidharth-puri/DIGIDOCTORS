const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const userSchema= new Schema
( {
        username: { type:String, default:"-" },
        lastname: { type:String ,default:"-"},     
        country:  { type:String,default:"-"},
        degree1:  {type:String,defalut:"-"},
        degree2:  {type:String,defalut:"-"},
        degree3:  {type:String ,default:"-"},
        password: {type:String,default:"-"},
        approve: {type:String,default:"NO"}
    }
);
const User=mongoose.model('User',userSchema);

module.exports=User;
