import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Houses from '../Houses';
import Tenants from '../Tenants';
import Payments from '../Payments';
import Home from '../Home';
import Login from '../Login';
import Admin from '../Admin';
import axios from 'axios';

export default class PrManApp extends Component {
    constructor(){
        super(); 
        this.state = {
            users: [
              {user: 'x', password:'y'},
              {user: 'a', password: 'b'}
            ],

            houses: [
              {
                name:'San Jose', 
                room: 5, 
                t_capacity: 10, 
                c_capacity:9, 
                address: {
                  number: 1788,
                  street: 'avati ct',
                  city: 'san jose',
                  state: 'ca',
                  zip: 95131
                }
              }
            ],

            tenants: [
              {
              first_name: 'tom',
              last_name: 'jerry',
              e_mail: 'tom@jerry.com',
              phone: '650-123-4567',
              house: 'San Jose',
              entrance_date: '11-1-2017'
              },

              {
              first_name: 'mickey',
              last_name: 'mouse',
              e_mail: 'mickey@mouse.com',
              phone: '650-123-4567',
              house: 'San Jose',
              entrance_date: '11-1-2017'
              }
            ],

            login: false,
        }
        this.newHouse=this.newHouse.bind(this)
        this.deleteHouse=this.deleteHouse.bind(this)
        this.newTenant=this.newTenant.bind(this)
        this.deleteTenant=this.deleteTenant.bind(this)
    }


componentWillMount() {
  axios.get('http://localhost:8080/houses')
    .then((response) => {
      console.log(response.data)
      this.setState({houses: response.data})
    })
  axios.get('http://localhost:8080/tenants')
    .then((response) => {
      console.log(response.data)
      this.setState({tenants: response.data})
    })
}
// capacity=()=>{let houses=this.state.houses
//       let tenants= this.state.tenants
//       for(let i; i<houses.length; i++){
//        let count = 0;
//         for(let j; j<tenants.legth; j++){          
//           if(houses[i].name===tenants[j].house){
//           count+=1
//           }
//         }
//         houses[i].c_capacity=count;
//         this.setState({houses:houses})
//       }
//     }

newHouse = (name, room, t_capacity, number, street, city, state, zip) => {
    axios.post('http://localhost:8080/newhouse', {
      name: name,
      room: room,
      t_capacity: t_capacity,
      c_capacity: '',
      
        number: number,
        street: street,
        city: city,
        state: state,
        zip: zip
      
    }).then((response) => {
          axios.get('http://localhost:8080/houses')
          .then((response) => {
            this.setState({houses: response.data})
          })
      }).catch((err) => {
        console.log(err)
      }) 
}

newTenant = (first_name, last_name, e_mail, phone, house, entrance_date) => {
  axios.post('http://localhost:8080/newtenant', {
    first_name:first_name, 
    last_name:last_name, 
    e_mail:e_mail, 
    phone:phone, 
    house:house, 
    entrance_date:entrance_date
  }).then((response) => {
      axios.get('http://localhost:8080/tenants')
        .then((response) => {
          this.setState({tenants: response.data})
        })        
    }).catch((err) => {
      console.log(err)
    })
    // this.capacity();
}

deleteHouse(i) {
  let id = this.state.houses[i]._id
  axios.delete(`http://localhost:8080/houses/${id}`)
    .then((response) => {
      axios.get('http://localhost:8080/houses')
        .then((response) => {
          console.log(response.data)
          this.setState({houses: response.data})
        })
    })
}

deleteTenant(i) {
  let id= this.state.tenants[i]._id
  axios.delete(`http://localhost:8080/tenants/${id}`)
    .then((response) => {
      console.log('tenants')
      axios.get('http://localhost:8080/tenants')
      .then((response) => {
        console.log(response.data)
        this.setState({tenants: response.data})
      })
    })
} 

 setLogin(){
        this.setState({
        login: true
     })    
 }

  render() {
    return (
      <div>
        <div>
          <nav className="main-navigation" role="navigation">
            <div className="nav-menu">
             <div className="container"> 
               <div className="row">
                <ul>
                  <div className="col-md-1">
                    <img src="http://www.baycc.org/images/logo_base.png" className="baycc_logo" alt="logo"/>
                  </div>

                  <div className="col-md-2">
                  </div>

                  <div className="col-md-6">
                    <li className="page_item"><Link to="/">Home</Link></li>

                    {this.state.login ? 
                      <li className="page_item"><Link to="/houses">Houses</Link></li>:
                      <li className="page_item"><Link to="/login">Houses</Link></li>
                    }
                    {this.state.login ?  
                      <li className="page_item"><Link to="/tenants">Tenants</Link></li>:
                      <li className="page_item"><Link to="/login">Tenants</Link></li>
                    }
                    {this.state.login ? 
                      <li className="page_item"><Link to="/payments">Payments</Link></li>:
                      <li className="page_item"><Link to="/login">Payments</Link></li>
                    }
                    {this.state.login ? 
                      <li className="page_item"><Link to="/admin">Admin</Link></li>:
                      <li className="page_item" style={{display: 'none'}}><Link to="/admin">Admin</Link></li>
                    }   
                  </div>
                  <div className="col-md-1">
                   {this.state.login ? '': <li id="login"><Link to="/Login" >login</Link></li>}
                  </div>
                </ul>
              </div>
            </div>
          </div>            
        </nav>
      </div>

      <div>
        <Switch>
          <Route path="/login" render={ () => (
            <Login 
              setLogin={this.setLogin.bind(this)} 
              users={this.state.users}
              login={this.state.login}
            />  
          )} /> 
          <Route exact path="/" component={Home} />
          <Route path="/houses" render={()=>(           
            <Houses 
              houses={this.state.houses} 
              newHouse={this.newHouse}
              deleteHouse={this.deleteHouse}
            />          
          )} />
          <Route path="/tenants" render={() => (
            <Tenants 
              tenants={this.state.tenants}
              houses={this.state.houses}
              newTenant={this.newTenant} 
              deleteTenant={this.deleteTenant}
            />  
          )} />
          <Route path="/payments" component={Payments} />
          <Route path="/admin" component={Admin} />          
        </Switch>
      </div>
    </div>
    );
  }
}

 
