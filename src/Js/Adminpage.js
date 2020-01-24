import React, { Component } from 'react';
import axios from 'axios';
import Menu1 from './Menu1';
import Bottom from './Bottom';
import '../Css/Adminpage.css';
import {Link} from 'react-router-dom';


const Exercise = props => (
  <tr>
    <td>DR.</td>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.lastname}</td>
    <td>{props.exercise.country}</td>
    <td>{props.exercise.degree1}</td>
    <td>{props.exercise.degree2}</td>
    <td>{props.exercise.degree3}</td>
    <td>{props.exercise.approve}</td>
    <td>
       <Link to="#" onClick={()=> {props.UpdateExercise(props.exercise._id) }}>GIVE  ACCESS</Link>
    </td>
    <td>
       <Link to="#" onClick={()=> {props.RevokeExercise(props.exercise._id) }}>REVOKE ACCESS</Link>
    </td>
    <td>
       <Link to="#" onClick={()=> {props.deleteExercise(props.exercise._id) }}>DELETE DATA</Link>
    </td>
  </tr>
)

export default class Adminpage extends Component {
  constructor(props) {
    super(props);
    this.UpdateExercise = this.UpdateExercise.bind(this)
    this.deleteExercise = this.deleteExercise.bind(this)
    this.RevokeExercise=this.RevokeExercise.bind(this)
    this.onSub=this.onSub.bind(this);
    this.state = {exercises: []};
                }

  componentDidMount() 
  {
    axios.get('http://localhost:5000/hey/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  UpdateExercise(id) {
    axios.put('http://localhost:5000/hey/update/'+id)
    .then(
         window.location.reload(),
      alert("ACCESS GRANTED!!!")
    );
  }
  deleteExercise(id) {
    axios.delete('http://localhost:5000/hey/'+id)
    .then(

     window.location.reload(),
      alert("DATA DELETED SUCCESSFULLY!!!")
    );
  }
  RevokeExercise(id) {
    axios.put('http://localhost:5000/hey/revoke/'+id)
    .then(
      // <Adminpage/>
       window.location.reload(),
      alert("ACCESS REVOKED!!!")
    );
  }
   
  onSub()
  {
    window.location=('/');
    alert("Redirecting to Home Page!!!");
  }
  
  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} UpdateExercise={this.UpdateExercise} RevokeExercise={this.RevokeExercise} 
    deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <Menu1/>
        <br/>
        <br/>
        <br/>
        <h1 className="akba">ADMIN'S ACCOUNT<span align="right"><button onClick={this.onSub}>LOG OUT</button></span></h1>
        <h3 className="mani"><b>REGISTERED DOCTORS</b></h3>
        <table id="customers" align="center">
          <thead className="thead-light">
            <tr>
              <th>SALUTATION</th>
              <th>Username</th>
              <th>LastName</th>
              <th>Country</th>
              <th>Bachelor's Degree</th>
              <th>Master's Degree</th>
              <th>Special Degree</th>
              <th>Approve</th>
              <th>Access</th>
              <th>Revoke Access</th>
              <th>Delete Data</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
        <br/>
        <br/>
        <br/>
      
        <Bottom/>
      </div>
    )
  }
}