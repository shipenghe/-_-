import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import './index.less'
import logo from '../../assets/imgs/logo2.jpg'
import menuList from '../../config/menuList'

const { SubMenu } = Menu

class index extends Component {

  state = {
    // 打开的submenu,第一个元素为一级菜单的sub,第二个元素为二级菜单的sub
    openKeys: [],
  }

  openSub = []

  onOpenChange = openKeys => {
    let openSub = this.state.openKeys
    // 获取新点击的submenu的key
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    if (!latestOpenKey) { // 点击了旧的submenu
      // 折叠旧的submenu
      this.setState({
        openKeys
      })
    } else { // 点击了新的submenu
      // 判断是一级菜单还是二级菜单
      if (latestOpenKey.startsWith('_')) { // 一级菜单
        if(openSub[0] && openSub[0].startsWith('_')) { //覆盖原来的一级菜单
          openSub[0] = latestOpenKey
        } else { // 放入此一级菜单
          openSub.unshift(latestOpenKey)
        }
        
      } else { // 二级菜单
        openSub[1] = latestOpenKey
      }
      this.setState({
        openKeys: openSub
      })
    }

  };

  getMenuList = (menu) => {
    const selectKey = this.props.location.pathname
    return menu.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon}></Icon>
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuList(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item
            key={item.key}
          >
            <Link to={item.key}>
              <Icon type={item.icon}></Icon>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }
    })
  }

  getMenuList2 = (menu) => {
    const selectKey = this.props.location.pathname
    function findOpenSub(list) {

    }
    return menu.reduce((pre, item) => {
      if (item.children) {
        item.children.forEach(item2 => {
          if(item2.children) {
            const isSelect = item2.children.find(item3 => item3.key === selectKey)
            if (isSelect) {
              this.setState({
                openKeys: [item.key, item2.key],
              })
            }
          }
        })
        pre.push(
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon}></Icon>
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuList2(item.children)}
          </SubMenu>
        )
      } else {
        pre.push(
          <Menu.Item
            key={item.key}
          >
            <Link to={item.key}>
              <Icon type={item.icon}></Icon>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }
      return pre
    }, [])
  }
  componentWillMount() {
    // 生成菜单节点
    this.menuNodes = this.getMenuList2(menuList)
  }

  render() {
    // 当前路由路径
    const selectKey = this.props.location.pathname

    return (
      <div className="left-sider full">
        <Link className="system-title" to="/display">
          <img src={logo} alt="" />
          <div className="h2">图管选座</div>
        </Link>
        <Menu
          selectedKeys={[selectKey]}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          mode="inline"
          theme="light"
        >
          {this.menuNodes}
        </Menu>
      </div>
    )
  }
}

/*
使用高阶组件withRouter()来包装非路由组件
*/
export default withRouter(index)