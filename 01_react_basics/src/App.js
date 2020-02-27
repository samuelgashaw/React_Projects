import React from 'react';
import './App.css';
import MyHeader from './components/myHeader';
import MyFooter from './components/MyFooter';
import MainSection from './components/MainSection';
import Clicker from './components/Clicker';
import AboutState from './components/AboutState';
import AboutProps from './components/AboutProps';
import AboutFunctionProps from './components/AboutFunctionProps';
function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <h1>This is React Intro Page</h1>
      <p>This is react intro page paragraph</p>
      <MainSection></MainSection>
      <Clicker></Clicker>
      <AboutState></AboutState>
      <AboutProps name="props"></AboutProps>
      <AboutFunctionProps
        name="Function props"
        value="This is another value"
      ></AboutFunctionProps>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
