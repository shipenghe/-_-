import React, { Component } from 'react'
import { Modal, Button, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

import './index.less'
import memory from '../../utils/memory'
import storage from '../../utils/storage'


const { confirm } = Modal;
const user = memory.user

const welcomeList = [
  '您好，欢迎来到上海师范大学图书馆座位预约系统！',
  '公共秩序 携手共建',
  '文明选座 有你有我',
  '通知：本周三图书馆因故闭馆一天，请提前规划您的时间'
]

class index extends Component {

  state = {
    marqueeId: 0,
  }

  logout = () => {
    // 确认退出
    confirm({
      title: '确认退出吗?',
      content: '点击确认退出，点击取消留在此页面',
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        // 清除用户缓存
        storage.removeUser()
        // 清除内存信息
        memory.user = {}
        // 回到登录页面
        this.props.history.replace('/login')
      },
      onCancel() { },
    })
  }

  changeMarqueeId() {
    let marqueeId = (this.state.marqueeId + 1) % welcomeList.length
    this.setState({
      marqueeId
    })
  }

  componentWillMount() {
    this.marqueeFlag = setInterval(() => {
      this.changeMarqueeId()
    }, 20000)
  }

  componentWillUnmount() {
    clearInterval(this.marqueeFlag)
  }

  render() {
    return (
      <div className="header">
        <div className="header-left">
          <Icon className="sound" type="sound" theme="twoTone" twoToneColor="#1DA57A" />
          <div className="marquee">{welcomeList[this.state.marqueeId]}</div>
        </div>
        <div className="header-right">
          <span>{user.name}</span>
          <Button type="primary" shape="round" size="small" ghost className="logout" onClick={this.logout}>退出</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(index)