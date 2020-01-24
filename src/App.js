import React , {Component} from 'react';
import './App.css';
import Home from './Js/Home';
import Allopathic from './Js/Allopathic';
import Homeopathic from './Js/Homeopathic';
import Avedic from './Js/Avedic';
import About from './Js/About';
import Wellness from './Js/Wellness';
import Login from './Js/Login';
import Admin from './Js/Admin';
import Contact from './Js/Contact';
import Signup from './Js/Signup';
import Adminpage from './Js/Adminpage';
import Loginpage from './Js/Loginpage';
import Anaesthesia from './Js/Anaesthesia';
import Anatomy from './Js/Anatomy';
import Cardiology from './Js/Cardiology';
import Ent from './Js/Ent';
import Neurosurgery from './Js/Neurosurgery';
import Obst from './Js/Obst';
import Ophthalmology from './Js/Ophthalmology';
import Orthopaedics from './Js/Orthopaedics';
import Paediatrics from './Js/Paediatrics';
import Surgery from './Js/Surgery';
import Urology from './Js/Urology';
import Dermatology from './Js/Dermatology';
 import {BrowserRouter,Route,Switch} from 'react-router-dom';
class App extends Component{
  render()
  {
    return (
       <BrowserRouter>
      <div className="App">
        <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/Allopathic' component={Allopathic}/>
           <Route path='/Homeopathic'  component={Homeopathic}/>
           <Route path='/Avedic' component={Avedic}/>
           <Route path='/About'  component={About}/>
           <Route path='/Wellness' component={Wellness}/>
           <Route path='/Login' component={Login}></Route>
           <Route path='/Admin' component={Admin}></Route>
           <Route path='/Contact' component={Contact}></Route>
           <Route path='/Signup' component={Signup}></Route>
           <Route path='/Adminpage' component={Adminpage}></Route>
           <Route path='/Loginpage' component={Loginpage}></Route>
           <Route path='/Anaesthesia' component={Anaesthesia}></Route>
           <Route path='/Anatomy' component={Anatomy}></Route>
           <Route path='/Cardiology' component={Cardiology}></Route>
           <Route path='/Ent' component={Ent}></Route>
           <Route path='/Neurosurgery' component={Neurosurgery}></Route>
           <Route path='/Obst' component={Obst}></Route>
           <Route path='/Ophthalmology' component={Ophthalmology}></Route>
           <Route path='/Orthopaedics' component={Orthopaedics}></Route>
           <Route path='/Paediatrics' component={Paediatrics}></Route>
           <Route path='/Surgery' component={Surgery}></Route>
           <Route path='/Urology' component={Urology}></Route>
           <Route path='/Dermatology' component={Dermatology}></Route>
           
        </Switch>
        
      </div>
      </BrowserRouter>
        );
  }
}
export default App;
