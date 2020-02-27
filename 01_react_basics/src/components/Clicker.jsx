import React, { Component } from 'react';

export default class Clicker extends Component {
  constructor(props) {
    super();
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  decrementCount() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }
  resetCount() {
    this.setState(() => ({
      count: 0
    }));
  }
  render() {
    return (
      <div>
        <div className="clicker">
          <div className="startClicker">Counter:{this.state.count}</div>
          <div>
            {/*Adding value to counter*/}
            <button onClick={this.incrementCount} className="btn btn-success">
              +
            </button>
            {/*Reseting value to counter*/}
            <button onClick={this.resetCount} className="btn btn-danger">
              Reset
            </button>
            {/*Decrement value to counter*/}
            <button onClick={this.decrementCount} className="btn btn-success">
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}
