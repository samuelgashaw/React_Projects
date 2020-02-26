import React, { Component } from 'react';
import DemoClass from './DemoClass';

export default class MainSection extends Component {
  render() {
    let myStyle = {
      fontSize: '35px',
      fontFmaily: 'courier',
      color: 'Red'
    };
    return (
      <div>
        <h1 style={myStyle}>This is my Main Content Window</h1>
        <DemoClass></DemoClass>
      </div>
    );
  }
}
