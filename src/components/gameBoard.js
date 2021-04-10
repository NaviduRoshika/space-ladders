import React from 'react';
import {GameData} from './GameData';
import BoardSquare from './BoardSquare';
import './gameBoard.css';
// import snake1 from './images/game.png'


class GameBoard extends React.Component{
  
    render(){
        let gameNo = 0;
        const boardRows = [];
        const holed = this.props.holed;
        // console.log("PSQ",prevSq);
        for(let row=0;row<8;row++){
              let boardCol = [];
            for(let col=0;col<8;col++){
                // let color = bgColor();
                let color = "radial-gradient(circle, rgba(68,68,65,1) 0%, rgba(0,0,0,1) 63%)";//"linear-gradient(to bottom right, #000099 1%, #0099ff 126%)";
                let isActive = "false";
                let isHoled = false;
                
                if((GameData[gameNo].id ===  this.props.activeSquares[0]) && (this.props.activeSquares[0] === this.props.activeSquares[1])){
                  isActive = "true";
                  color = "radial-gradient(black 5%,grey 15%,white 60%)";
                }else if((GameData[gameNo].id ===  this.props.activeSquares[1]) && (this.props.activeSquares[0] === this.props.activeSquares[1])){
                  isActive = "true";
                  color = "radial-gradient(black 5%,grey 15%,white 60%)";
                
                }else if(GameData[gameNo].id === this.props.activeSquares[0]){
                  isActive = "true";
                  color = "radial-gradient(white 5%,white 21%,yellow 60%)";
                }else if(GameData[gameNo].id === this.props.activeSquares[1]){
                  isActive = "true";
                  color = "radial-gradient(white 5% ,white 28%,#cc0000 60%)";
                }else if(GameData[gameNo].id === 15){
                  isActive = "black";
                  color = "radial-gradient(white 5%,white 16%, blue 68%)";            //Black
                }else if(GameData[gameNo].id === 36){
                  isActive = "white";
                  color = "radial-gradient(#0b178d 24%, #0b178d 18%, white 87%)";      //White
                }
                else if(GameData[gameNo].id === 21){
                  isActive = "black";
                  color = "radial-gradient(white 5%,white 16%, green 68%)";            //Black
                }else if(GameData[gameNo].id === 55){
                  isActive = "white";
                  color = "radial-gradient(green 24%, green 18%, white 87%)";      //White
                }else if(GameData[gameNo].id === 25){
                  isActive = "black";
                  color = "radial-gradient(white 5%,white 16%, orange 68%)";            //Black
                }else if(GameData[gameNo].id === 8){
                  isActive = "white";
                  color = "radial-gradient(orange 24%, orange 18%, white 87%)";      //White
                }else if(GameData[gameNo].id === 39){
                  isActive = "black";
                  color = "radial-gradient(white 5%,white 16%, gray 68%)";            //Black
                }else if(GameData[gameNo].id === 50){
                  isActive = "white";
                  color = "radial-gradient(gray 24%, gray 18%, white 87%)";      //White
                }else if(GameData[gameNo].id === 44){
                  isActive = "black";
                  color = "radial-gradient(white 5%,white 16%, purple 68%)";            //Black
                }else if(GameData[gameNo].id === 3){
                  isActive = "white";
                  color = "radial-gradient( purple 24%, purple 18%, white 87%)";      //White
                }else if(GameData[gameNo].id === 48){
                  isActive = "black";
                  color = "radial-gradient(white 5%,white 16%, cyan 68%)";            //Black
                }else if(GameData[gameNo].id === 11){
                  isActive = "white";
                  color = "radial-gradient(cyan 24%, cyan 18%, white 87%)";      //White
                }else if(GameData[gameNo].id === 59){
                  isActive = "black";
                  color = "radial-gradient(white 5%,white 16%, yellow 68%)";            //Black
                }else if(GameData[gameNo].id === 31){
                  isActive = "white";
                  color = "radial-gradient(yellow 24%, yellow 18%, white 87%)";      //White
                }else if(GameData[gameNo].id === 17){
                  isActive = "black";
                  color = "radial-gradient(white 5%,white 16%, indigo 68%)";            //Black
                }else if(GameData[gameNo].id === 34){
                  isActive = "white";
                  color = "radial-gradient(indigo 24%, indigo 18%, white 87%)";      //White
                }
                
                if(GameData[gameNo].id === holed){
                   isHoled = true;
                }
                let square = <BoardSquare key={GameData[gameNo].id} isActive={isActive} isHoled={isHoled} gameData={GameData[gameNo]} bgColor={color}/>;
                gameNo++;
                boardCol.push(square);
            } 
            boardRows.push(boardCol);
        }
        
        return(
            <div id="gameBoard" className="g">
                <div className="d-flex flex-row">
                  {boardRows[0]}
                </div>
                <div className="d-flex flex-row">
                  {boardRows[1]}
                </div>
                <div className="d-flex flex-row">
                  {boardRows[2]}
                </div>
                <div className="d-flex flex-row">
                  {boardRows[3]}
                </div>
                <div className="d-flex flex-row">
                  {boardRows[4]}
                </div>
                <div className="d-flex flex-row">
                  {boardRows[5]}
                </div>
                <div className="d-flex flex-row">
                  {boardRows[6]}
                </div>
                <div className="d-flex flex-row">
                  {boardRows[7]}
                </div>
                
            </div>
           );
     
    }
        
}

// const bgColor = ()=>{
//     let x = Math.floor((Math.random() * 1000) + 1);
//     x = x%8;
//     switch(x){
//         case 0:
//             return("linear-gradient(to bottom right, #990000 1%, #ff5050 126%)");  //red
//             break;
//         case 1:
//             return("linear-gradient(to bottom right, #ffff00 1%, #ff9900 126%)");  //yellow
//             break;
//         case 2:
//             return("linear-gradient(to bottom right, #006600 1%, #66ff33 126%)");  //green
//             break;
//         case 3:
//             return("linear-gradient(to bottom right, #000099 1%, #0099ff 126%)");  //blue
//             break;
//         case 4:
//             return("linear-gradient(to bottom right, #000000 1%, #999966 126%)");  //black
//             break;
//         case 5:
//             return("linear-gradient(to bottom right, #6600cc 1%, #9966ff 126%)"); //purple
//             break;
//         case 6:
//             return("linear-gradient(to bottom right, #003366 1%, #009999 126%)");  //blue green
//             break;
//         case 7:
//             return("linear-gradient(to bottom right, #ff6600 1%, #ff9966 126%)");  //orange
//             break;
//         default :
//             return("linear-gradient(to bottom right, #990000 1%, #ff5050 126%)"); //red
//             break; 
//     }
// }

export default GameBoard;