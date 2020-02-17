import React, { Component } from 'react'
import { Carousel } from 'antd'
import './Display.less'
import DisplayPic from '../../components/display-pic'
import room0 from '../../assets/imgs/cover.jpg'
import room1 from '../../assets/imgs/cover02.jpg'

export default class Display extends Component {
  render() {
    return (
      <div className="display-container">
        <Carousel autoplay>
          <DisplayPic img={room0} title="零点书房"/>
          <DisplayPic img={room1} title="理科阅览室"/>
        </Carousel>
      </div>
    )
  }
}
