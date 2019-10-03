import React from 'react';
import axios from 'axios';



// luodaan luokka rekisteöintien muokkaamista varten
export default class EditRegs extends React.Component {

// käytetään samaa ideaa kuin AddRegissä, mutta muutetaan metodi sopivaksi updatea varten
  addRegistration(newReg){
    axios.request({
      method:'put',
      url:`http://localhost:8000/update/testi/${this.refs.first.value}/${this.refs.last.value}/${this.refs.age.value}/${this.refs.regID.value}`,
      data: newReg
    }).then(response => {
      // vaihdetaan takaisin browse sivulle
      this.props.history.push('/Browse');
    }).catch(err => console.log(err));
  }
// tallennetaan kenttien arvot
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
// samanlainen lomake kuin lisäyksessä, mutta eritarkoitusta varten
  render() {
    return (
      <div className="container2">
       
      <h1>Edit Registration</h1>
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
         <input type="submit" value="Update" className="btn" />
       </form>
     
     </div>
    );
  }
}