import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

  constructor() {
    super();

    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this);
  }

  render() {
    const style = {fontSize: "50px", padding: "15px 30px"}

    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>
        <span className="count" style={style}>
            {this.state.counter}
        </span>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

}

export default Counter;
