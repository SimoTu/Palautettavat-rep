import React,{Component} from 'react';



export class GetRegs extends Component {
//luodaan state, jossa registrations taulukko
  state = {
    array: []
  }
// haetaan backendiltä dataa
  componentDidMount() {
    fetch('http://127.0.0.1:8000/random')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      this.setState({ array: data })
    })
    .catch(console.log)
  }



    render() {
        return (
          <div>
            <a href="btn" className="myButton"  onClick={() => {window.location.reload();  }}>Päivitä</a>
           
     <br></br>
     <br></br>
     <br></br>
         Pelilauta
         <br></br>
         <li>{this.state.array[0]}</li>
         <li>{this.state.array[1]}</li>
         <li>{this.state.array[2]}</li>
         <li>{this.state.array[3]}</li>
         <li>{this.state.array[4]}</li> 
        
            </div>
        )
    }
}

export default GetRegs