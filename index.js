import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div>
        <div>
          <p>Event Handler</p>
          <button>Click me</button>
        </div>
        <div style={{"margin-top": "50px"}}>
          <button>Increment</button>
          <button>Increment</button>
          <p>Current Counter : {this.state.counter}</p>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
