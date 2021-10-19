import React, { Component } from "react";

export default class App extends Component {
  count = 0;

  constructor(props) {
    super(props)
  
    this.state = {
      clock:0 
    }
  }

  render() {
    return (
      <div>
        <h1>ree {Math.random()}</h1>
        <h1 onClick={()=> {
          this.count++;
          this.setState({clock: this.state.clock+1})
          console.log("count: : " + this.count);
        }}>count {this.count}</h1>
      </div>
    );
  }
}
