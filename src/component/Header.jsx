import React from 'react';
import { Row, Col, Modal, Button, Form, Input, Menu, Dropdown, Icon } from 'antd';
const FormItem = Form.Item;
const infoMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">修改个人信息</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">退出登录</a>
    </Menu.Item>
  </Menu>
);

const Header = React.createClass ({
  getInitialState() {
    return {
      loginVisible: false,
      registerVisible: false
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
  handleLoginOk() {
    console.log(this.refs.loginUsername+" "+this.refs.loginPassword);
  },
  handleRegisterOk() {
    console.log(this.refs.registerUsername+" "+this.refs.registerPassword);
  },
  getInfoNav(){
    if(!this.props.user){
      return(
        <Col span={4} offset={13}>
          <Button style={{marginTop:10}} type="ghost" onClick={this.showLoginModal}>登录</Button>
          <Button style={{marginTop:10,marginLeft:10}} type="ghost" onClick={this.showRegisterModal}>注册</Button>
          <Modal title="登录" visible={this.state.loginVisible}
                 onOk={this.handleLoginOk} onCancel={this.handleLoginCancel}>
            <Form horizontal>
              <FormItem
                id="control-input"
                label="用户名："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input ref="loginUsername" placeholder="请输入用户名" />
              </FormItem>
              <FormItem
                id="control-input"
                label="密码："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input type="password" ref="loginPassword" placeholder="请输入密码" />
              </FormItem>
            </Form>
          </Modal>
          <Modal title="注册" visible={this.state.registerVisible}
                 onOk={this.handleRegisterOk} onCancel={this.handleRegisterCancel}>
            <Form horizontal>
              <FormItem
                id="control-input"
                label="用户名："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input ref="registerUsername" placeholder="请输入用户名" />
              </FormItem>
              <FormItem
                id="control-input"
                label="密码："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input type="password" ref="registerPassword" placeholder="请输入密码" />
              </FormItem>
            </Form>
          </Modal>
        </Col>
      );
    }
    else{
      return(
        <Col span={4} offset={13}>
          <Dropdown overlay={infoMenu} trigger={['click']}>
            <a style={{lineHeight:50}} className="ant-dropdown-link" href="#">
              {this.props.user}<Icon type="down" />
            </a>
          </Dropdown>
        </Col>
      );
    }
  },
  render() {
    return(
    <div style={{background:"#333",height:50}}>
      <Row>
        <Col span={6}><span style={{fontSize:20,lineHeight:50}}>法务平台</span></Col>
        {this.getInfoNav()}

      </Row>
    </div>
    );
  }
});

export default Header;
