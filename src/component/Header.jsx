import React from 'react';
import { Row, Col, Modal, Button, Form, Input } from 'antd';
const FormItem = Form.Item;

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
    console.log(this.refs.loginUsername.value+" "+this.refs.loginPassword.value);
  },
  handleRegisterOk() {
    console.log(this.refs.registerUsername.value+" "+this.refs.registerPassword.value);
  },

  render() {
    return(
    <div style={{background:"#333",height:'50px'}}>
      <Row>
        <Col span={6} offset={1}><span style={{fontSize: '20px',lineHeight:'50px'}}>法务平台</span></Col>
        <Col span={2} offset={13}>
          <Button style={{marginTop:'10px'}} type="ghost" onClick={this.showLoginModal}>登录</Button>

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
                label="用户名："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input type="password" ref="loginPassword" placeholder="请输入密码" />
              </FormItem>
            </Form>
          </Modal>
        </Col>
        <Col span={2}>
          <Button style={{marginTop:'10px'}} type="ghost" onClick={this.showRegisterModal}>注册</Button>
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
                label="用户名："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 14 }}>
                <Input type="password" ref="registerPassword" placeholder="请输入密码" />
              </FormItem>
            </Form>
          </Modal>
        </Col>
      </Row>
    </div>
    );
  }
});

export default Header;
