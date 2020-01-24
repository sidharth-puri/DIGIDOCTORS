import React,{Component} from 'react';
import Menu1 from './Menu1';
import Bottom from './Bottom.js';
import '../Css/Admin.css';
import axios from 'axios';

export default class Admin extends Component
{
  constructor(props){
    super(props);
    this.onChangeUser=this.onChangeUser.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSub=this.onSub.bind(this);
    this.state={
      user:'',
      password:''
    }
        }
     
    onChangeUser(e)
    {
      this.setState({user:e.target.value});
    }
    onChangePassword(e)
    {
      this.setState({password:e.target.value});
    }
    onSub(e)
    {
      e.preventDefault();
        const userr=
        {
           user:this.state.user ,
           password:this.state.password
        }
           axios.post('http://localhost:5000/hey/admin',userr)
           .then(response => {
            if (response.data==="YES") {
             window.location = '/Adminpage';
              alert("Welcome Sir!!!");
                 }
            else{
               window.location="/Admin";
              alert("SORRY!!You can't access admin's account!!!");
            }
          })      
    }

    render(){
  return (
     <div >  
      <Menu1/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>   
      <form  className="akash" onSubmit={this.onSub}>
      <fieldset>
    <legend>ADMIN's ACCOUNT:</legend>
    <label>LOGIN NAME:</label>
    <input type="text"  placeholder="UserName" value={this.state.user} onChange={this.onChangeUser}/>
    <label >PASSWORD:</label>
    <br/>
    <input type="password" minlength="6" placeholder="Enter atleast 6-digit password" value={this.state.password} onChange={this.onChangePassword}/>
    <br/>
    <input type="submit" value="Submit"/>
    </fieldset>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Bottom/>
    </div>
         )}
}
