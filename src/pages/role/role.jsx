import React, { Component } from 'react'
import './role.less'
import { Card, Button, Table, Icon } from 'antd'

import AddBtn from '../../components/add-btn/index'
import Title from '../../components/title'


const columns = [
  {
    title: '角色名称',
    dataIndex: 'role_name',
    // render: text => <a>{text}</a>,
  },
  {
    title: '创建时间',
    // className: 'column-money',
    dataIndex: 'role_create',
  },
  {
    title: '授权时间',
    dataIndex: 'role_auth',
  },
  {
    title: '授权人',
    dataIndex: 'role_boss',
  },
  {
    title: '操作',
    dataIndex: 'role_oprator',
  },
];

const data = [
  {
    key: '1',
    role_name: '管理员',
    role_create: '2020.02.10 15:00',
    role_auth: '2020.02.10 15:00',
    role_boss: 'admin',
    role_oprator: '授权'
  },
  {
    key: '2',
    role_name: '测试员',
    role_create: '2020.02.10 15:00',
    role_auth: '2020.02.10 15:00',
    role_boss: 'admin',
    role_oprator: '授权'
  },
  {
    key: '3',
    role_name: '用户',
    role_create: '2020.02.10 15:00',
    role_auth: '2020.02.10 15:00',
    role_boss: 'admin',
    role_oprator: '授权'
  },
];

export default class Role extends Component {
  render() {

    // const addBtn = (
    //   <Button type="primary">
    //       <Icon type="plus"></Icon>添加角色
    //     </Button>
    // )
    return (
      <div>
        <Card className="full role-card" title={<Title>角色管理</Title>} extra={<AddBtn>添加角色</AddBtn>}>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={{
              defaultPageSize: 2,
              hideOnSinglePage: true,
              showQuickJumper: true
            }}
          />
        </Card>
      </div>
    )
  }
}
