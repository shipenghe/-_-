import React, { Component } from 'react'
import { Steps, Slider, Card, Button, Select, Input, Icon } from 'antd'
import './index.less'
import Legend from '../legend'

const { Step } = Steps;
const { Option } = Select;

export default class index extends Component {
  confirmSeatType = (index) => {
    debugger
  }
  render() {
    let CardSetSize = (
      <Card size="small" title="设置画布大小" className="step-card">
        <div className="set-size">
          <div>
            <div>X坐标</div>
            <Slider style={{ width: 100 }} defaultValue={0} min={0} max={100} />
          </div>
          <div>
            <div>Y坐标</div>
            <Slider style={{ width: 100 }} defaultValue={0} min={0} max={100} />
          </div>
        </div>
      </Card>
    )
    let CardSelectArea = (
      <Card size="small" title="选择区域" className="step-card">
        <Button type="primary" block title="取消已框选区域">
          <Icon type="minus-circle"></Icon>取消选中
       </Button>
      </Card>
    )
    let SetAreaType = (
      <Card size="small" title="设置区域类型" className="step-card">
        <div className="full" style={{ marginLeft: 20 }}>
          <Legend click={this.confirmSeatType}></Legend>
        </div>
      </Card>
    )
    let InputInfo = (
      <Card size="small" title="输入科室信息" className="step-card">
        <div className="full">
          <Select
            showSearch
            style={{ width: '100%' }}
            block
            placeholder="所处楼层"
          // onChange={onChange}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          >
            <Option value="楼层一">楼层一</Option>
            <Option value="楼层二">楼层二</Option>
            <Option value="XXX">XXX</Option>
          </Select>
          <Input placeholder="科室名称" style={{ marginTop: 20 }}></Input>
        </div>
      </Card>
    )
    let SaveOrCommit = (
      <Card size="small" title="保存或提交" className="step-card">
        <div className="full save-or-commit">
          <Button type="primary" block title="保存以便以后编辑">
            <Icon type="save"></Icon>保存
          </Button>
          <Button type="primary" block title="提交管理员审核">
            <Icon type="cloud-upload"></Icon>提交
          </Button>
        </div>
      </Card>
    )
    return (
      <div className="edit-steps">
        <Steps size="small" direction="vertical" current={3}>
          <Step description={CardSetSize} />
          <Step description={CardSelectArea} />
          <Step description={SetAreaType} />
          <Step description={InputInfo} />
          <Step description={SaveOrCommit} />
        </Steps>
        {/* <div className="form-area">
          <div className="set-size">
            <div>
              <div>x</div>
              <Slider style={{ width: 100 }} defaultValue={0} min={0} max={100} />
            </div>
            <div>
              <div>y</div>
              <Slider style={{ width: 100 }} defaultValue={0} min={0} max={100} />
            </div>
          </div> 
        </div>*/}
      </div>
    )
  }
}
