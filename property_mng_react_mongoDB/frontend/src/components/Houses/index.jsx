import React, { Component } from 'react';
import EditHouse from '../EditHouse'


export default class Houses extends Component {
  constructor(props) {
    super(props);
    this.state={
      addHouse: false,
      delHouse: false
    }
    
    this.addHouseChange=this.addHouseChange.bind(this)
    this.delHouseChange=this.delHouseChange.bind(this)
  }

  addHouseChange(){
    this.setState({
      addHouse:!this.state.addHouse,
      delHouse: false
    })
  }

  delHouseChange(){
    this.setState({delHouse:!this.state.delHouse})
  }

  render() {
    let housesJSX= this.props.houses.map((house, i) => {
        return (
            <tr key={i} >
                <td >{house.name}</td>
                <td >{house.room}</td>
                <td >{house.t_capacity}</td>
                <td >{house.c_capacity}</td>
                <td >
                            {house.number}
                            {" "}
                            {house.street}
                            {" "}
                            {house.city}
                            {" "}
                            {house.state}
                            {" "}
                            {house.zip}                    
                </td>
                {this.state.delHouse ? <td ><button style={{color:'black'}} type="submit" onClick={() => {this.props.deleteHouse(i)}}>Delete</button></td>:''}
              </tr>
        )
    });

    return (
      <div className="container"> 
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <table className="table table-striped house_form">
              <thead >
                <tr>
                  <th>House Name</th>
                  <th>Number of <br/> Rooms</th>
                  <th>Total<br/>Capacity</th>
                  <th>Current <br/>Capacity</th>
                  <th>Address</th>  
                </tr>
              </thead>
              <tbody>
                {housesJSX}
              </tbody>
            </table>
         </div>  
        </div> 
         <div className="form" style={{color:'black'}}>   
            <EditHouse 
              addHouse={this.state.addHouse}
              delHouse={this.state.delHouse} 
              addHouseChange={this.addHouseChange}
              delHouseChange={this.delHouseChange}
              newHouse={this.props.newHouse}
            />
        </div>                
      </div>
    );
  }
}
