import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    console.log(e.target.value,'value')
  }
  render() {
    return(
      <input 
        className="todolist-input"
        placeholder="text something"
        onInput={this.handleInput}
      >
      </input>
    )
  }
}

export default Input;