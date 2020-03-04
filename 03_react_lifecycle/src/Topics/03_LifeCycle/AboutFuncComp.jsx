import React from 'react';
import AboutFuncCompPart2 from './AboutFuncCompPart2';
// Example of functional components
function AboutFuncComp() {
  const greeting = 'Hello Functional component';
  return (
    <div>
      <h3>{greeting}</h3>
      <h4>
        <HeadLine></HeadLine>
      </h4>
      {<GetInfo value={greeting}></GetInfo>}
      {<ArrowFunction></ArrowFunction>}

      {<AboutFuncCompPart2></AboutFuncCompPart2>}
    </div>
  );
}
export default AboutFuncComp;

//Functional component as a child
function HeadLine() {
  const greeting = 'Hello from child functional component';
  return <h4>{greeting}</h4>;
}
//Functional component as a child with props

function GetInfo(props) {
  return <h4>{props.value}</h4>;
}
//Functional component as a child with arrow function

const ArrowFunction = () => {
  return <HeadLine></HeadLine>;
};
