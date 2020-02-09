// 应用根组件

import React, {Component} from 'react';
import { Button, message } from 'antd';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';


import Login from './pages/login/login';
import Admin from './pages/admin/admin';
export default class App extends Component {
  test() {
    message.success('OK!')
    // alert('click!')
  }

  render() {
    return (
      // 上海师范大学图书馆座位预订系统
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </HashRouter>
    )
  }
}
