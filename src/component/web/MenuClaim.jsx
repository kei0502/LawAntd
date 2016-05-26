import React from 'react';
import {Menu} from 'antd';
const MenuItem = Menu.Item;
const MenuDeep = React.createClass({
    handleClick(e){
        location.href = "/" + e.key + ".html";
    },
    render(){
        return (<Menu onClick={this.handleClick} selectedKeys={[this.props.current]} className="menu-left">
            <MenuItem key="indexUser">申报入口</MenuItem>
            <MenuItem key="guide">申报指南</MenuItem>
            <MenuItem key="help">专业帮助</MenuItem>
        </Menu>);
    }
});
export default MenuDeep;