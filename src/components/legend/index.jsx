import './index.less'
import React, { Component } from 'react'
import getLatticeType, { seatType } from '../../config/seatType'

export default class index extends Component {
  handleClick = (index) => {
    if (this.props.click) {
      this.props.click(index)
    }
  }
  getLegendContent = () => {
    const arr = new Array(8).fill(1)
    return arr.map((item, index) => {
      return (
        <div onClick={this.handleClick.bind(this,index)} className={`legend-item ${this.props.click ? 'enable-click' : ''}`}>
          <img src={getLatticeType(index)} className="legend-img"></img>
          <div className="legend-text">{seatType[index]}</div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="legend">
        {this.getLegendContent()}
      </div>
    )
  }
}
