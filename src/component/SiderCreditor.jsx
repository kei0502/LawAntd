import React from 'react';
import {Menu, Icon} from 'antd';
const hrefs = {
    user_menu1: "/indexCreditor.html",
    user_menu2: "/companyInfo.html",
    user_menu3: "/claimApply.html",
    user_menu4: "/companyRelease.html",
    user_menu5: "/creditorVote.html",
    user_menu6: "/creditorQuestion.html",
    user_menu7: "/creditorDispatch.html",
    user_menu8: "/creditorDistribution.html"
};
const SiderCreditor = React.createClass({
    getDefaultProps() {
        return {current: 'user_menu1'};
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
                <Menu.Item key="user_menu1"><span><Icon type="home"/><span>首页</span></span></Menu.Item>
                <Menu.Item key="user_menu2"><span><Icon type="bars"/><span>债务公司查询</span></span></Menu.Item>
                <Menu.Item key="user_menu3"><span><Icon type="plus"/><span>债权申报</span></span></Menu.Item>
                <Menu.Item key="user_menu7"><span><Icon type="file-text"/><span>报告发文</span></span></Menu.Item>
                <Menu.Item key="user_menu4"><span><Icon type="info-circle-o"/><span>信息披露</span></span></Menu.Item>
                <Menu.Item key="user_menu5"><span><Icon type="team"/><span>债权人会议</span></span></Menu.Item>
                <Menu.Item key="user_menu8"><span><Icon type="team"/><span>分配与清算</span></span></Menu.Item>
                <Menu.Item key="user_menu6"><span><Icon type="retweet"/><span>债权问答</span></span></Menu.Item>
            </Menu>
        );
    }
});

export default SiderCreditor;
