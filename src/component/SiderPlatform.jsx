import React from 'react';
import { Menu, Icon } from 'antd';
const hrefs = {
  menu1: "/platformUser.html",
  menu2: "/platformCase.html",
  menu3: "/platformFile.html",
  menu4: "/platformAdvert.html",
};

const SiderPlatform = React.createClass({
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
          <Menu.Item key="menu1"><span><Icon type="team"/><span>用户管理</span></span></Menu.Item>
          <Menu.Item key="menu2"><span><Icon type="bars"/><span>案件管理</span></span></Menu.Item>
          <Menu.Item key="menu3"><span><Icon type="copy"/><span>文件管理</span></span></Menu.Item>
          <Menu.Item key="menu4"><span><Icon type="solution"/><span>广告管理</span></span></Menu.Item>
        </Menu>
    );
  }
});

export default SiderPlatform;
