import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

import storage from '../../utils/storage'
import memory from '../../utils/memory'
import login from '../../api/index'
import './login.less'
import logo from '../../assets/imgs/logo.png'

class Login extends Component {
  // 点击登录按钮
  handleSubmit = e => {
    e.preventDefault()

    // 表单验证
    // const values = this.props.form.getFieldsValue() 获取全部表单数据
    // const username = this.props.form.getFieldValue('username')
    // const password = this.props.form.getFieldValue('password')
    // if (username === 'admin' && password === 'admin') {
    //   // 模拟登陆成功
    //   alert('登陆成功！')
    //   // this.props.history.replace('/')
    // }
    this.props.form.validateFields(async (err, { username, password }) => {
      if (!err) {
        // alert(`表单验证通过！发送ajax请求username=${username}&password=${password}`)
        const result = await login(username, password)
        console.log(result)
        if (result.status === 0) {
          message.success('登陆成功')
          const {user} = result
          storage.setUser(user)
          memory.user = user
          // 跳转到选座界面
          this.props.history.replace('/')
        } else {
          message.error("登录失败，" + result.message)
        }
      } else {
        alert('表单验证失败！')
      }
    });
  }

  validatePwd = (rule, value, callback) => {
    value = value.trim()
    if (!value) {
      callback('密码必须输入')
    } else if (value.length < 4) {
      callback('密码长度必须大于4位！')
    } else if (value.length > 12) {
      callback('密码长度必须小于12位！')
    } else if (!/^[a-zA-z0-9_]+$/.test(value)) {
      callback('密码只能由字母、数字、下划线组成！')
    } else {
      callback() //验证通过
    }
  }

  render() {
    const user = memory.user 
    if(user.id) {
      return <Redirect to="/" />
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login full">
        <div className="login-bg full"></div>
        <div className="login-header">
          <img src={logo} alt="" />
          <div>座位预订系统</div>
        </div>
        <div className="login-content center">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                initialValue: '',
                rules: [
                  { required: true, whitespace: true, message: '用户名为必填项！' },
                  { min: 4, message: '最少4位' },
                  { max: 12, message: '最多12位' },
                  { pattern: /^[a-zA-z0-9_]+$/, message: '只能由字母、数字、下划线组成' }
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                initialValue: '',
                rules: [
                  { validator: this.validatePwd }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />
              )}

            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="login-footer"></div>
      </div>
    )
  }
}

const FormLogin = Form.create({ name: 'normal_login' })(Login)
export default FormLogin