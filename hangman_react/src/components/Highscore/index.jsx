import React, {Component} from 'react';



export default class Highscore extends Component{

    render() {
        console.log('highscore ' + this.props.answer);
        
 
        return (
            <div className="App">
                <div className="navBar">
                    <h1>High Score</h1>
                </div>
                <div>
                    {this.props.answer}<br /> 
                   some old game statistics<br />    
                   some old game statistics<br />    
                   some old game statistics<br />    
                   some old game statistics<br />    
                   some old game statistics<br />    
                </div>
                





            </div>
        )
    }
}