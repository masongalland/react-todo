import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Details from '../Details/Details';
import List from '../List/List';
import NewToDo from '../NewToDo/NewToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewToDo />
        <List />
        <div>
          <Details />
        </div>
        
      </div>
    );
  }
}

export default App;
