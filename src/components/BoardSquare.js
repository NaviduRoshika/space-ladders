import React from 'react';
import './BoardSquare.css';
import icon from './images/icon4.png'
import iconE from './images/icon3.png'
import iconW from './images/iconW.png'
import iconB from './images/iconB.png'

const BoardSquare =(props)=>{

        const {isActive,gameData, bgColor,isHoled} = props;
        let bgC = {};
        let classSet = "";
        if(isActive === "true"){
            //-moz-radial-gradient(red 5%,yellow 15%,green 60%);  "linear-gradient(to bottom right, #ffff00 1%, #ff9900 126%)"
            bgC = {background: bgColor};
            classSet = "pb text-white border border-secondary animated pulse infinite";
        }else if(isActive === "false"){
            bgC = {background:bgColor};
            classSet = "pb text-white border border-secondary";
        }else if(isActive === "black"){
            bgC = {background:bgColor};
            classSet = "pb text-white border border-secondary animated pulse infinite";
        }else if(isActive === "white"){
            bgC = {background:bgColor};
            classSet = "pb text-white border border-secondary animated pulse infinite";
        }else{
            classSet = "pb text-white border border-secondary";
            bgC = {background:bgColor};
        }
        const divId = "sq" + gameData.id;
        let spanClass = "sqNo roll";
        if(isHoled){
            classSet = "pb text-white border border-secondary animated zoomIn";
        }

        return(
            <div id={divId} className={"d-flex  " +  classSet} style={bgC}>
                {(isActive === "true" || isActive === "white" || isActive === "black")?""
                : <span className={spanClass} style={{fontSize: "0.7rem"}}>
                {gameData.id}
                </span>}
                {/* <span className={spanClass}>
                {gameData.id}
                </span> */}
                <div>
                {/* <div>{gameData.id}</div> */}
                {isActive === "true"? <img className="icon" style={{marginTop:"0px",marginLeft:"0%"}} src={icon} alt="ship"/>
                :isActive === "white"?<img className="icon" style={{marginTop:"0px",marginLeft:"0%"}} src={iconW} alt="ship"/>
                :isActive === "black"?<img className="icon" style={{marginTop:"0px",marginLeft:"0%"}} src={iconB} alt="ship"/>
                :<img className="icon" style={{marginTop:"0px",marginLeft:"-20%"}} src={iconE} alt="ship"/>}
                </div>
            </div>
        );
       
} 

export default BoardSquare;