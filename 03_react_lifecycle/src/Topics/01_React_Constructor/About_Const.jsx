import React, { Component } from 'react';

export default class About_Const extends Component {
  /**
   * Constructor in class
   * Always call parent class constructor (super())
   * super() must be called before this.state
   *
   */
  constructor(props) {
    super(props);

    this.state = { data: 'About React Constructor call' };
  }

  render() {
    return (
      <div>
        <h2>This is React Constructor call example</h2>
        <h3 style={{ color: 'red' }}>{this.state.data}</h3>
        <ul style={{ textAlign: 'left' }}>
          <li>
            It is necessary to have a constructor in every class component
          </li>
          <li>Constructor must call super class before any states</li>
          <li>constructor must bind normal function inside scope</li>
          <li>Arrow functions doesn't need to be binded in the constructor</li>
          <li>Use "this" keyword inside the class and constructor</li>
        </ul>
      </div>
    );
  }
}
