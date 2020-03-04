import React from 'react';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering';
import AboutKey from './components/ConditionalRendering/AboutKey';
function App() {
  return (
    <div>
      <ConditionalRendering></ConditionalRendering>
      <AboutKey></AboutKey>
    </div>
  );
}

export default App;
