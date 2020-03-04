import React from 'react';
import './App.css';
import About_Const from './Topics/01_React_Constructor/About_Const';
import AboutCompAPI from './Topics/02_React_component_API/AboutCompAPI';
import AboutLifeCycle from './Topics/03_LifeCycle/AboutLifeCycle';
import AboutFuncComp from './Topics/03_LifeCycle/AboutFuncComp';
function App() {
  return (
    <div className="App">
      <About_Const></About_Const>
      <AboutCompAPI></AboutCompAPI>
      <AboutLifeCycle></AboutLifeCycle>
      <AboutFuncComp></AboutFuncComp>
    </div>
  );
}

export default App;
