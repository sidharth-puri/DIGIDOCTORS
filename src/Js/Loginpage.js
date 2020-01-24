import React,{Component} from 'react';
import Menu1 from './Menu1';
import '../Css/Loginpage.css';
import Bottom from './Bottom';
import axios from 'axios';


export default class Loginpage extends Component
{ 
  constructor(props) {
    super(props);
    this.onChangeHandler=this.onChangeHandler.bind(this);
    this.onClickHandler=this.onClickHandler.bind(this);
      this.state = {
        selectedFile: null
      }
   
  }
  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    var value =  document.getElementById("mySelect").value+'/'+document.getElementById("my").value+"/";
   axios.post("http://localhost:5000/upload/"+value, data, { 
   })
 .then(res => { 
     console.log(res.statusText)
  })
 }
 onSub()
 {
   window.location=('/');
   alert("Thanks For the Contribution!!!   Redirecting to Home Page!!!");
 }
 
  render(){
  return (
     <div >  
       <Menu1/>
       <br/>
       <br/>
       <br/>
 <h1>FILE UPLOADS<span align="right"><button onClick={this.onSub}>LOG OUT</button></span></h1>
 <form className="shah" onSubmit={this.onClickHandler} >
   <fieldset>
   <br/>
   <br/>
    <label><b>Choose the Type of treatment:  </b> </label>
    <select id="mySelect"  autofocus>
  <option value="allopathic">ALLOPATHIC</option>
  <option value="homeopathic">HOMEOPATHIC</option>
  <option value="ayurvedic">AYURVEDIC</option>
</select>
<label><b>Choose the Department:  </b> </label>
    <select  id="my" autofocus>
  <option value="anaesthesia">ANAESTHESIA</option>
  <option value="anatomy">ANATOMY</option>
  <option value="dermatology">DERMATOLOGY</option>
  <option value="ent">ENT</option>
  <option value="cardiology">CARDIOLOGY</option>
  <option value="surgery">GENERAL SURGERY</option>
  <option value="urology">UROLOGY</option>
  <option value="neurosurgery">NEUROSURGERY</option>
  <option value="obst">OBST. & GYNAE</option>
  <option value="ophthalmology">OPHTHALMOLOGY</option>
  <option value="orthopaedics">ORTHOPAEDICS</option>
  <option value="paediatrics">PAEDIATRICS</option>
</select>
    <br/>
    
    <label><b>UPLOAD:    </b>  </label>
    <br/>
    <br/>
    <input  type="file"placeholder="Your name.." onChange={this.onChangeHandler} />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <button type="button" className="asim" onClick={this.onClickHandler}>Upload</button> 
    </fieldset>
      </form>
      <br/>

     
<Bottom/>
    </div>
      )
}
}