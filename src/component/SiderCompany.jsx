import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const SiderCompany = React.createClass({
  getInitialState() {
    return {
      current: 'menu1'
    };
  },
  render() {
      return (
        <Menu selectedKeys={[this.state.current]}
              style={{width:'100%'}}
              mode="inline">
          <Menu.Item key="menu1"><a href="companyCase.html">案件立项</a></Menu.Item>
          <Menu.Item key="menu2">案件流程管理</Menu.Item>
        </Menu>
      );
  }
});

export default SiderCompany;
