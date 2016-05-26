import React from 'react';
import {Menu} from 'antd';
const MenuItem = Menu.Item;
const MenuRule = React.createClass({
    handleClick(e){
        location.href = "/" + e.key + ".html";
    },
    render(){
        return (<Menu onClick={this.handleClick} selectedKeys={[this.props.current]} className="menu-left">
            <MenuItem key="law">法律</MenuItem>
            <MenuItem key="interpretation">司法解释</MenuItem>
            <MenuItem key="statute">行政法规</MenuItem>
        </Menu>);
    }
});
export default MenuRule;