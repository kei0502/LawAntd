import React from 'react';
import {Menu, Icon} from 'antd';
const hrefs = {
    accountant_menu1: "/accountantVerify.html",
    accountant_menu2: "/accountantDispatch.html"
};
const SiderAccountant = React.createClass({
    getDefaultProps(){
        return {current: "accountant_menu1"};
    },
    getInitialState(){
        return {current: this.props.current};
    },
    handleClick(e){
        location.href = hrefs[e.key];
    },
    render(){
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} style={{width:'100%'}} mode="vertical">
                <Menu.Item key="accountant_menu1"><span><Icon type="edit"/><span>债权审核</span></span></Menu.Item>
                <Menu.Item key="accountant_menu2"><span><Icon type="file-text"/><span>报告发文</span></span></Menu.Item>
            </Menu>);
    }
});
export default SiderAccountant;