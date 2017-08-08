import React, { Component } from 'react';

import Li from './li.js';

class Ul extends Component {
  constructor(props) {
    super(props);
    this.renderLists = this.renderLists.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //渲染list列表
  renderLists() {
    if (this.props.children.length === 0) {
      return null;
    } else {
      return this.props.children.map(item => {
        return(
          <Li
            key={item.key}
            num={item.key}
            checked={item.checked}
            text={item.text}
            onClick={this.handleClick}
          />
        )
      })
    }
  }

  //点击事件
  handleClick(num) {
    if (this.props.onClick) {
      this.props.onClick(num);
    }
  }
  render() {
    const lists = this.renderLists();
    return (
      <ul className="todolist-ul">
        {lists}
      </ul>
    )
  }
}

export default Ul;