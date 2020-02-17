import React, { Component } from 'react'
import { Badge } from 'antd'

import './index.less'


export default class index extends Component {
  render() {
    return (
      <div className="display-pic">
        <img className="full" src={this.props.img} />
        <Badge className="room-title"
          count={this.props.title}
        />
      </div>
    )
  }
}
