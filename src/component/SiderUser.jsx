import React from 'react';
import { Menu, Icon } from 'antd';

const SiderUser = React.createClass({
  getInitialState() {
      return {
        current: 'user_menu1'
      };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  },
  render() {
      return (
        <Menu onClick={this.handleClick}
              mode="vertical">
          <Menu.Item key="user_menu1"><span><Icon type="home"/><span>首页</span></span></Menu.Item>
          <Menu.Item key="user_menu2"><span><Icon type="plus"/><span>添加债权申报表</span></span></Menu.Item>
          <Menu.Item key="user_menu3"><span><Icon type="bars"/><span>查看债权申报表</span></span></Menu.Item>
        </Menu>
      );
  }
});

export default SiderUser;
