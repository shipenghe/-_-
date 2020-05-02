import React, { Component } from "react"
import { Layout } from 'antd'
import { Redirect, Switch, Route } from 'react-router-dom'

import memory from '../../utils/memory'
import LeftSider from '../../components/left-sider'
import Header from '../../components/header'
import Display from '../Display/Display'
import Department from '../department/department'
import Role from '../role/role'
import User from '../user/user'
import Message from '../message/message'
import Saying from '../saying/saying'
import Science from '../Science/Science'
import Zero from '../Zero/Zero'
import './admin.less'
import Picture from "../picture/picture"

const { Sider, Content, Footer } = Layout

export default class Admin extends Component {
  render() {
    // 读取用户信息，如未登录跳转至登录页面
    const user = memory.user
    if (!user.id) {
      return <Redirect to="/login" />
    }
    return (
      <Layout style={{ height: '100%' }}>
        <Sider className="sider">
          <LeftSider></LeftSider>
        </Sider>
        <Layout>
          <Header>
          </Header>
          <Content className="content">
            <Switch>
              <Route path="/display" component={Display} />
              <Route path="/science" component={Science} />
              <Route path="/zero" component={Zero} />
              <Route path="/engineering" component={Science} />
              <Route path="/compre2" component={Zero} />
              <Route path="/press" component={Science} />
              <Route path="/compre1" component={Zero} />
              <Route path="/literary" component={Science} />
              <Route path="/foreign" component={Zero} />
              <Route path="/social" component={Science} />
              <Route path="/info" component={Zero} />
              <Route path="/department" component={Department} />
              <Route path="/role" component={Role} />
              <Route path="/user" component={User} />
              <Route path="/message" component={Message} />
              <Route path="/saying" component={Saying} />
              <Route path="/image" component={Picture} />
              {/* <Route path="/engineering" component={Engineering} />
            <Route path="/compre2" component={Compre2} />
            <Route path="/press" component={Press} />
            <Route path="/compre1" component={Compre1} />
            <Route path="/literary" component={Literary} />
            <Route path="/foreign" component={Foreign} />
            <Route path="/social" component={Social} />
            <Route path="/info" component={Info} /> */}
              <Redirect to="/display" />
            </Switch>
          </Content>
          <Footer>
            最聪明的人是最不愿浪费时间的人。——但丁
          </Footer>
        </Layout>
      </Layout>
    )
  }
}