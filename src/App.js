import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/index';
import Routes from './routes';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Routes></Routes>
      </div>
    );
  }
}

export default App;
