import React, { Component } from 'react';
import './App.css';

import DetailsContainer from '../Details/DetailsContainer';
import List from '../List/List';
import NewToDo from '../NewToDo/NewToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left">
          <NewToDo />
          <List />
        </div>
        <div className='right'>
          <DetailsContainer />
        </div>
        
      </div>
    );
  }
}

export default App;
