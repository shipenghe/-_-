import React, { Component } from 'react'
import './index.less'
import getLatticeType from '../../config/seatType'

export default class index extends Component {
  render() {
    return (
      <div className="canvas-lattice" style={{backgroundImage: 'url('+ getLatticeType(this.props.type) +')'}}>
      </div>
    )
  }
}
