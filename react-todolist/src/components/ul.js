import React, { Component } from 'react';

import Li from './li.js';

class Ul extends Component {
  constructor(props) {
    super(props);
    this.renderLists = this.renderLists.bind(this);
  }

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
          />
        )
      })
    }
    
  }
  render() {
    console.log(this.props.children,'this.props.children')
    const lists = this.renderLists();
    return (
      <ul className="todolist-ul">
        {lists}
      </ul>
    )
  }
}

export default Ul;