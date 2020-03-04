import React, { Component } from 'react';

export class WorkFlow extends Component {
  // First Step Constructor Loaded
  constructor(props) {
    super(props);

    this.state = {};
    console.log('Constructor has been loaded');
  }

  // Second,Fifth Phase
  static getDerivedStateFromProps(props, state) {
    console.log('Second phase ... static function');
    return null;
  }

  //Fourth Phase
  componentDidMount() {
    console.log('Fourth Phase....componentDidMount');
  }

  //six Phase update
  shouldComponentUpdate() {
    console.log('Fifth phase...shouldComponentUpdate');
    return true;
  }

  //8th phase
  getSnapshotBeforeUpdate() {
    console.log('8th phase... getSnapshotBeforeUpdate');
    return true;
  }
  // 9th pahse
  componentDidUpdate() {
    console.log('9th phase... componentDidUpdate');
  }

  //last phawe

  componentWillUnmount() {
    console.log('last phase .... componentWillUnmount');
  }
  handleClick = () => {
    console.log('Clicked');
    this.setState({ pageTitle: 'Workflow' });
  };
  handleKeyUp = e => {
    this.setState({ inputDetails: e.target.value });
  };
  //Third, seventh phase
  render() {
    console.log('Third phase... render function');

    return (
      <div>
        <input type="text" onKeyUp={this.handleKeyUp}></input>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default WorkFlow;
