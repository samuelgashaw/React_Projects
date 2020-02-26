import React, { Component } from 'react';

export default class DemoClass extends Component {
  render() {
    return (
      <div>
        <ContentOne></ContentOne>
        <ContentTwo></ContentTwo>
      </div>
    );
  }
}

class ContentOne extends Component {
  render() {
    return (
      <div>
        <h1>This is Content One</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto
          eos nesciunt in accusantium fugiat alias, iure dolor ullam esse
          distinctio a quisquam, veniam cupiditate nisi rem itaque consequatur
          quis!
        </p>
      </div>
    );
  }
}

class ContentTwo extends Component {
  render() {
    return (
      <div>
        <h1>This is Content Two</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto
          eos nesciunt in accusantium fugiat alias, iure dolor ullam esse
          distinctio a quisquam, veniam cupiditate nisi rem itaque consequatur
          quis!
        </p>
      </div>
    );
  }
}
