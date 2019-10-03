import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import AddReg from "./AddReg.js";
import GetRegs from "./GetRegs.js";
import EditRegs from './EditRegs.js';
import './App.css';



// ns. luokka josta tiedot lähtevät lopulta index.html tiedostoon

class App extends Component {
  // laitetaan menu valikko ja, browserrouterilla mahdollisuus valita erinäkymät eri osoitteen takaa antamalle sille eri komponentteja

    
  render() {
   
    
      return (

        <div className="App">
        <header className="App-header">
        
        <ul>
                  <li><a href="Browse">Browse</a></li>
                  <li><a href="Add">Add</a></li>
                  <li><a href="Modify">Modify</a></li>
        </ul>

            <BrowserRouter>
                     <br></br>
                     <br></br><br></br><br></br>
      
                         <Route path="/Add" component={AddReg}/>
                         <Route path="/Browse" component={GetRegs}/>
                         <Route path="/Modify" component={EditRegs}/>

            </BrowserRouter> 
  </header>
      </div>

          
      )
  }















 
}

export default App;