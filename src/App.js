import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter1 from './Counter1.js'
import AddCounter from './AddCounter.js'
import Calc from './Calc.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      howmany:1,
      // number: 0
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this._addcountbox}>Add counter</button>
        {this._displayCounters()}
        <Calc />
      </div>
    );
  }
  
  _addcountbox=()=>{
    let addNewCounter = this.state.howmany +1;
    this.setState({
      howmany: addNewCounter
    })
  }

    _displayCounters=()=>{
      let arrayofCounters=[]
      for(var i=0; i< this.state.howmany; i++){
        arrayofCounters.push(
          <div>
            <p>Counter</p>
            <Counter1/>
            </div>
        );
      }
      return arrayofCounters;
    }
}


  

 

export default App;
