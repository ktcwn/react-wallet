import React from 'react';
import './App.css';
import AddCard from './components/Menu/AddCard'
import Menu from './components/Menu/Menu';
import Settings from './components/Menu/Settings';
import Wallet from './components/Menu/Wallet';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
      <Menu/>
        <Switch>
          <Route path="/AddCard">
            <AddCard/>
          </Route>
          <Route path="/Wallet">
            <Wallet/>
          </Route>
          <Route path="/Settings">
            <Settings/>
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
