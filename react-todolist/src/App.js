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
      lists: [],
      show: 'all'
    }
    this.handleAddList = this.handleAddList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.lists = [];
  }

  //添加项
  handleAddList(value) {
    let { lists } = this.state;
    lists.push(value);
    this.setState({
      lists
    })
  }
  //列表点击事件
  handleClick(num) {
    const { lists } = this.state;
    let _lists = null;
    if (this.lists.length > 0) {
      _lists = this.lists;
    } else {
      _lists = lists;
    }
    let arr = [];
    arr = _lists.map(item => {
        if (item.key === num) {
          item.checked = !item.checked;
        }
        return item;
    })
    this.setState({
      lists: arr
    })
  }

  //筛选
  handleFilter(key) {
    this.setState({
      show: key
    })
  }

  render() {
    const { lists, show } = this.state;
    
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
        <Ul onClick={this.handleClick} show={show}>{lists}</Ul>
        <Footer onFilter={this.handleFilter} onDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
