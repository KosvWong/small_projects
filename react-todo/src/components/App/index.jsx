import React, { Component } from 'react';
import TodosList from '../Todos-List';
import CreateTodo from '../Create-Todo';
import _ from 'lodash';
import './App.css';

  const todos = [
    {
      task: 'Learn React',
      isCompleted: false
    },
    {
      task: 'Drink milk',
      isCompleted: true
    }
    ];

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-center">React Todo List</h1>
        <div  className="container">
          <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
          <br/> 
          <TodosList 
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)} 
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
            />
          </div>
      </div>
    );
  }

toggleTask(task){
  const foundTodo = _.find(this.state.todos, todo => todo.task === task);
  foundTodo.isCompleted = !foundTodo.isCompleted;
  this.setState({ todos: this.state.todos });
} 

createTask(task) {
  this.state.todos.push({
    task,
    isCompleted: false
  });
  this.setState({ todos: this.state.todos });
  } 

  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete){
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos});
  }

}
