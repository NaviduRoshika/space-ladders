import React from 'react';
import GameBoard from './gameBoard';
import NumberGenerator from './NumberGenerator';




class GAmePvP extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            now:"",
            players: [
              {
                score:100,
                won:false,
                activeSquare:1,
                prevSquare:0,
                number:0
              },
                {
                score:100,
                won:false,
                activeSquare:1,
                prevSquare:0,
                number:0
              }
            ]
          }
    }
    onNumberClick =(player)=>{
        let p = null;
        if(player === "player1"){
          p = 0;
        }else if(player === "player2"){
          p = 1;
        }
        let x = Math.floor((Math.random() * 10000) + 1);
        x = x%6;
        x=x+1;
        //this.setState((state)=>{return {number:x};});
        this.setState((state)=>{
          return (state.now===""?{now:"x"}:{now:""});
        });
        this.setState((state)=>gameLogic(state.players[p],x));
        console.log("NC ran");
        // x=0;
    
     }

     render(){
        console.log("renders",this.state.players);
        const psq = this.state.now === ""?this.state.players[1].prevSquare:this.state.players[0].prevSquare;
        let  divStyle = {
          display:(this.state.players[0].won || this.state.players[1].won)?'none':'block'
        };

        if(this.state.now === "x" && !this.state.players[0].won){
              setTimeout(() => {
                this.onNumberClick("player2");  
              }, 2000);
                        
        }
          return (
          <div className="container-fluid">
           <div className="row">
          <div className="col text-center">
            <h2>SNAKE LADDER</h2>
          </div>
        </div>
            <div className="row">
              <div className="col-sm-2 bg-secondary">
                  <h2>PLAYER 1</h2>
                  <NumberGenerator number={this.state.players[0].number}/>
                  {/* {this.state.now === "player1"?btnclass=activeBtn:btnclass=disabledBtn} */}
                  <div style={divStyle}>
                  <button type="button" onClick={()=>{this.onNumberClick("player1")}} className="btn btn-dark"  disabled={this.state.now}>Click</button>
                  </div>
                  
              </div>
              <div className="col-sm-8 bg-success">
                  <GameBoard colorSet={this.state.colorSet} prevSquare={psq} activeSquares={[this.state.players[0].activeSquare,this.state.players[1].activeSquare]}/>
              </div>
              <div className="col-sm-2 bg-secondary">
                  <h2 className="text-danger">ALEX</h2>
                  <NumberGenerator number={this.state.players[1].number}/>
                  {/* {this.state.now === "player2"?btnclass=activeBtn:btnclass=disabledBtn} */}
                  <div style={divStyle}>
                  {/* <button type="button" onClick={()=>{this.onNumberClick("player2")}} className="btn btn-dark" disabled={!this.state.now} >Click</button> */}
                  </div>
                  
              </div>
            </div>
            <div className="row">
              <div className="bg-dark">
              <h3>P1</h3>
               {this.state.players[0].won?"YOU WIN!!!":this.state.players[0].score}
              </div>
              <div className="bg-danger">
              <h3>P2</h3>
              {this.state.players[1].won?"YOU WIN!!!":this.state.players[1].score}
              </div>
            </div>
            
            
            
          </div>
        );
     }
}


const gameLogic = (player,x)=>{
  
    // const player = state.players[p]; 
    console.log("GL",player);
    const psq = player.activeSquare;
    const sq = player.activeSquare + x;
    console.log("GL",sq);
    let obj = null;
    let score = player.score;
    
    switch (true){
      case (sq === 64):
        score = score + 100 * x;
        score = score * 5;
        obj = Object.assign(player,{activeSquare:sq,prevSquare:psq,won:true,score:score,number:x});
        // obj = {activeSquare:sq,won:true,score:score};
        break;
      case (sq > 64):
        // obj = {activeSquare:state.activeSquare};
        obj = Object.assign(player,{activeSquare:player.activeSquare,prevSquare:psq,number:x});
        break;
          
      //SNAKES
      case (sq === 15):
        score = score + 100 * x;
        // score = score  / 2;
        // obj = {activeSquare:4,score:score};
        obj = Object.assign(player,{activeSquare:36,prevSquare:psq,score:score,number:x});
        break;
      case (sq === 21):
        score = score + 100 * x;
        // score = score  / 2;
        // obj = {activeSquare:21,score:score};
        obj = Object.assign(player, {activeSquare:55,prevSquare:psq,score:score,number:x});
        break;
      case (sq === 25):
        score = score + 100 * x;
        // score = score  / 2;
        // obj = {activeSquare:18,score:score};
        obj = Object.assign(player,{activeSquare:8,prevSquare:psq,score:score,number:x});
        break;
      case (sq === 39):
        score = score + 100 * x;
        // score = score  / 2;
        // obj = {activeSquare:9,score:score};
        obj = Object.assign(player,{activeSquare:50,prevSquare:psq,score:score,number:x});
        break;
      //LADDERS
      case (sq === 44):
        score = score + 100 * x;
        // score = score * 2;
        // obj = {activeSquare:29,score:score};
        obj = Object.assign(player,{activeSquare:3,prevSquare:psq,score:score,number:x});
        break;
      case (sq === 48):
        score = score + 100 * x;
        // score = score * 2;
        // obj = {activeSquare:37,score:score};
        obj = Object.assign(player,{activeSquare:11,prevSquare:psq,score:score,number:x});
        break; 
      case (sq === 59):
        score = score + 100 * x;
        // score = score * 2;
        // obj = {activeSquare:59,score:score};
        obj = Object.assign(player,{activeSquare:31,prevSquare:psq,score:score,number:x});
        break;  
      case (sq === 17):
        score = score + 100 * x;
        // score = score * 2;
        // obj = {activeSquare:62,score:score};
        obj = Object.assign(player,{activeSquare:34,prevSquare:psq,score:score,number:x});
        break;      
      default :
        score = score + 100 * x;
        // obj = {activeSquare:sq,score:score};
        obj = Object.assign(player,{activeSquare:sq,prevSquare:psq,score:score,number:x});
        break;
      }
      console.log("i ran");
      return obj;
    
}

export default GAmePvP;