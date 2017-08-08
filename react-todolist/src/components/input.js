import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      num: 0
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener('keydown',this.handleKeyDown);
  }
  //按下回车键添加list
  handleKeyDown(e) {
    if (13 === e.keyCode) {
      if (this.props.onAddList) {
        this.handleClick();
      }
    }
  }
  //输入框
  handleInput(e) {
    let value = e.target.value.trim();
    this.setState({
      inputValue: value
    })
  }
  //点击确定按钮添加list
  handleClick() {
    const { num, inputValue } = this.state;
    if (inputValue) {
      let _num = num + 1;
      if (this.props.onAddList) {
        this.props.onAddList({key: _num, text: inputValue, checked: false});
      }
      this.setState({
        inputValue: '',
        num: _num
      })
    }
  }

  render() {
    const { inputValue } = this.state;
    return(
      <div style={{width: 400}}>
        <input
          value={inputValue} 
          className="todolist-input"
          placeholder="text something"
          onInput={this.handleInput}
        >
        </input>
        <button onClick={this.handleClick}>确定</button>
      </div>
    )
  }
}

export default Input;