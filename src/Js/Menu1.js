import React from 'react';
import '../Css/Menu1.css';
import hospital from '../Images/hospital.jpg';
import heart from '../Images/heart.jpg';
import {Link} from 'react-router-dom';

function Menu()
{
  return (
     <div className="Menustyle">   

<ul >
         <li><Link to="Login">LOG IN   </Link></li>
        <li><Link to="Admin">ADMIN   </Link></li>
        <li ><Link to="Contact">CONTACT   </Link></li>
       <li ><Link to="About">ABOUT US   </Link></li>
       <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
       <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
       <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
       
     
       
       <li className="kashish"> <b>DIGITAL DOCTOR</b></li>
       <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </li>
      <li className="chir"><Link to="Wellness"><img alt="Example of alt text"src={heart}/>&nbsp;WELLNESS BLOG </Link></li>
       <li className="chirag"><Link to="/"><img alt="Example of alt text" src={hospital}/>&nbsp;HOME   &nbsp;</Link></li>
       <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
</ul>
     </div>
  )
}

export default Menu;