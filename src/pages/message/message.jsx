import React, { Component } from 'react'
import { Card, Button, Table, Icon } from 'antd'

import AddBtn from '../../components/add-btn/index'
import Title from '../../components/title'

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    // render: text => <a>{text}</a>,
  },
  {
    title: '通知内容',
    dataIndex: 'message_content',
  },
  {
    title: '创建时间',
    // className: 'column-money',
    dataIndex: 'message_create',
  },

  {
    title: '创建人',
    dataIndex: 'message_user',
  },
  {
    title: '操作',
    dataIndex: 'message_oprator',
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
    key: 1,
    message_content: '您好，欢迎来到上海师范大学图书馆座位预约系统！',
    message_create: '2020.02.02 12:00',
    message_user: 'admin',
    message_oprator: '',
  },
  {
    key: 2,
    message_content: '公共秩序 携手共建',
    message_create: '2020.02.02 12:00',
    message_user: 'admin',
    message_oprator: '',
  },
  {
    key: 3,
    message_content: '文明选座 有你有我',
    message_create: '2020.02.02 12:00',
    message_user: 'admin',
    message_oprator: '',
  },
  {
    key: 4,
    message_content: '通知：本周三图书馆因故闭馆一天，请提前规划您的时间',
    message_create: '2020.02.02 12:00',
    message_user: 'admin',
    message_oprator: '',
  },
  {
    key: 5,
    message_content: '用心领悟知识，用心爱护图书',
    message_create: '2020.02.02 12:00',
    message_user: 'admin',
    message_oprator: '',
  },
  {
    key: 6,
    message_content: '欢笑诚可贵，交流价更高，若为安静故，二者皆可抛',
    message_create: '2020.02.02 12:00',
    message_user: 'admin',
    message_oprator: '',
  }
];

export default class Message extends Component {
  render() {

    // const addBtn = (
    //   <Button type="primary">
    //       <Icon type="plus"></Icon>添加角色
    //     </Button>
    // )
    return (
      <div>
        <Card className="full role-card" title={<Title>消息管理</Title>} extra={<AddBtn>添加消息</AddBtn>}>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={{
              defaultPageSize: 6,
              hideOnSinglePage: true,
              showQuickJumper: true
            }}
          />
        </Card>
      </div>
    )
  }
}
