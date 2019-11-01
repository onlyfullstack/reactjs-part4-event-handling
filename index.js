import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      counterToggle: true,
      counterToggleText: "Hide Counter"
    };

    this.handleToggle = this.handleToggle.bind();
    this.handleSimpleEvent = this.handleSimpleEvent.bind();
  }

  handleSimpleEvent() {
    alert("Inside handleSimpleEvent");
  }

  handleToggle() {
    let toggleState = !this.state.counterToggle;
    let toggleText = toggleText ? "Show Counter" : "Hide Counter";
    this.state = { 
      counterToggle: !this.state.counterToggle
       };
  }

  render() {
    return (
      <div>
        <div>
          <p>Event Handler</p>
          <button onClick={this.handleSimpleEvent}>Simple Event Handler</button>
          <button onClick={this.handleToggle}>
            {this.state.counterToggleText}
          </button>
        </div>
        <div style={{ "margin-top": "50px" }}>
          <button>Increment</button>
          <button>Increment</button>
          <p>Current Counter : {this.state.counter}</p>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
