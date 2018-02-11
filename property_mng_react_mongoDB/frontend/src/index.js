import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrManApp from './components/PrManApp';
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


// function user(user, password){
//     this.user = user;
//     this.password = password;
// }

// const users=[
//     new user('a', 'b'),
//     new user('q', 'w')
// ]
    
// function house(name, t_capacity, c_capacity, address){
//     this.name = name;
//     this.t_capacity = t_capacity;
//     this.c_capacity = c_capacity;
//     this.address = address;
// }

// const housess=[
//     new house('a', 's')
// ]
    



ReactDOM.render((
    
<Router>
    <PrManApp/>
</Router>
), document.getElementById('root'));
registerServiceWorker();
