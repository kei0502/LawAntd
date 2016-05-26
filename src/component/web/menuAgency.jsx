import React from 'react';
import {Menu} from 'antd';
const MenuItem = Menu.Item;
const MenuAgency = React.createClass({
    handleClick(e){
        location.href = "/" + e.key + ".html";
    },
    render(){
        return (<Menu onClick={this.handleClick} selectedKeys={[this.props.current]} className="menu-left">
            <MenuItem key="admin">管理人</MenuItem>
            <MenuItem key="investment">投资机构</MenuItem>
            <MenuItem key="other">其他机构</MenuItem>
        </Menu>);
    }
});
export default MenuAgency;