import React, { Component } from 'react'
import { Badge } from 'antd'

import './index.less'
import room0 from '../../assets/imgs/cover.jpg'


export default class index extends Component {
  render() {
    return (
      <div className="display-pic">
        <img className="full" src={room0} />
        <Badge className="room-title"
          count={'零点书房'}
        />
      </div>
    )
  }
}
