import React from 'react';
import { Menu, Icon } from 'antd';
const hrefs = {menu1: "/companyCaseCreate.html", menu2: "/companyCaseList.html",menu3:""};

const SiderCompany = React.createClass({
  getDefaultProps() {
    return {current: 'menu1'};
  },
  getInitialState() {
    return {
      current: this.props.current
    };
  },
  handleClick(e) {
    location.href = hrefs[e.key];
  },
  render() {
      return (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} style={{width:'100%'}} mode="vertical">
          <Menu.Item key="menu1"><span><Icon type="plus"/><span>案件立项</span></span></Menu.Item>
          <Menu.Item key="menu2"><span><Icon type="bars"/><span>案件流程管理</span></span></Menu.Item>
          <Menu.Item key="menu3"><span><Icon type="file"/><span>协议查看</span></span></Menu.Item>
        </Menu>
      );
  }
});

export default SiderCompany;
