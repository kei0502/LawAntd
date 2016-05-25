import React from 'react';
import {Menu, Row, Col} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const Nav = React.createClass({
    getDefaultProps(){
        return {current: 'home'};
    },
    handleClick(e){
        location.href = "/" + e.key + ".html";
    },
    render(){
        return (<Row><Col span={16} offset={4}>
            <Menu onClick={this.handleClick} selectedKeys={[this.props.current]} mode="horizontal">
                <MenuItem key="index">首页</MenuItem>
                <MenuItem key="news">最新资讯</MenuItem>
                <MenuItem key="case">挂牌案件</MenuItem>
                <SubMenu title="市场机构">
                    <MenuItem key="admin" style={{paddingLeft:20}}>管理人</MenuItem>
                    <MenuItem key="investment" style={{paddingLeft:20}}>投资机构</MenuItem>
                    <MenuItem key="other" style={{paddingLeft:20}}>其他机构</MenuItem>
                </SubMenu>
                <SubMenu title="法律规则">
                    <MenuItem key="law" style={{paddingLeft:20}}>法律</MenuItem>
                    <MenuItem key="interpretation" style={{paddingLeft:20}}>司法解释</MenuItem>
                    <MenuItem key="statute" style={{paddingLeft:20}}>行政法规</MenuItem>
                </SubMenu>
                <SubMenu title="服务专区">
                    <MenuItem key="consult" style={{paddingLeft:20}}>投资征询公告</MenuItem>
                    <MenuItem key="auction" style={{paddingLeft:20}}>拍卖公告</MenuItem>
                    <MenuItem key="train" style={{paddingLeft:20}}>培训公告</MenuItem>
                </SubMenu>
                <SubMenu title="深度阅读">
                    <MenuItem key="serious" style={{paddingLeft:20}}>重案追踪</MenuItem>
                    <MenuItem key="classical" style={{paddingLeft:20}}>经典案例</MenuItem>
                    <MenuItem key="scholarship" style={{paddingLeft:20}}>学术前沿</MenuItem>
                    <MenuItem key="personal" style={{paddingLeft:20}}>个人破产</MenuItem>
                    <MenuItem key="survey" style={{paddingLeft:20}}>调研报告</MenuItem>
                </SubMenu>
                <SubMenu title="债权申报">
                    <MenuItem key="indexUser" style={{paddingLeft:20}}>申报入口</MenuItem>
                    <MenuItem key="guide" style={{paddingLeft:20}}>申报指南</MenuItem>
                    <MenuItem key="help" style={{paddingLeft:20}}>专业帮助</MenuItem>
                </SubMenu>
                <SubMenu title="关于我们">
                    <MenuItem key="notice" style={{paddingLeft:20}}>法律声明</MenuItem>
                    <MenuItem key="intro" style={{paddingLeft:20}}>公司介绍</MenuItem>
                    <MenuItem key="contact" style={{paddingLeft:20}}>联系我们</MenuItem>
                </SubMenu>
            </Menu>
        </Col></Row>);
    }
});
export default Nav;