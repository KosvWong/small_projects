import React, { Component } from 'react';
import { Redirect } from 'react-router'

export default class Login extends Component {


  
  render() {
    return (
      <div className="login_page">
              <form onSubmit={this.loggedIn.bind(this)} className="login_form-alignment" >
                  <span className="login_form">User Name:<br/></span>
                  <input type="text" name="User Name" ref="user"/>
                  <br/>
                  <span className="login_form">Password:<br/></span>
                  <input type="password" name="Password" ref="password"/>
                  <br/><br/>
                  <input type="submit"/>
              </form> 
              {this.props.login && (
          <Redirect to={'/houses'}/>
        )}
      </div>
    );
  }

  loggedIn(e){
    e.preventDefault();
    let login=false
    this.props.users.find((user) => {
      console.log(user.user + user.password)
      if (user.user === this.refs.user.value) {
        console.log(user.user === this.refs.user.value)
        if(user.password === this.refs.password.value){
            console.log( "setlogin works")
            this.props.setLogin()
            return login=true
        }
      }         
    })
    if(!login){
      alert('wrong user name or password..!') 
    }
  }
}