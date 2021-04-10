import React,{Component} from 'react';
import './App.css';
import 'animate.css';
import GamePvP from './components/GamePvP';
// import GamePvA from './components/GamePvA2';
import Home from './components/Home';
import introAudio from './components/audio/intro.mp3';
import gameAudio from './components/audio/gamePlay.mp3';
import Sound from 'react-sound';
import Particles from 'react-particles-js';
import {particleParams} from './components/particleParams';
import UIfx from 'uifx';
import rollAudio from './components/audio/click2.mp3';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      route:"home",
      menuOpen:false,
      sound:"on",
      rollSound:true,
      rollSoundValue:0.2,
      soundProps:[
        {
          url:introAudio, playStatus:"PLAYING", volume:20, loop:true
        },
        {
          url:gameAudio, playStatus:"PLAYING", volume:5, loop:true
        }
      ]
    }
  
  }
  
  
  playPause = (event)=>{
    event.persist();
    console.log("STR",event.target.checked);
    if(event.target.checked){
      this.setState((state)=>{
        const obj1 = Object.assign(state.soundProps[0],{playStatus:"PLAYING"});
        const obj2 = Object.assign(state.soundProps[1],{playStatus:"PLAYING"});
        return ({sound:"on",obj1,obj2});
      })
    }else{
      this.setState((state)=>{
        const obj1 = Object.assign(state.soundProps[0],{playStatus:"PAUSED"});
        const obj2 = Object.assign(state.soundProps[1],{playStatus:"PAUSED"});
        return ({sound:"",obj1,obj2});
      })
    }
    
  }

  onMenuButtonClick(){
    console.log("menu");
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  onRouteChange =(route)=>{
      // if(route==="home"){
        this.setState({route:route});
      // }else if(route === "pvp"){
        // this.setState({route:"pvp"});
      // }
  }

  rollSoundChange = ()=>{
      if (this.state.rollSound) {
        this.setState({rollSound:false,rollSoundValue:0.00001});
      }else{
        this.setState({rollSound:true,rollSoundValue:0.2});
      }

  }


  render(){
      let soundProps = null;
      if(this.state.route === "home"){
        soundProps = this.state.soundProps[0];
      }else{
        soundProps = this.state.soundProps[1];
      }
      let menuScreenClass = this.state.menuOpen ? "menu-screen-on" : "menu-screen-off";
      
      const roll = new UIfx(
        rollAudio,
        {
          volume: this.state.rollSoundValue, // number between 0.0 ~ 1.0
          throttleMs: 100
        }
      )
      
      return (
      <div className="d-flex justify-content-sm-center">
      <Particles style={{backgroundColor:"black"}} params={particleParams} className="particles"/>
        <Sound url={soundProps.url} playStatus={soundProps.playStatus} volume={soundProps.volume} loop={true}/>
        <div>
            {/* <div className="position-fixed" style={{ bottom: "95%",right: "3%",zIndex:1}}>
            <label style={{marginRight:"8px"}}>Background Music</label>
            <input id="sound" type="checkBox" onClick={this.playPause} value="PAUSE" checked={this.state.sound}/>
            </div> */}
            <div className="menu-button">
            <button type="button" onClick={()=>{this.onMenuButtonClick()}} 
             className="btn btn-dark btn-lg" 
             disabled={false} >MENU</button>
            </div>
            <div id="menu-screen" className={menuScreenClass}>
                <div id="menu-div" className="card menu-div animated zoomIn" style={{backgroundColor:"#131313"}}>
                      {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                     <div className="card-body">
                        <h3 className="card-title  text-center header">MENu</h3>
                        <ul className="list-group list-group-flush">
                         <li className="list-group-item bg-secondary alert alert-dark">
                           <span><b>BACKGROUND SOUND</b></span>
                           <input id="sound" type="checkBox" onClick={this.playPause} 
                           value="PAUSE" checked={this.state.sound}
                            style={{marginLeft:"15px"}}/>
                          </li>
                         <li className="list-group-item bg-secondary alert alert-dark">
                           <span><b>ROLLING SOUNG</b></span>
                           <input id="sound" type="checkBox" onClick={this.rollSoundChange} 
                                  value="PAUSE" checked={this.state.rollSound}
                                  style={{marginLeft:"15px"}}/>
                          </li>
                         <li className="list-group-item bg-secondary alert alert-dark">
                             <ul style={{paddingLeft:"5px",listStyleType:"disc"}}>
                               <b>
                               <li>Spaceships of the <span style={{color:'#e21414'}}>Red Planet</span> & 
                               <span style={{color:'yellow'}}>Yellow Planet</span> want to go to The Sector 64</li>
                               <li>The first spaceship which arrives at sector 64 will win the space race</li>
                               <li>Some sectors have connected with WORMHOLES</li>
                               <li>If a spaceship enters a BLACKHOLE it will come out from the relevant WHITEHOLE</li>
                               </b>
                             </ul>
                             <spn>by <a href="https://github.com/NaviduRoshika" style={{color:"#124277"}} target="_blank">NaviduRoshika</a></spn>
                          </li>
                       </ul>
                       <div className="back-button">
                          <button type="button" onClick={()=>{this.onMenuButtonClick()}} 
                           className="btn btn-dark btn-lg" 
                           disabled={false} >BACK</button>
                        </div>
                     </div>
                </div>
            </div>
            {this.state.route === "home" ? <Home onRouteChange={this.onRouteChange}/>
            :this.state.route === "pvp"?<GamePvP mode={"pvp"} rollP={roll}/>:<GamePvP rollP={roll} mode={"pva"}/>}
        </div> 
      </div>
    );
 }


}


export default App;





// setBgColors(){
//   if(!this.state.colorSet){
//    const colorArray = [];
//    for(let  i=0;i<64;i++){
//    let color = "";
//    let x = Math.floor((Math.random() * 1000) + 1);
//    x = x%8;
//    switch(x){
//        case 0:
//            color = red;  //red
//            break;
//        case 1:
//            color = yellow;
//            break;
//        case 2:
//            color = green;
//            break;
//        case 3:
//            color = blue;
//            break;
//        case 4:
//            color = black; 
//            break;
//        case 5:
//            color = purple;
//            break;
//        case 6:
//            color = bluegreen;
//            break;
//        case 7:
//            color  = orange;
//            break;
//        default :
//            color = red;
//            break; 
//    }
//    colorArray.push(color);
//  }
//  this.setState({colorSet:true})
//  }

// }


// className="row justify-content-lg-center"


// const red = "linear-gradient(to bottom right, #990000 1%, #ff5050 126%)";  //red
// const yellow = "linear-gradient(to bottom right, #ffff00 1%, #ff9900 126%)";  //yellow
// const green = "linear-gradient(to bottom right, #006600 1%, #66ff33 126%)";  //green
// const blue = "linear-gradient(to bottom right, #000099 1%, #0099ff 126%)";  //blue
// const black = "linear-gradient(to bottom right, #000000 1%, #999966 126%)";  //black
// const purple = "linear-gradient(to bottom right, #6600cc 1%, #9966ff 126%)"; //purple
// const bluegreen = "linear-gradient(to bottom right, #003366 1%, #009999 126%)";  //blue green
// const orange  = "linear-gradient(to bottom right, #ff6600 1%, #ff9966 126%)";  //orange