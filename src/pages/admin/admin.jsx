import React,{ Component } from "react"
import {Redirect} from 'react-router-dom'
import memory from '../../utils/memory'

export default class Admin extends Component {
  render() {
    // 读取用户信息，如未登录跳转至登录页面
    const user = memory.user
    if(!user.id) {
      return <Redirect to="/login" />
    }
    return(
      <div>
        hello { user.name }
      </div>
    )
  }
}