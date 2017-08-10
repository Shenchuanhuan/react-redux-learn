import React, { Component　} from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: [
        { value: '全部', key: 'all', checked: true },
        { value: '未完成', key: 'unfinished', checked: false },
        { value: '已完成', key: 'finished', checked: false }
      ]
    }
    this.renderFooter = this.renderFooter.bind(this);
    this.handleClick = this.handleClic.bind(this);
  }

  renderFooter() {
    const { spans } = this.state;
    return spans.map(item => {
      return (
        <span 
          key={item.key} 
          data-select={item.checked}
          onClick={() => this.handleClick(item.key)}
        >
          {item.value}
        </span>
      ) 
    })
  }

  handleClic(key) {
    let { spans } = this.state;
    if (this.props.onFilter) {
      this.props.onFilter(key);
      spans.forEach(item => {
      if (item.key === key) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    })
    this.setState({
      spans: spans
    })
    }
  }

  render() {
    let _spans = this.renderFooter();
    return (
      <div className="todolist-footer">
        { _spans }
      </div>
    )
  }
}