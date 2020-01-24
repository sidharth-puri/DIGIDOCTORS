import React,{Component} from 'react';
import Menu1 from './Menu1';
import "../../node_modules/video-react/dist/video-react.css";
import '../Css/Anaesthesia.css';
import Bottom from './Bottom';
 import movie from '../Backened/ADMIN_WALLET/allopathic/anaesthesia/1579627522611-videoplayback.mp4';
import { Player } from 'video-react';




    export default class Anatomy extends Component 
{
  onSub()
  {
    window.location=('/Allopathic');
    
  }
    render(){
  return (
     <div >  
       <Menu1/>
       <br/>
       <br/>
       <br/>
       <h1 className="kok">Anatomy<span align="right"><button onClick={this.onSub}>BACK</button></span></h1>
    <br/>
    <br/>
     <div className="ka">
     <Player className="skol"  fluid={false}
         width={750} height={400}
         playsInline   poster="/assets/poster.png" src={movie}/>
         <br/>
         <br/>
     </div>
     <div className="ka">
     <Player className="skol"  fluid={false}
        width={750} height={400}
         playsInline   poster="/assets/poster.png" src={movie}/>
     </div>
    <br/>
    <br/>
<Bottom/>
    </div>
      )
}
}
