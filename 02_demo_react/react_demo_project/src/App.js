import React from 'react';
import './App.css';
import Customer from './component/Customer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" style={{ height: '50px', color: 'red' }}>
            Customer List with Details
          </h1>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/customerlist" />}
          />
          <Route exact path="/customerlist" component={Customer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
