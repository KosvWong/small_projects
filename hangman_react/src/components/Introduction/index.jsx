import React, {Component} from 'react';


export default class Higscore extends Component{
    render() {
        return (
            <div className="App">
                
                <div className="navBar">
                    <h1>Introductions</h1>
                </div><br />
                <div style={{color:'rgb(48, 126, 161)'}}>
                    <div style={{ position:'relative', left:'25px',  fontSize: '2em' }} > How to:</div>
                    <div>
                        <ol style={{ position:'relative' }}> 
                            <li>You need to be on "Game Page" to play</li><br/>
                            <li>You can start the game with pushing the 'New Game' button</li><br/>
                            <li>You can select entering your guesses manuel or auto from 'Auto/Manuel' button</li>
                        </ol>
                    </div>
                <br/>
                    <div style={{ position:'relative', left:'25px', fontSize: '2em' }} > Game Rules:</div>
                    <div>
                        <ol style={{ position:'relative' }}>   
                            <li> Game will choose of a word when you start a 'New Game'.</li><br />
                            <li> Player try to guess what it is one letter at a time.</li><br />
                            <li> Game draws a number of dashes equivalent to the number of letters in the word. </li><br />
                            <li> If a guessing player suggests a letter that occurs in the word, game fills in the blanks with that letter in the right places. </li>
                            <li> If the word does not contain the suggested letter, game draws one element of a hangman's galliws. </li>
                            <li> As the game progresses, a segment of the galliws and of a victim is added for every suggested letter not in the word. </li>
                            <li> The number of incorrect guesses before the game ends is up to the players, but completing a character in a noose provides a minimum of six wrong answers until the game ends. </li>    
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}