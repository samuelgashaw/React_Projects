import React, { useState, useEffect } from 'react';

//Example of functional componenet with state
function AboutFuncCompPart2() {
  return (
    <div>
      {<MainHeadline></MainHeadline>}
      {<UserForm></UserForm>}
      {<Counter></Counter>}
    </div>
  );
}

export default AboutFuncCompPart2;

//child Functional component with state

const MainHeadline = () => {
  const [greeting, setGreeting] = useState(
    'This is child functional component with state'
  );
  return (
    <div>
      <h4>{greeting}</h4>
      <input
        type="text"
        value={greeting}
        onChange={event => setGreeting(event.target.value)}
      ></input>
    </div>
  );
};

const UserForm = () => {
  /***
   * 1. Create State
   * 2. Create functions that update the state
   * 3. Return component
   */
  // Initial State
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleUserNameInput = event => {
    setUserName(event.target.value);
  };
  const handleFirstNameInput = event => {
    setFirstName(event.target.value);
  };
  const handleLastNameInput = event => {
    setLastName(event.target.value);
  };
  const DisplayUserInfo = () => {
    console.log(userName);
    console.log(firstName);
    console.log(lastName);

    // return (
    // //   <div>
    // //     <h4>{userName}</h4>
    // //     <h4>{firstName}</h4>
    // //     <h4>{lastName}</h4>
    // //   </div>

    // );
  };
  return (
    <div>
      <h3>User Input Form</h3>
      <input
        type="text"
        value={userName}
        onChange={handleUserNameInput}
        placeholder="User Name"
      ></input>
      <input
        type="text"
        value={firstName}
        onChange={handleFirstNameInput}
        placeholder="First Name"
      ></input>
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameInput}
        placeholder="Last Name"
      ></input>
      <button onClick={DisplayUserInfo}>Show User Info</button>
    </div>
  );
};

const Counter = () => {
  const initialCount = +localStorage.getItem('storageCount' || 0);
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(currentCount => currentCount + 1);
  };

  const handleDecrement = () => {
    setCount(currentCount => currentCount - 1);
  };

  useEffect(() => {
    localStorage.setItem('StorageCount', count);
  });

  return (
    <div>
      <h2>Counter</h2>
      <h4>{count}</h4>
      <button type="button" onClick={handleIncrement}>
        Add
      </button>
      <button type="button" onClick={handleDecrement}>
        Remove
      </button>
    </div>
  );
};
