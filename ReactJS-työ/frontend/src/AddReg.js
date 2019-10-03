
import React from "react";
import axios from 'axios';

// luokka rekisteröinnin lisäämistä varten
export default class AddReg extends React.Component {
// kutsu backendille 
    addRegistration(newReg){
        axios.request({
          method:'post',
          url:`http://localhost:8000/add/testi/${this.refs.regID.value}/${this.refs.first.value}/${this.refs.last.value}/${this.refs.age.value}/`,
          data: newReg
        }).then(response => {
          this.props.history.push('/Browse');
        }).catch(err => console.log(err));
      }
    //talletetaan arvot ja annetaan ne addRegistrationille , jotta voidaan lähettää backendille
      onSubmit(e){
        const newReg = {
          id: this.refs.regID.value,
          first: this.refs.first.value,
          last: this.refs.last.value,
          age: this.refs.age.value
          
        }
        this.addRegistration(newReg);
        e.preventDefault();
      }

 
 
// annetaan näkyväksi lomake rekisteröinnin lisäystä varten
  render() {
    
    return (
      <div className="container">
       
       <h1>Add Registration</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
             <div className="input-field">
            <input type="text" name="regID" ref="regID" />
            <label htmlFor="regID">...ID</label>
          </div>
          <div className="input-field">
            <input type="text" name="first" ref="first" />
            <label htmlFor="first">First</label>
          </div>
          <div className="input-field">
            <input type="text" name="last" ref="last" />
            <label htmlFor="last">Last</label>
          </div>
          <div className="input-field">
            <input type="text" name="age" ref="age" />
            <label htmlFor="age">Age</label>
          </div>
          <input type="submit" value="Add" className="btn" />
        </form>
      
      </div>
   );
}
}