import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class AboutCompAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: 'Welcome to setState'
    };
  }
  updateState = () => {
    this.setState({ msg: "it's react setState() Tutorial" });
  };

  forceUpdateState = () => {
    this.forceUpdate();
  };

  findDomNodeOne = () => {
    let mydiv = document.getElementById('mydivOne');
    ReactDOM.findDOMNode(mydiv).style.color = 'red';
  };
  findDomNodeTwo = () => {
    let mydiv = document.getElementById('mydivTwo');
    ReactDOM.findDOMNode(mydiv).style.color = 'blue';
  };
  render() {
    return (
      <div>
        <h2>React Component API Functions</h2>
        <p style={{ textAlign: 'left' }}>
          React component functions allow us to create an element,transform an
          element and fragment
        </p>
        <ul>
          Component Functions
          <li>setState(): is to update state object</li>
          <li>
            forceUpdate(): allow us to update component manually
            <br></br> Component.forceUpdate(callback)
          </li>
          <li>findDOMNode()</li>
        </ul>
        <div>
          <h3>{this.state.msg}</h3>
          <button onClick={this.updateState}>Click Here to update state</button>
        </div>
        <div>
          <h3>Example of forceUpdate</h3>
          <p>Random Number:{Math.random()}</p>
          <button onClick={this.forceUpdateState}>Force Update</button>
        </div>
        <div>
          <button onClick={this.findDomNodeOne}>Find DOM node one</button>
          <button onClick={this.findDomNodeTwo}>Find DOM node two</button>
          <h3 id="mydivOne">Node One</h3>
          <h3 id="mydivTwo">Node Two</h3>
        </div>
      </div>
    );
  }
}
