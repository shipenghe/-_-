import React, { Component } from 'react'
import { Card, Icon } from 'antd'
import './picture.less'
import ManagePic from '../../components/manage-pic'
import Title from '../../components/title'
import AddBtn from '../../components/add-btn/index'

import room0 from '../../assets/imgs/cover.jpg'
import room1 from '../../assets/imgs/cover02.jpg'
export default class Picture extends Component {
  render() {
    return (
      <div>
        <Card className="full picture-box" title={<Title>图片管理</Title>} extra={<AddBtn>添加图片</AddBtn>} style={{ minHeight: 550 }}>
          <ManagePic img={room1} title="理科阅览室" description="静谧的书屋"></ManagePic>
          <ManagePic img={room0} title="零点书房" description="挥洒深夜的汗水"></ManagePic>
        </Card>
      </div>
    )
  }
}
