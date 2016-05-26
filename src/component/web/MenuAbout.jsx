import React from 'react';
import {Menu} from 'antd';
const MenuItem = Menu.Item;
const MenuDeep = React.createClass({
    handleClick(e){
        location.href = "/" + e.key + ".html";
    },
    render(){
        return (<Menu onClick={this.handleClick} selectedKeys={[this.props.current]} className="menu-left">
            <MenuItem key="notice">法律声明</MenuItem>
            <MenuItem key="intro">公司介绍</MenuItem>
            <MenuItem key="contact">联系我们</MenuItem>
        </Menu>);
    }
});
export default MenuDeep;