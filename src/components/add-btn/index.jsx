import React, { Component } from 'react'
import { Button, Icon } from "antd";

export default class index extends Component {
  render() {
    return (
      <Button type="primary" onClick={this.props.handleClick}>
        <Icon type="plus"></Icon>
        {this.props.children}
      </Button>
    )
  }
}
