import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './components/footer';
import Ul from './components/ul';
import Input from './components/input';

import './style/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todoList</h2>
        </div>
        <div className="todolist">
         <Input></Input>
        </div>
        
      </div>
    );
  }
}

export default App;
