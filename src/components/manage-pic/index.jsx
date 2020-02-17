import React, { Component } from 'react'
import { Card, Icon } from 'antd'
import './index.less'


const { Meta } = Card;

export default class index extends Component {
  render() {
    return (
      <div className="manage-pic-ctn" title="点击编辑">
        <Card
          className="full"
          hoverable
          cover={
            <img
              src={this.props.img}
            />
          }
        >
          <Meta
            title={this.props.title}
            description={this.props.description}
          />
        </Card>
      </div>
    )
  }
}
