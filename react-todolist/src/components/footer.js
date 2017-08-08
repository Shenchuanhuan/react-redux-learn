import React, { Component　} from 'react';



export default class Footer extends Component {


  render() {
    return (
      <div className="todolist-footer">
        <span>全部</span>
        <span>未完成</span>
        <span>已完成</span>
      </div>
    )
  }
}