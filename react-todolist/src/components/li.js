import React,{ Component } from 'react';

class Li extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //input勾选
  handleSelect() {
    console.log(1)
  }

  //点击li选择
  handleClick() {
    
  }
  
  render() {
    const { num, checked, text } = this.props;
    return (
      <li 
        key={num} 
        data-checked={checked} 
        className="todolist-li" 
        onClick={this.handleClick}
      >
        <input type="checkbox"/>
        <span>{text}</span>
      </li>
    )
  }
}

export default Li;