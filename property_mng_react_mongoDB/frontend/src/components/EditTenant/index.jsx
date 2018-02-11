import React, { Component } from 'react';


export default class EditTenant extends Component {
  constructor(props) {
      super(props);
      this.state={
        tenantList:[
          {name:'first_name', type:'text'},
          {name:'last_name', type:'text'},
          {name:'e_mail', type:'email'},
          {name:'phone', type:'tel'},
          // {name:'house', type:'text'},
          {name:'entrance_date', type:'month'}
        ]
      }
      this.sendTenantForm=this.sendTenantForm.bind(this)
      this.newTenant=this.props.newTenant.bind(this)
  }

  sendTenantForm(e) {
    e.preventDefault()
     let first_name=this.refs.first_name.value;
    let last_name=this.refs.last_name.value;
    let e_mail=this.refs.e_mail.value;
    let phone=this.refs.phone.value;
    let house=this.refs.house.value;
    let entrance_date=this.refs.entrance_date.value;

    this.newTenant(first_name, last_name, e_mail, phone, house, entrance_date)
    this.props.addTenantChange()
 }
  

  render() {
    let tenantListEJX=this.state.tenantList.map((list, i)=>{
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
    let houseListEJX=this.props.houses.map((list, i)=>{
      console.log(list.name)
      return (
        <option key={i} value={list.name}> {list.name}</option>
      )
    })

    return (
        <div>
           {this.props.addTenant ? <form>
                                        {tenantListEJX}  
                                        <th className="form">
                                          House
                                        </th>
                                        <th>
                                          <select name="house" ref="house" className="form-control" >
                                            {houseListEJX}
                                          </select>
                                        </th>
                                        <tr>
                                        <th></th>
                                        <th> 
                                          <input type="submit" value="Add" onClick={this.sendTenantForm}/>
                                          <input type="submit" value="Cancel" onClick={this.props.addChange}/>                                
                                        </th>
                                        </tr> 
                                    </form>
                                    :
                                    <button 
                                        type="submit" 
                                        className="button" 
                                        onClick={this.props.addTenantChange}
                                        >
                                          New
                                    </button>
            }
             {this.props.addTenant ? '':<button type="button" className="button" onClick={this.props.delTenantChange}>Delete</button>}
    </div>)
    }
}
