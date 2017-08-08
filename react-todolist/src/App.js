import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './components/footer';
import Ul from './components/ul';
import Input from './components/input';

import './style/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    }
    this.handleAddList = this.handleAddList.bind(this);
  }

  //添加项
  handleAddList(value) {
    let { lists } = this.state;
    lists.push(value);
    this.setState({
      lists
    })
  }
  render() {
    const { lists } = this.state;
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todoList</h2>
        </div>
        <div className="todolist">
         <Input
          onAddList={this.handleAddList}
         ></Input>
        </div>
        <Ul>{lists}</Ul>
      </div>
    );
  }
}

export default App;
