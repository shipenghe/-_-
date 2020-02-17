import React, { Component } from 'react'
import { Button, Icon } from "antd";

export default class index extends Component {
  render() {
    return (
      <Button type="primary">
        <Icon type="plus"></Icon>
        {this.props.children}
      </Button>
    )
  }
}
