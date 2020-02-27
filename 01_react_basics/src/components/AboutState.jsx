import React, { Component } from 'react';

export default class AboutState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false
    };
    this.toggleDisplayInfo = this.toggleDisplayInfo.bind(this);
  }
  toggleDisplayInfo() {
    this.setState({ displayInfo: !this.state.displayInfo });
  }
  render() {
    return (
      <div>
        <br />
        <hr />
        <h1>About State Updates and biding</h1>
        {this.state.displayInfo ? (
          <div>
            <p>
              <h4>Display Detail information.</h4>
              <ul>
                <li>How to manage State updates (Using setState() function)</li>
                <li>Binding(if it's arrow function we don't need to bind)</li>
                <li>State is only updated with setState otherwise state is
                  immutable
                </li>
              </ul>
            </p>
            <button
              className="btn btn-success"
              onClick={this.toggleDisplayInfo}
            >
              Show Less
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-success"
              onClick={this.toggleDisplayInfo}
            >
              Read More
            </button>
          </div>
        )}
      </div>
    );
  }
}
