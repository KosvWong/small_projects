import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Hangman from '../Hangman';
import Newgame from '../Newgame';
import Highscore from '../Highscore';
import Introduction from '../Introduction';
import './App.css';

const words=[ 
            'table', 
            'adam',
            'try', 
            'refregirator', 
            'elevator', 
            'man', 
            'human', 
            'screen', 
            'react', 
            'developer'
            ];
     

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer: [''],
      guesses: [],
      line: [],
      guess: '',
      numWrong: 0,
      over: true,
      
    };
    
  }

componentWillMount() {
  let history=JSON.parse(localStorage.getItem("history"))
  if(history!==null) {
    this.state=history 
  }
}

componentShouldUpdate(){
  this.gameOver()
}
  componentDidUpdate(){
    localStorage.setItem("history", JSON.stringify(this.state))

    }

  render() {
    const game= true
    console.log('app ' + this.state.answer)
    
    return (
      
      <div className="App">
        <header>
          <nav>
            <ul>
             <li  ><Link to="/" >Game Page</Link></li>:<li><Newgame startGame={this.startGame.bind(this)} /></li>
                <li ><Link to="/highscore" >High Scores</Link></li>
                <li > <Link to="/introduction" >Introductions</Link> </li>
                
            </ul>
          </nav>
        </header>
        
        <Switch>
            <Route exact path="/" render={ () => ( 
              
                  <Hangman 
                      answer={this.state.answer} 
                      guesses={this.state.guesses} 
                      line={this.state.line} 
                      numWrong={this.state.numWrong}
                      over={this.state.over}
                      setgame={this.setGame.bind(this)}
                      createGuess={this.createGuess.bind(this)}
                    /> 
                      
            )} />
            <Route path="/Highscore"  render={ () => ( 
              
                  <Highscore 
                      answer={this.state.answer} 
                      guesses={this.state.guesses} 
                      line={this.state.line} 
                      numWrong={this.state.numWrong}
                      over={this.state.over}
                   />
            )} />
            <Route path="/introduction"  component={Introduction} />
        </Switch>
        
      </div>
    )
  }

createGuess(guess) {
  this.state.guesses.push(guess)
  
  this.setState({
    guesses: this.state.guesses,
    guess: guess
    });

    let answer = this.state.answer;    
    let line=this.state.line; 
    let lineNew=[];

    for(let i=0; i<answer.length; i++){
      if(answer[i] === guess){
        lineNew.push(guess)
        this.winGame()
      } else {
        lineNew.push(line[i])
    }
    this.setState({line: lineNew}); 
  }

  let numWrong=this.state.numWrong;
  
  if(answer.indexOf(guess)===-1){
     numWrong++
    this.setState({numWrong: numWrong })
    this.gameOver()
  }
}



setGame(){
  this.setState({
    guesses: [],
    numWrong: 0,
    over: true,
    guess: '',
    answer: [null]},
    () =>{this.drawAnswer()}
  )
}

 startGame() {
    this.setGame()
    this.setState({
    answer: (words[Math.floor(Math.random() * words.length)]).split(''), 
    over: false},
    () =>{this.drawAnswer()}
  )
}

drawAnswer() {
  let line = [];
  for(let i=0; i<this.state.answer.length; i++)  
    {line.push('_ ')}
    this.setState({line: line})
}
  
 gameOver(){
  if(this.state.numWrong === 6) {
    alert('You Lost! \n The Answer is:  ' + this.state.answer.join(''))
   this.setGame()
   } else { this.winGame() }
}

winGame(){
  let n=0;
  for(let i=0; i<this.state.answer.length; i++) {
    for(let j=0; j<this.state.guesses.length; j++) {
      if (  this.state.answer[i] === this.state.guesses[j]) { 
        n++ 
        }
      } 
    }
  if(n === this.state.answer.length){
    alert('You Win The Game! \n Answer is: ' + this.state.answer.join('')) 
    this.setGame()
    }                              
  }

}