import React, { Component } from 'react';
import Workflow from './WorkFlow';
export default class AboutLifeCycle extends Component {
  render() {
    return (
      <div>
        <hr></hr>
        <h2>This section is about class component lifecycle</h2>
        <ol style={{ textAlign: 'left' }}>
          <li>Initial Phase(BirthOfComponent)</li>
          <ul>
            <li>
              <strong>getDefaultprops()</strong>
            </li>
            <p>it's used to specify the default value</p>
            <li>
              <strong>getInitialState()</strong>
            </li>
            <p>This function will be invoked before creation of component</p>
          </ul>
          <li>Mounting phase</li>
          <ul>
            <li>Constructor(Props) and State</li>
            <li>static getDerivedStateFromProps(props, state)</li>
            <li>render()</li>
            <li>componentDidMount</li>
          </ul>
          <li>Updating Phase</li>
          <ul>
            <li>static getDerivedStateFromProps(props, state)</li>
            <li>shouldComponentUpdate()</li>
            <li>render()</li>
            <li>getSnapshotBeforeUpdate()</li>
            <li>componentDidUpdate()</li>
          </ul>
          <li>Unmounting Phase</li>
          <ul>
            <li>componentWillUnmount()</li>
          </ul>
        </ol>
        <h3>Component workflow in sequence</h3>
        <Workflow></Workflow>
      </div>
    );
  }
}
