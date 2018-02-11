import React, { Component } from 'react';
import EditTenant from '../EditTenant'


export default class Tenants extends Component {
  constructor(props) {
    super(props);
    this.state={
      addTenant: false,
      delTenant: false
    }
    
    this.addTenantChange=this.addTenantChange.bind(this)
    this.delTenantChange=this.delTenantChange.bind(this)
  }

  addTenantChange(){
    this.setState({
      addTenant:!this.state.addTenant,
      delTenant: false
    })
  }

  delTenantChange(){
    this.setState({delTenant:!this.state.delTenant})
  }

  render() {
    let tenantsJSX= this.props.tenants.map((tenant, i) => {
        return (
            <tr key={i}>
                <td >{tenant.first_name}</td>
                <td >{tenant.last_name}</td>
                <td >{tenant.e_mail}</td>
                <td >{tenant.phone}</td>
                <td >{tenant.house}</td>
                <td >{tenant.entrance_date}</td>
                {this.state.delTenant ? <td ><button type="submit" onClick={() => {this.props.deleteTenant(i)}}>Delete</button></td>:''}
              </tr>
        ) 
    });
   
    return (
       <div className="container"> 
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <table className="table table-striped tenant_form">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>e_mail</th>
                  <th>Phone</th>
                  <th>House</th>
                  <th>Entrance Date</th>
                </tr>
              </thead>
              <tbody>
                {tenantsJSX}
              </tbody>
            </table>
          </div>
         </div>
         <div className="form" style={{color:'black'}}> 
          <EditTenant
            addTenant={this.state.addTenant}
            delTenant={this.state.delTenant} 
            addTenantChange={this.addTenantChange}
            delTenantChange={this.delTenantChange}
            newTenant={this.props.newTenant}
            houses={this.props.houses}
          />
        </div>          
      </div>
    )
  }
}
