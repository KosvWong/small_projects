import React from 'react';



export default class Guess extends React.Component{
    constructor(props){
          super(props);

            this.state = {
                guess:'',
                error: null,
                inputType: false
            }
      }  


      renderError() {
          if (!this.state.error) {return null;}
          return <div style={{color: 'red'}}>{this.state.error}</div>;
      }


    render (){ 
        return(
         <div>
            <div className="form">
                <form onSubmit={this.handleGuess.bind(this)}>
                    {this.switchInput()}
                </form>
            </div>
            <div className="toggle">
                <div className="red">Change Input Type to: </div>
                <div>
                    <button 
                        type="button" 
                        className="btn" 
                        style={{cursor:'pointer', display: 'block'}} 
                        onClick={this.toggleInput.bind(this)}
                        >
                        {this.state.inputType ? ' Auto ' : 'Manuel'}
                    </button>
                </div>      
            </div>
            <div className="error">{this.renderError()}</div>
        </div>
        );
        }

        handleGuess(event){
        event.preventDefault();
        

         this.setState({
            guess: this.refs.createInput.value
         });

        const createInput=this.refs.createInput
        const currentGuess = createInput.value
        const validateGuess = this.validateGuess(currentGuess);
        this.refs.createInput.value= '';
        
        
        if (validateGuess){
            this.setState({ error: validateGuess });
            return;
        }

        this.setState({ error: null });
        this.props.createGuess(currentGuess);
        
    }
        
        validateGuess(currentGuess){ 
        if (!currentGuess){ return 'Please enter a Guess.';
            } else if (this.props.guesses.indexOf(currentGuess) !== -1){  return 'You already made this guess.';
        } else { return null;}
    }

    toggleInput() {
       let inputType=!this.state.inputType
        this.setState(
            {inputType: inputType}
        )

    }
    
    switchInput() {
        if(this.state.inputType) {
            return (
                <div>
                <input type="text" 
                    placeholder="Guess" 
                    ref="createInput" 
                    className='input' 
                    maxLength="1" 
                    disabled={this.props.over}
                    />
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{cursor:'pointer', display: 'block'}} 
                    disabled={this.props.over} 
                    > Send </button>
                </div>
                    )
        } else {
            return (
                <input 
                    type="text" 
                    placeholder="Guess" 
                    ref="createInput" 
                    className='input' 
                    maxLength="1" 
                    onKeyUp={this.handleGuess.bind(this)} 
                    disabled={this.props.over}
                        />
                    )
                }
            }
        

}