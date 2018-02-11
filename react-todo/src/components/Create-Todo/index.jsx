import React from 'react';
import _ from 'lodash';


  export default class CreateTodo extends React.Component {
      constructor(props){
          super(props);

            this.state = {}
      }  

      renderError() {
          if (!this.state.error) {return null;}
          return <div style={{color: 'red'}}>{this.state.error}</div>;
      }
        
    render (){
        return(
            <div className='container'>
            <form onSubmit={this.handleCreate.bind(this)}>
                    <button >Add</button>
                    <input type="text" placeholder="Add a to do" ref="createInput" />
                    {this.renderError()}
            </form>
            </div>
        );
        }

    handleCreate(event){
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput){
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value= '';
    }

    validateInput(task){
        if (!task){
            return 'Please enter a task Todo.';
            } else if (_.find(this.props.todos, todo => todo.task === task)){return 'You already have this Todo.';
        } else {
            return null;
        }
    }
}