import React, { Component} from "react";
import "./App.css";
import Form from './Form';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Form />
      </div>
    );
  }
}

export default App;