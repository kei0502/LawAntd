import React from 'react';
import {Row, Col, Icon, Menu, Modal, Button, Form, Input, Dropdown} from 'antd';
import Common from '../../common/lib';
import Nav from './Nav';
import mock from '../../mock';
const FormItem = Form.Item;
const Header = React.createClass({
    getInitialState(){
        return {loginVisible: false, registerVisible: false, user: this.props.user};
    },
    showLoginModal() {
        this.setState({loginVisible: true});
    },
    showRegisterModal() {
        this.setState({registerVisible: true});
    },
    handleLoginCancel() {
        this.setState({loginVisible: false});
    },
    handleRegisterCancel() {
        this.setState({registerVisible: false});
    },
    handleLoginOk() {
        console.log(this.refs.loginUsername + " " + this.refs.loginPassword);
        this.setState({loginVisible: false, user: mock.creditor});
    },
    handleNameChange(e){
        this.setState({name: e.target.value});
    },
    handleRegisterOk() {
        console.log(this.refs.registerUsername + " " + this.refs.registerPassword);
        this.setState({registerVisible: false, user: {role: 1, name: this.state.name}});
    },
    handleLogout(e) {
        this.setState({user: undefined});
    },
    getInfoNav(){
        if (!this.state.user) {
            return (<Col span={4} style={{textAlign:'right'}}>
                <Button style={{marginTop:10}} type="ghost" onClick={this.showLoginModal}>登录</Button>
                <Button style={{marginTop:10,marginLeft:10}} type="ghost"
                        onClick={this.showRegisterModal}>注册</Button>
                <Modal title="登录" visible={this.state.loginVisible}
                       onOk={this.handleLoginOk} onCancel={this.handleLoginCancel}>
                    <Form horizontal>
                        <FormItem
                            label="手机号："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}>
                            <Input ref="loginUsername" placeholder="请输入手机号"/>
                        </FormItem>
                        <FormItem
                            label="密码："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}>
                            <Input type="password" ref="loginPassword" placeholder="请输入密码"/>
                        </FormItem>
                    </Form>
                </Modal>
                <Modal title="注册" visible={this.state.registerVisible}
                       onOk={this.handleRegisterOk} onCancel={this.handleRegisterCancel}>
                    <Form horizontal>
                        <FormItem
                            label="手机号："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}>
                            <Input ref="registerUsername" placeholder="请输入手机号"
                                   style={{width:"60%",marginRight:10}}/>
                            <Button onClick={this.getValidateCode}>获取验证码</Button>
                        </FormItem>
                        <FormItem
                            label="验证码："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}>
                            <Input ref="registerValidateCode" placeholder="请输入手机验证码"/>
                        </FormItem>
                        <FormItem
                            label="真实姓名："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}>
                            <Input ref="registerName" placeholder="请输入真实姓名" value={this.state.name}
                                   onChange={this.handleNameChange}/>
                        </FormItem>
                        <FormItem
                            label="密码："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}>
                            <Input type="password" ref="registerPassword" placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem
                            label="密码确认："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}>
                            <Input type="password" ref="registerRepeat" placeholder="请再次输入密码"/>
                        </FormItem>
                    </Form>
                </Modal>
            </Col>);
        } else {
            const infoMenu = (
                <Menu onClick={this.handleLogout}><Menu.Item key="1">退出登录</Menu.Item></Menu>
            );
            var role = Common.getUserRole(this.state.user.role);
            return (<Col span={4} style={{textAlign:'right'}}>
                <Dropdown overlay={infoMenu} trigger={['click']}>
                    <a style={{lineHeight:'50px'}} className="ant-dropdown-link" href="#">
                        {this.state.user.name + '(' + role + ')'}<Icon type="down"/>
                    </a>
                </Dropdown>
                <Modal title="修改个人信息" visible={this.state.editVisible}
                       onOk={this.handleEditOk} onCancel={this.handleEditCancel}>
                    <Form horizontal>
                        <FormItem
                            label="密码："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}>
                            <Input type="password" placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem
                            label="密码确认："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}>
                            <Input type="password" placeholder="请再次输入密码"/>
                        </FormItem>
                    </Form>
                </Modal>
            </Col>);
        }
    },
    render(){
        return (<Row>
            <Col span={12} offset={4}><h1 style={{fontSize:36,lineHeight:"3"}}><Icon type="like"/> 法务平台</h1></Col>
            {this.getInfoNav()}
            <Nav user={this.state.user} current={this.props.current}/>
        </Row>)
    }
});
export default Header;