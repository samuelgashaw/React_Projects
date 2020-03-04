import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: '',
      topic: 'JS'
    };
  }
  handleUsernameChnage = event => {
    this.setState({ username: event.target.value });
  };
  handleCommentChange = event => {
    this.setState({ comment: event.target.value });
  };
  handleTopicChange = event => {
    this.setState({ topic: event.target.value });
  };
  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    const { username, topic, comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username </label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChnage}
          />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea
            value={comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="JS">JS</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Form;
