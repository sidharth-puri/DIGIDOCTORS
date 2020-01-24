import React from 'react';
import Menu1 from './Menu1';
import Bottom from './Bottom.js';
import  '../Css/Contact.css';

function Contact()
{
  return (
     <div >  
      <Menu1/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="normal">
         <h1 className="sunny">CONTACT DETAILS:</h1>
         <fieldset className="nor">
    <legend className="sunny"><b>1:</b></legend>
    <label for="fname"><b>NAME-SIDHARTH PURI</b></label>
    <br/>
    <br/>
    <label for="fname"><b>ROLL NO-1710991789</b></label>
    <br/>
    <br/>
    <label for="fname"><b>Email ID-sidharth171789.cse@chitkara.edu.in</b></label>
    </fieldset>
<br/>
<br/>
<fieldset className="nor">
    <legend className="sunny"><b>2:</b></legend>
    <label for="fname"><b>NAME-CHIRAG MANGLA</b></label>
    <br/>
    <br/>
    <label for="fname"><b>ROLL NO-1710991922</b></label>
    <br/>
    <br/>
    <label for="fname"><b>Email ID-chirag171922.cse@chitkara.edu.in</b></label>
    </fieldset>
             
      </div>
      <br/>
      
      <Bottom/>
    </div>
         )
}
export default Contact;