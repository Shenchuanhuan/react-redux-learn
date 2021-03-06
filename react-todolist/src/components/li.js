import React,{ Component } from 'react';

class Li extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //input勾选
  handleSelect(num) {
    if (this.props.onClick) {
      this.props.onClick(num);
    }
  }

  //点击li选择
  handleClick(num) {
    this.handleSelect(num);
  }
  
  render() {
    const { num, checked, text } = this.props;
    return (
      <li 
        key={num} 
        data-checked={checked} 
        className="todolist-li" 
        onClick={() => this.handleClick(num)}
      >
        <input type="checkbox" checked={checked} onClick={()=>this.handleSelect(num)}/>
        <span>{text}</span>
      </li>
    )
  }
}

export default Li;