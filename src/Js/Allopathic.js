import React,{Component} from 'react';
import Menu1 from './Menu1';
import '../Css/Allopathic.css';
import Bottom from './Bottom';
import {Link} from 'react-router-dom';


export default class Allopathic extends Component 
{
  
  render(){
  return (
     <div >  
       <Menu1/>
       <br/>
       <p className="trim">Allopathic</p>
       <table align="center" width="800" height="500" id="custom">
       <caption className="sanchit">SELECT THE DEPARTMENT BELOW</caption>
  <tr className="ol"> 
    <td><Link to="/Anaesthesia">ANAESTHESIA</Link></td>
    <td><Link to="/Anatomy">ANATOMY</Link></td>
    <td><Link to="/Dermatology">DERMATOLOGY</Link></td>
  </tr>
  <tr>
    <td><Link to="/Ent"> ENT</Link></td>
    <td><Link to="/Cardiology">CARDIOLOGY</Link></td>
    <td><Link to="/Surgery">GENERAL SURGERY</Link></td>
  </tr>
  <tr className="ol">
    <td><Link to="/Urology">UROLOGY</Link></td>
    <td><Link to="/Neurosurgery">NEUROSURGERY</Link></td>
    <td><Link to="/Obst">OBST. & GYNAE</Link></td>
  </tr>
  <tr>
    <td><Link to="/Ophthalmology">OPHTHALMOLOGY</Link></td>
    <td><Link to="/Orthopaedics">ORTHOPAEDICS</Link></td>
    <td><Link to="/Paediatrics">PAEDIATRICS</Link></td>
  </tr>
</table>
<br/>
<br/>
<br/>
<br/>
<Bottom/>
    </div>
      )
  }
}