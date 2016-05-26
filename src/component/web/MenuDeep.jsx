import React from 'react';
import {Menu} from 'antd';
const MenuItem = Menu.Item;
const MenuDeep = React.createClass({
    handleClick(e){
        location.href = "/" + e.key + ".html";
    },
    render(){
        return (<Menu onClick={this.handleClick} selectedKeys={[this.props.current]} className="menu-left">
            <MenuItem key="serious">重案追踪</MenuItem>
            <MenuItem key="classic">经典案例</MenuItem>
            <MenuItem key="scholarship">学术前沿</MenuItem>
            <MenuItem key="personal">个人破产</MenuItem>
            <MenuItem key="survey">调研报告</MenuItem>
        </Menu>);
    }
});
export default MenuDeep;