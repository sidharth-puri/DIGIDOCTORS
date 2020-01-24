import React from 'react';
import Menu1 from './Menu1';
import '../Css/About.css';
import homeo from '../Images/homeo.png';
import Bottom from './Bottom';

function About()
{
  return (
     <div  >  
      <Menu1/>
      <br/>
      <br/>
      <div className="mam">OUR WORK...<img className="sue"  alt="Example of alt text" src={homeo}/></div>
      
     <br/>
     <br/>
     <br/>
        <table border="0" className="jack" width="1340">
           <tr>
               <td>>> CONNECT THE PATIENT DIRECTLY TO THE WORLD CLASS DOCTORS.</td>
            </tr> 
            <tr>
                <td><br/></td>
            </tr>
            <tr>
               <td>>> GET THE FREE OF COST EXPERT ADVICE.</td>
            </tr> 
            <tr>
                <td><br/></td>
            </tr>
            <tr>
               <td> >> KNOW MORE ABOUT YOUR DISEASE AND MODERN TECHNIQUES TO GET TREATED.</td>
            </tr>  
            <tr>
                <td><br/></td>
            </tr>
            <tr>
               <td> >>CAN DECIDE BETWEEN ALLOPATHIC, HOMEOPATHIC AND AYURVEDIC FOR THERE TREATMENT.</td>
            </tr> 
            <tr>
                <td><br/></td>
            </tr>
           
           </table>
           <br/>
     <br/>
     <br/>
           <Bottom/>
    </div>
         )
}
export default About;