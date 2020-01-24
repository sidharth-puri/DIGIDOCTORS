import React from 'react';
import Menu1 from './Menu1';
import '../Css/Homeopathic.css';
import Bottom from './Bottom';

function Homeopathic()
{
  return (
     <div >
       <Menu1/>
       <br/>
       <p className="trim">HOMEOPATHY</p>
       {/* <img src={arrow}/> */}
       {/* <div className="sid">GO DOWN</div> */}
       <table align="center" width="800" height="500" id="custom">
       <caption className="sanchit">SELECT THE DEPARTMENT BELOW</caption>
  <tr className="nishit"> 
    <td>ANAESTHESIA</td>
    <td>ANATOMY</td>
    <td>DERMATOLOGY</td>
  </tr>
  <tr>
    <td>ENT</td>
    <td>CARDIOLOGY</td>
    <td>GENERAL SURGERY</td>
  </tr>
  <tr className="nishit">
    <td>UROLOGY</td>
    <td>NEUROSURGERY</td>
    <td>OBST. & GYNAE</td>
  </tr>
  <tr>
    <td>OPHTHALMOLOGY</td>
    <td>ORTHOPAEDICS</td>
    <td>PAEDIATRICS</td>
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
export default Homeopathic;