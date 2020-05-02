import React, { Component } from 'react'
import './department.less'
import { Card, Button, Table, Icon } from 'antd'

import AddBtn from '../../components/add-btn/index'
import Title from '../../components/title'
import { Redirect } from 'react-router-dom'


const columns = [
  {
    title: '科室名称',
    dataIndex: 'role_name',
    // render: text => <a>{text}</a>,
  },
  {
    title: '所属楼层',
    // className: 'column-money',
    dataIndex: 'role_create',
  },
  {
    title: '创建人',
    dataIndex: 'role_auth',
  },
  {
    title: '操作',
    dataIndex: 'role_oprator',
  },
];

const data = [
  {
    key: '1',
    role_name: '零点书房',
    role_create: '楼层一',
    role_auth: 'admin',
    role_boss: 'admin',
    role_oprator: '编辑'
  },
];

export default class Role extends Component {

  creatBtnClick = () => {
    this.props.history.push('hallSeat')
  }
  render() {

    // const addBtn = (
    //   <Button type="primary">
    //       <Icon type="plus"></Icon>添加角色
    //     </Button>
    // )
    return (
      <div>
        <Card className="full" title={<Title>科室管理</Title>} extra={<AddBtn handleClick={this.creatBtnClick}>添加科室</AddBtn>}>
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
