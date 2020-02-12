import React, { Component } from 'react'
import { Carousel } from 'antd'
import './Display.less'
import DisplayPic from '../../components/display-pic'

export default class Display extends Component {
  render() {
    return (
      <div className="display-container">
        <Carousel>
          <DisplayPic />
          <DisplayPic />
        </Carousel>
      </div>
    )
  }
}
