import React,{Component} from 'react';
import axios from 'axios';


export class GetRegs extends Component {
//luodaan state, jossa registrations taulukko
  state = {
    registrations: []
  }
// haetaan backendiltä dataa
  componentDidMount() {
    fetch('http://localhost:8000/users/testi')
    .then(res => res.json())
    .then((data) => {
      this.setState({ registrations: data })
    })
    .catch(console.log)
  }


//poisto-operaatio
  OnDelete(meetupId){
    
    axios.delete(`http://localhost:8000/delete/testi/${meetupId}`)
      .then(response => {
        this.props.history.push('/');
        this.props.history.push('/Browse');
      }).catch(err => console.log(err));

  }
// annetaan näkyväksi taulu, johon tulee rekisteröinnit sekä poista painike
    render() {
        return (
          <table className="table" id="table1">
          <tbody>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>

          {this.state.registrations.map((user) => (
                  <tr>
                  <td>{user.id}</td>
                  <td>{user.first}</td>
                  <td>{user.last}</td>
                  <td>{user.age}</td>
                  <button onClick ={this.OnDelete.bind(this,user.id)} className="myButton" type="button">Delete</button>
                </tr>
              ))}
            </tbody>
            </table>
        )
    }
}

export default GetRegs