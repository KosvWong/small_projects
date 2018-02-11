import React, { Component } from 'react';



export default class Newgame extends Component {


    render() {
        return( 


<span
    type="button" 
    onClick={ this.props.startGame }
    > 
    New Game
 </span>
        )
    }
}