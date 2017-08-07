import React, { Component } from 'react';

import Li from './li.js';

class Ul extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        <Li></Li>
      </ul>
    )
  }
}

export default Ul;