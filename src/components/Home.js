import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Home.css';
const Home = ({onRouteChange,playPause,sound})=>{
    return(
      
      <div className="card animated zoomIn" style={{width:"30rem",maxWidth:"100vw",marginTop:"40%",backgroundColor:"#131313"}}>
      {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
      <div className="card-body">
        <h3 className="card-title  text-center header">WELCoME To</h3>
        <h1 className="card-title  text-center header">SPACE LADDERS</h1>
        <ul className="list-group list-group-flush mode-menu">
          <li className="list-group-item bg-secondary alert alert-dark" onClick={()=>onRouteChange("pvp")}><Link to="/pvp"> <span className="play-mode"><b>PLAYER 1 VS PLAYER 2</b></span></Link></li>
          <li className="list-group-item bg-secondary alert alert-dark" onClick={()=>onRouteChange("pva")}><Link to="/pva"> <span className="play-mode"><b>PLAYER VS ALEX</b></span></Link></li>
          <li className="list-group-item bg-secondary alert alert-dark"><span style={{color:"#8c8181"}}><b>PLAYER VS FRIENDS</b></span></li>
        </ul>
        <div className="p">
                   <label style={{marginRight:"8px",color:'#c5c537'}}>Background Music</label>
                   <input id="sound" type="checkBox" onClick={playPause} 
                    // value="PAUSE" 
                   checked={sound}/>
                </div>
      </div>
     </div>
    );
}

export default Home;


/* <div className="bg-info vh-100 p-0 position-relative">
<div className="container border p-5 position-absolute box w-50">
<div className="text-center">
<h2>WELCOME TO</h2>
<h1>SNAKE LADDER</h1>
</div>
<div className="container border h-100 ">
<div className="row">
      <div className="col-sm-12 alert alert-info" role="alert" onClick={()=>onRouteChange("pvp")}>
        <a href="#" className="alert-link">PLAYER1 VS PLAYER2</a>
      </div>
      <div className="col-sm-12 alert alert-info" role="alert" onClick={()=>onRouteChange("pva")}>
        <a href="#" className="alert-link">PLAYER VS ALEX</a>
      </div>
      <div className="col-sm-12 alert alert-info" role="alert" onClick={()=>onRouteChange("pvp")}>
        <a href="#" className="alert-link">PLAYER VS FRIENDS</a>
      </div>

</div>
</div>


</div>

</div> */