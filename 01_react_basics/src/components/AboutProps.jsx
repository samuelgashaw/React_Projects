import React, { Component } from 'react';

export default class AboutProps extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Intro {this.props.name}</h2>
        <p>This is how you pass a props value into class component</p>
        <h4>This is default value of props {this.props.value} </h4>
      </div>
    );
  }
}

AboutProps.defaultProps = { value: ':Default Value' };

// class DefaultValueProps extends Component {
//   render() {
//     return (
//       <div>
//         <h4>This is default value of props{this.state.name}</h4>
//       </div>
//     );
//   }
// }
