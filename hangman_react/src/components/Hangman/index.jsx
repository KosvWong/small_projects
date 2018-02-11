import React, { Component } from 'react'
import Guess from '../Guess';


class Hangman extends Component {

    render() {
        
        let guesses = this.props.guesses
        let guessesJSX=guesses.map((guess, i)=>{
            return <span key={i}> '{guess}'</span>
        });
 
        return (
            <div>
                <div className='hangmanContainer'>
                    <div className='base'></div>
                    <div className='post' ></div>
                    <div className='bar'></div>
                    <div className='rope'></div>
                    {(this.props.numWrong >= 1) ? <div className='head'></div>:<div></div>}
                    {(this.props.numWrong >= 2) ? <div className='body'></div>:<div></div>}
                    {(this.props.numWrong >= 3) ? <div className='leftArm'></div>:<div></div>}
                    {this.props.numWrong >= 4 ? <div className='rightArm'></div>:<div></div>}
                    {this.props.numWrong >= 5 ? <div className='leftLeg'></div>:<div></div>}
                    {this.props.numWrong >= 6 ? <div className='rightLeg'></div>:<div></div>}

                </div>
                <div className='gameContainer'>
                    <div className="gameText">
                        <h1 id='guess'>Your guess is:<span className='red'>{this.props.guess}</span></h1>
                        <h1 id='word'>Your word is:<br/><span className='green'>{this.props.line.length>1 ? this.props.line:''}</span></h1>
                        <h2 id='guesses'>Your guesses are:<br/><span className='red'>{guessesJSX}</span></h2>
                    </div>
                </div>
                <div className="navBar">
          {this.props.over ? <h1>HANGMAN</h1>:<h1>Good Luck</h1>}
        </div>    
        <div>
            <Guess 
            guesses={this.props.guesses} 
            createGuess={this.props.createGuess}
            over={this.props.over}
            /> 
        </div>
            </div>
        )
    }
   

  
    


}

export default Hangman