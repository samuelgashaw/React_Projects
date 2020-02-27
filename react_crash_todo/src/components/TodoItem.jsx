import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkBox"
            onChange={this.props.markComplete.bind(this, id)}
          ></input>
          <button
            style={btnStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            X
          </button>
          {title}
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  markComplete: propTypes.func.isRequired,
  deleteTodo: propTypes.func.isRequired
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};
export default TodoItem;
