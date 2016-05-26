import React from 'react';
import {Menu} from 'antd';
const MenuItem = Menu.Item;
const MenuService = React.createClass({
    handleClick(e){
        location.href = "/" + e.key + ".html";
    },
    render(){
        return (<Menu onClick={this.handleClick} selectedKeys={[this.props.current]} className="menu-left">
            <MenuItem key="consult">投资征询公告</MenuItem>
            <MenuItem key="auction">拍卖公告</MenuItem>
            <MenuItem key="train">培训公告</MenuItem>
        </Menu>);
    }
});
export default MenuService;