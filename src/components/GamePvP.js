import React from 'react';
import GameBoard from './gameBoard';
import diceRoll from './images/dice.gif';
import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';
import four from './images/four.png';
import five from './images/five.png';
import six from './images/six.png';
import blank from './images/one.png';
import UIfx from 'uifx';
import rollAudio from './audio/click2.mp3';



// shake - switch the dice roll image
// now: current player to roll the dice - "x" -> p2 "" -> 2
// x1: current sqaure of player 1
// x2: current sqaure of player 2
// switch - disable roll button when shaking
// alex - for pva mode.set alex to true in player2

const roll = new UIfx(
  rollAudio,
  {
    volume: 0.2, // number between 0.0 ~ 1.0
    throttleMs: 100
  }
)

class GAmePvP extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            alex:true,
            menuOpen:false,
            holed:1000,
            now:"",
            x1:0,
            x2:0,
            shake:"no",
            switch:"",
            players: [
              {
                score:100,
                won:false,
                activeSquare:1,
                number:0
              },
                {
                score:100,
                won:false,
                activeSquare:1,
                number:0
              }
            ]
          }
        
    }
    onNumberClick =(player)=>{

      console.log("number clicked called",player);
      // if(this.state.now === "x" && !this.state.players[0].won && this.props.mode === "pva" && this.state.alex){
      //   return;
      // }
        
        // roll.play();
        this.props.rollP.play();
        let p = null;
        if(player === "player1"){
          p = 0;
          this.setState({shake:"player1",alex:true,now:"x",switch:"x"});
        }else if(player === "player2"){
          p = 1;
          this.setState({shake:"player2",alex:false,now:"",switch:"x"});
        }
        let x = Math.floor((Math.random() * 10000) + 1);
        x = x%6;
        x=x+1;
        // console.log("PALYER ",player);
        //this.setState((state)=>{return {number:x};});
        setTimeout(() => {
          this.setState((state)=>{
            return (player === "player1"?{now:"x",shake:"false",x1:x,switch:""}:{now:"",shake:"false",x2:x,switch:""});
          });
          
        },3000);

        setTimeout(() => {
          this.setState((state)=>gameLogic(state.players[p],x));
          // console.log("NC ran");
        },4500);       
        // x=0;
    
     }

     onMenuButtonClick(){
       console.log("menu");
       this.setState({menuOpen:true});
     }

     

     render(){
        // console.log("renders",this.state.holed);
        let  divStyle = {
          display:(this.state.players[0].won || this.state.players[1].won)?'none':'block'
        };

        let  divStyle2 = {
          display:(this.state.players[0].won || this.state.players[1].won || this.props.mode === "pva")?'none':'block'
        };

        let menuScreenClass = this.state.menuOpen ? "menu-screen-on" : "menu-screen-off";
        // console.log("P2 roll before",this.state.alex);
        if(this.state.now === "x" && !this.state.players[0].won && this.props.mode === "pva" && this.state.alex){
          console.log("automatic"); 
          this.setState({alex:false});
          setTimeout(() => {
            console.log("automatic after 4S"); 
             this.onNumberClick("player2");
           },4000);   
        }
        const x1 = this.state.x1;
        const x2 = this.state.x2;
        let boxClassImage1 = blank;
        let boxClassImage2 = blank;
        switch(x1){
          case (1):
          boxClassImage1 = one;
          break;
          case (2):
          boxClassImage1 = two;
          break;
          case (3):
          boxClassImage1 = three;
          break;
          case (4):
          boxClassImage1 = four;
          break;
          case (5):
          boxClassImage1 = five;
          break;
          case (6):
          boxClassImage1 = six;
          break;
          default:
            boxClassImage1 = blank;
            break;
        }
        switch(x2){
          case (1):
          boxClassImage2 = one;
          break;
          case (2):
          boxClassImage2 = two;
          break;
          case (3):
          boxClassImage2 = three;
          break;
          case (4):
          boxClassImage2 = four;
          break;
          case (5):
          boxClassImage2 = five;
          break;
          case (6):
          boxClassImage2 = six;
          break;
          default:
            boxClassImage2 = blank;
            break;
        }
        
        if(this.state.shake === "player1"){
             boxClassImage1 = diceRoll;
        }else if(this.state.shake === "player2"){
             boxClassImage2 = diceRoll;
        }


      return (
          <div className="container header animated zoomIn mt-sm-5 p-sm-3 mt-5">
           <div className="row">
            <div className="col text-center bg-se">
            <h2>SPACE LADDERS</h2>
            </div>
           </div>
            
          <div className="row">
                 <div className="col col-lg-2 col-sm-2 offset-lg-1 order-2 order-sm-1 text-center" style={{backgroundColor:"#202121"}}>
                  <h3 className="players">PLAYER 1</h3>
                  <div className="pb-3 text-center">
                     <img src={boxClassImage1} alt="dice" style={{maxWidth: "80%",height: "auto"}}/>
                  </div>
                  
                  {/* <NumberGenerator number={this.state.players[0].number}/> */}
                  {/* {this.state.now === "player1"?btnclass=activeBtn:btnclass=disabledBtn} */}
                  <div style={divStyle} className="pt-1 roll">
                  <button type="button" onClick={()=>{this.onNumberClick("player1")}} className="btn btn-dark"  disabled={this.state.now || this.state.switch}>ROLL</button>
                  </div>
                  <div className="score">
                    <span>SCoRE</span>
                    <div>
                      <h1 className="score">{this.state.players[0].score}</h1>
                    </div>
                    <div>
                    <h1 className="score">
                    {this.state.players[1].won?"You LoSE!!!":
                    this.state.players[0].won?"You WoN!!!":""}
                    </h1>
                    </div>
                  </div>
              </div>
              <div className="col-sm-8 col-lg-6 order-1 order-sm-2 bg-dark">
                  <GameBoard colorSet={this.state.colorSet} holed={this.state.holed} activeSquares={[this.state.players[0].activeSquare,this.state.players[1].activeSquare]}/>
              </div>
              <div className="col col-sm-2 text-center col-lg-2 order-sm-3 order-3"  style={{backgroundColor:"#202121"}}>
                  <h3 className="text-danger players">
                    {this.props.mode === "pva" ? "ALEx" : "PLAYER 2"}
                  </h3>
                  <div className="pb-3 text-center"> 
                     <img src={boxClassImage2} alt="dice" style={{maxWidth: "80%",height: "auto"}}/>
                  </div>
                  {/* <NumberGenerator number={this.state.players[1].number}/> */}
                  {console.log("now",this.state.now,"switch",this.state.switch)}
                  <div style={divStyle2} className="pt-1 roll">
                  <button type="button" onClick={()=>{this.onNumberClick("player2")}} className="btn btn-dark" disabled={!this.state.now || this.state.switch} >ROLL</button>
                  </div>
                  <div className="text-danger score">
                    <span>SCoRE</span>
                    <div>
                      <h1 className="score">{this.state.players[1].score}</h1>
                    </div>
                    <div>
                      <h1 className="score">
                        {this.state.players[0].won?this.props.mode === "pva" ? "ALEx LoSE!" : "You LoSE!":
                         this.state.players[1].won?this.props.mode === "pva" ? "ALEx WoN!":"You WoN!":""}
                      </h1>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        );
     }
}


const gameLogic = (player,x)=>{
    const sq = player.activeSquare + x;
    let obj = null;
    let score = player.score;
    
    
    switch (true){
      case (sq === 64):
        score = score + 100 * x;
        score = score * 5;
        obj = Object.assign(player,{activeSquare:sq,won:true,score:score,number:x});
        // obj = {activeSquare:sq,won:true,score:score};
        break;
      case (sq > 64):
        // obj = {activeSquare:state.activeSquare};
        obj = Object.assign(player,{activeSquare:player.activeSquare,number:x});
        break;
          
      //SNAKES
      case (sq === 15):
        score = score + 100 * x;
        // score = score  / 2;
        // obj = {activeSquare:4,score:score};
        obj = Object.assign(player,{activeSquare:36,score:score,number:x});
        obj = {holed:15,obj};
        break;
      case (sq === 21):
        score = score + 100 * x;
        // score = score  / 2;
        // obj = {activeSquare:21,score:score};
        obj = Object.assign(player, {activeSquare:55,score:score,number:x});
        obj = {holed:21,obj};
        break;
      case (sq === 25):
        score = score + 100 * x;
        // score = score  / 2;
        // obj = {activeSquare:18,score:score};
        obj = Object.assign(player,{activeSquare:8,score:score,number:x});
        obj = {holed:25,obj};
        break;
      case (sq === 39):
        score = score + 100 * x;
        // score = score  / 2;
        // obj = {activeSquare:9,score:score};
        obj = Object.assign(player,{activeSquare:50,score:score,number:x});
        obj = {holed:39,obj};
        break;
      //LADDERS
      case (sq === 44):
        score = score + 100 * x;
        // score = score * 2;
        // obj = {activeSquare:29,score:score};
        obj = Object.assign(player,{activeSquare:3,score:score,number:x});
        obj = {holed:44,obj};
        break;
      case (sq === 48):
        score = score + 100 * x;
        // score = score * 2;
        // obj = {activeSquare:37,score:score};
        obj = Object.assign(player,{activeSquare:11,score:score,number:x});
        obj = {holed:48,obj};
        break; 
      case (sq === 59):
        score = score + 100 * x;
        // score = score * 2;
        // obj = {activeSquare:59,score:score};
        obj = Object.assign(player,{activeSquare:31,score:score,number:x});
        obj = {holed:59,obj};
        break;  
      case (sq === 17):
        score = score + 100 * x;
        // score = score * 2;
        // obj = {activeSquare:62,score:score};
        obj = Object.assign(player,{activeSquare:34,score:score,number:x});
        obj = {holed:17,obj};
        break;      
      default :
        score = score + 100 * x;
        // obj = {activeSquare:sq,score:score};
        obj = Object.assign(player,{activeSquare:sq,score:score,number:x});
        obj = {holed:1000,obj};
        break;
      }
      // console.log("i ran");
      return obj;
    
}

export default GAmePvP;