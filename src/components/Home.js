import React from 'react';
import './Home.css';
const Home = ({onRouteChange})=>{
    return(
      <div className="col-sm-8">
      <div className="card animated zoomIn" style={{width:"30rem",marginTop:"60%",backgroundColor:"#131313"}}>
      {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
      <div className="card-body">
        <h3 className="card-title  text-center header">WELCoME To</h3>
        <h1 className="card-title  text-center header">SPACE LADDERS</h1>
        <ul className="list-group list-group-flush mode-menu">
          <li className="list-group-item bg-secondary alert alert-dark" onClick={()=>onRouteChange("pvp")}><span><b>PLAYER1 VS PLAYER2</b></span></li>
          <li className="list-group-item bg-secondary alert alert-dark" onClick={()=>onRouteChange("pva")}><span><b>PLAYER VS ALEX</b></span></li>
          <li className="list-group-item bg-secondary alert alert-dark"><span style={{color:"#8c8181"}}><b>PLAYER VS FRIENDS</b></span></li>
        </ul>
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