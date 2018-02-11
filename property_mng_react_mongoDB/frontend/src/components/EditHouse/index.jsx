import React, { Component } from 'react';


export default class EditHouse extends Component {
  constructor(props) {
      super(props);
      this.state={
        houseList:[
          {name:'House_Name',type:'text'},
          {name:'Room', type:'number'},
          {name:'Total_Capacity', type:'Number'},
          {name:'Number', type:'Number'},
          {name:'Street', type:'text'},
          {name:'City', type:'text'},
          {name:'State', type:'text'},
          {name:'Zip', type:'Number'}
        ]
      }

      this.sendForm=this.sendForm.bind(this)
      this.newHouse=this.props.newHouse.bind(this)
  }

  sendForm(e) {
    e.preventDefault()
    let name=this.refs.House_Name.value;
    let room=this.refs.Room.value;
    let t_capacity=this.refs.Total_Capacity.value;
    let number=this.refs.Number.value;
    let street=this.refs.Street.value;
    let city=this.refs.City.value;
    let state=this.refs.State.value;
    let zip=this.refs.Zip.value;

    this.newHouse(name, room, t_capacity, number, street, city, state, zip)
    this.props.addHouseChange()
 }
  

  render() {
    let houseListEJX=this.state.houseList.map((list, i)=>{
      return (
        <tr key={i}>
        <th className="form">
          {list.name}
        </th>
        <th>
          <input className="form-control" type={list.type} name={list.name} ref={list.name}/>
        </th>
      </tr>
      )
    })
    return (
        <div>
           {this.props.addHouse ? <form>
                                      {houseListEJX}              
                                      <tr>
                                      <th></th>
                                      <th> 
                                        <input type="submit" value=" Add " onClick={this.sendForm}/>
                                        <input type="submit" value="Cancel" onClick={this.props.addHouseChange}/>                                
                                      </th>
                                      </tr> 
                                  </form>
                                  :
                                  <button 
                                      type="submit" 
                                      className="button" 
                                      onClick={this.props.addHouseChange}
                                      >
                                        New
                                  </button>
            }
            {this.props.addHouse ? '':<button type="button" className="button" onClick={this.props.delHouseChange}>Delete</button>}
    </div>)
    }
}
