import React from 'react';
import Common from '../common/lib';
import {Row, Col, Modal, Button, Form, Input, Menu, Dropdown, Icon, message} from 'antd';
const FormItem = Form.Item;

const Header = React.createClass({
  getInitialState() {
    return {
      loginVisible: false,
      registerVisible: false,
      editVisible: false
    };
  },
  showLoginModal() {
    this.setState({
      loginVisible: true
    });
  },
  showRegisterModal() {
    this.setState({
      registerVisible: true
    });
  },
  showEditModal(e) {
    e.preventDefault();
    this.setState({
      editVisible: true
    });
  },
  handleLoginCancel() {
    this.setState({
      loginVisible: false
    });
  },
  handleRegisterCancel() {
    this.setState({
      registerVisible: false
    });
  },
  handleEditCancel() {
    this.setState({
      editVisible: false
    });
  },
  handleLoginOk() {
    console.log(this.refs.loginUsername + " " + this.refs.loginPassword);
    location.href = "/indexCreditor.html";
  },
  handleRegisterOk() {
    console.log(this.refs.registerUsername + " " + this.refs.registerPassword);
    location.href = "/indexCreditor.html";
  },
  handleEditOk(){
    this.setState({editVisible: false});
    message.success("信息修改成功");
  },
  getValidateCode(e){
    e.preventDefault();
    alert("验证码已发送至手机,请查收");
  },
  getInfoNav(){
    if (!this.props.user) {
      return (
          <Col span={4} style={{float:'right',marginRight:'3.472%',textAlign:'right'}}>
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
                  <Input ref="registerName" placeholder="请输入真实姓名"/>
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
          </Col>
      );
    }
    else {
      const infoMenu = (
          <Menu>
            <Menu.Item key="0">
              <a href="#" onClick={this.showEditModal}>修改个人信息</a>
            </Menu.Item>
            <Menu.Item key="1">
              <a href="/indexUser.html">退出登录</a>
            </Menu.Item>
          </Menu>
      );
      var role = Common.getUserRole(this.props.user.role);
      return (
          <Col span={4} style={{float:'right',marginRight:'3.472%',textAlign:'right'}}>
            <Dropdown overlay={infoMenu} trigger={['click']}>
              <a style={{lineHeight:'50px'}} className="ant-dropdown-link" href="#">
                {this.props.user.name + '(' + role + ')'}<Icon type="down"/>
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
          </Col>
      );
    }
  },
  render() {
    return (
        <Row style={{background:"#333",height:"50px"}}>
          <Col span={6}><span style={{fontSize:"20px",lineHeight:"50px",marginLeft:'20px'}}>法务平台</span></Col>
          {this.getInfoNav()}
        </Row>
    );
  }
});

export default Header;
