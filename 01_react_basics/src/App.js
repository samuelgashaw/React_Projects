import React from 'react';
import './App.css';
import { LoremIpsum } from 'react-lorem-ipsum';
import MyHeader from './components/myHeader';
import MyFooter from './components/MyFooter';
import MainSection from './components/MainSection';
import Clicker from './components/Clicker';

function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <h1>This is React Intro Page</h1>
      <LoremIpsum p={1} />
      <MainSection></MainSection>
      <Clicker></Clicker>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
