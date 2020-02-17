import React, { Component } from 'react'
import { Card, Button, Table, Select, Input } from 'antd'
import AddBtn from '../../components/add-btn/index'
import Title from '../../components/title'


const { Option } = Select;
const { Search } = Input;

const columns = [
  {
    title: '用户名',
    dataIndex: 'user_name',
    // render: text => <a>{text}</a>,
  },
  {
    title: '注册时间',
    // className: 'column-money',
    dataIndex: 'user_create',
  },
  {
    title: '邮箱',
    dataIndex: 'user_email',
  },
  {
    title: '电话',
    dataIndex: 'user_phone',
  },
  {
    title: '角色',
    dataIndex: 'user_role',
  },
  {
    title: '操作',
    dataIndex: 'user_oprator',
    render: ()=>{
      return (
        <div>
          <Button size="small" type="primary" ghost>修改</Button>&nbsp;&nbsp;
          <Button size="small" type="danger" ghost>删除</Button>
        </div>
      )
    }
  },
];

const data = [
  {
    key: '1',
    user_name: 'admin',
    user_create: '2020.02.10 15:00',
    user_email: '123123@123.com',
    user_phone: '12345678910',
    user_role: '管理员',
    user_oprator: '修改 删除',
  },
  {
    key: '2',
    user_name: '小张',
    user_create: '2020.02.10 15:00',
    user_email: '123123@123.com',
    user_phone: '12345678910',
    user_role: '测试员',
    user_oprator: '修改 删除',
  },
  {
    key: '3',
    user_name: '小明',
    user_create: '2020.02.10 15:00',
    user_email: '123123@123.com',
    user_phone: '12345678910',
    user_role: '用户',
    user_oprator: '修改 删除',
  },

];
// const data = []
export default class User extends Component {
  render() {
    const select = (
      <div style={{display: 'flex'}}>
        <Select defaultValue="按名称" style={{ width: 120 }} onChange={''}>
          <Option value="按名称">按名称</Option>
          <Option value="按角色">按角色</Option>
          <Option value="其他">
            其他
      </Option>
        </Select>
        <Search placeholder="请输入关键字" enterButton style={{ width: 200,marginRight: 50 }}/>
        <AddBtn>添加用户</AddBtn>
      </div>
    )

    return (
      <div>
        <Card className="full" title={<Title>用户管理</Title>} extra={select} style={{minHeight: 550}}>
          <Table
            columns={columns}
            dataSource={data}
            bordered
          />
        </Card>
      </div>
    )
  }
}
