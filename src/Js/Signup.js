import React , {Component} from 'react';
import Menu1 from './Menu1';
import Bottom from './Bottom.js';
import {Link} from 'react-router-dom';
import '../Css/Signup.css';
import axios from 'axios';

export default class Signup extends Component
{
  constructor(props){
    super(props);
    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangeLastname=this.onChangeLastname.bind(this);
    this.onChangeCountry=this.onChangeCountry.bind(this);
    this.onChangeDegree1=this.onChangeDegree1.bind(this);
    this.onChangeDegree2=this.onChangeDegree2.bind(this);
    this.onChangeDegree3=this.onChangeDegree3.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
      username:'',
      lastname:'',
      country:'',
      degree1:'',
      degree2:'',
      degree3:'',
      password:''
              }
        }
     
    onChangeUsername(e)
    {
      this.setState({username:e.target.value
      });
    }
    onChangeLastname(e)
    {
      this.setState({
        lastname:e.target.value
      });
    }
    onChangeCountry(e)
    {
      this.setState({
        country:e.target.value
      });
    }
    onChangeDegree1(e)
    {
      this.setState({
        degree1:e.target.value
      });
    }
    onChangeDegree2(e)
    {
      this.setState({
        degree2:e.target.value
      });
    }
    onChangeDegree3(e)
    {
      this.setState({
        degree3:e.target.value
      });
    }
    onChangePassword(e)
    {
      this.setState({
        password:e.target.value
      })
    }
    onSubmit(e)
    {
      e.preventDefault();
      const user={
        username:this.state.username,
        lastname:this.state.lastname,
        country:this.state.country,
        degree1:this.state.degree1,
        degree2:this.state.degree2,
        degree3:this.state.degree3,
        password:this.state.password
      }
      axios.post('http://localhost:5000/hey/',user)
    .then(response => {
      if (response.data==="YES") {
        alert("You have been successfully signed in");
        window.location="/Login";
           }
      else{
        alert("SORRY!!Some error occured!!s!");
        window.location="/Login";
      }
    })
      
    }
  render()
  {
  return (
       <div>  
      <Menu1/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
      <form onSubmit={this.onSubmit} >
      <fieldset>
    <legend>SIGN UP:(Only For Doctors)</legend>
    <label>FIRST NAME:<span className="key">*</span></label>
    <input type="text"  placeholder="Your name.." value={this.state.username} onChange={this.onChangeUsername}/>
    <label>LAST NAME:</label>
    <input type="text"  placeholder="Your last name.." value={this.state.lastname} onChange={this.onChangeLastname}/>
    <br/>
    <label >COUNTRY<span className="key">*</span></label>
    <input type="text"placeholder="Your country.." value={this.state.country} onChange={this.onChangeCountry}/>
    <br/>
    <label >BACHELOR'S DEGREE:<span className="key">*</span></label>
    <input type="text"placeholder="Name of the Degree.." value={this.state.degree1} onChange={this.onChangeDegree1}/>
    <br/>
    <label>POST GRADUATE DEGREE:<span className="key">*</span></label>
    <input type="text" placeholder="Name of the Degree.."  value={this.state.degree2} onChange={this.onChangeDegree2}/>
    <br/>
    <label>SUPER SPECIALITY DEGREE:</label>
    <input type="text"  placeholder="Name of the Degree..."  value={this.state.degree3} onChange={this.onChangeDegree3}/>
    <br/>
    <label>PASSWORD:<span className="key">*</span></label>
    <br/>
    <input type="password" className="ayush" placeholder="Enter 6 digit password"  value={this.state.password} onChange={this.onChangePassword}/>
    <input type="submit" value="Submit"/>
    </fieldset>
      </form>
       Back to <Link to="Login">Log In</Link> page..
      <br/>
      <br/>
      <br/>
      <br/>
      <Bottom/>
    </div>
         )
  }
}