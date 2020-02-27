import React from 'react';

export default function AboutFunctionProps(props) {
  return (
    <div>
      <h4>Welcome to {props.name}</h4>
      <p>This is another args in function{props.value}</p>
    </div>
  );
}
