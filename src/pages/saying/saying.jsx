import React, { Component } from 'react'
import { Card, Button, Table, Icon } from 'antd'

import Title from '../../components/title'
import AddBtn from '../../components/add-btn/index'

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    // render: text => <a>{text}</a>,
  },
  {
    title: '名言内容',
    dataIndex: 'saying_content',
  },
  {
    title: '创建时间',
    // className: 'column-money',
    dataIndex: 'saying_create',
  },

  {
    title: '创建人',
    dataIndex: 'saying_user',
  },
  {
    title: '操作',
    dataIndex: 'saying_oprator',
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
    saying_content: '君子赠人以言，庶人赠人以财。——荀况',
    saying_create: '2020.02.02 12:00',
    saying_user: 'admin',
    saying_oprator: '',
  },
  {
    key: 2,
    saying_content: '我们爱我们的民族，这是我们自信心的源泉。——周恩来',
    saying_create: '2020.02.02 12:00',
    saying_user: 'admin',
    saying_oprator: '',
  },
  {
    key: 3,
    saying_content: '最聪明的人是最不愿浪费时间的人。——但丁',
    saying_create: '2020.02.02 12:00',
    saying_user: 'admin',
    saying_oprator: '',
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
        <Card className="full role-card" title={<Title>名言管理</Title>} extra={<AddBtn>添加名言</AddBtn>}>
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
