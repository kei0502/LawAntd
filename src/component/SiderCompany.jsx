import React from 'react';
import { Menu, Icon } from 'antd';

const SiderCompany = React.createClass({
  getInitialState() {
    return {
      current: 'menu1'
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
              mode="horizontal">
          <Menu.Item key="menu1"><span><Icon type="bars"/><span>管理债权申报表</span></span></Menu.Item>
        </Menu>
      );
  }
});

export default SiderCompany;
