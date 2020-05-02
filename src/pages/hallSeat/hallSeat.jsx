import './hallSeat.less'
import React, { Component } from 'react'
import EditCanvas from '../../components/edit-canvas'
import EditSteps from '../../components/edit-steps'
import { Layout, Button, Icon } from 'antd'

const { Sider, Content, Footer } = Layout

export default class HallSeat extends Component {

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="hall-seat">
        <Layout style={{ height: '100%' }}>
          <Sider theme="light" width="300px">
            <EditSteps></EditSteps>
          </Sider>
          <Content style={{ position: 'relative' }}>
            <Button title="返回" onClick={this.goBack} style={{ position: 'absolute', left: 30, top: 30 }} type="dashed" shape="circle" size="large">
              <Icon type="arrow-left"></Icon>
            </Button>
            <EditCanvas></EditCanvas>
          </Content>
        </Layout>
      </div>
    )
  }
}
