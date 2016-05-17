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
      var role;
      if(this.props.user.role==1){
        role='债权人';
      }
      else if(this.props.user.role==2){
        role='管理人';
      }
      else if(this.props.user.role==3){
        role='工作人员';
      }
      else if(this.props.user.role==4){
        role='法院';
      }
      else if(this.props.user.role==5){
        role='平台管理员';
      }
      else if(this.props.user.role==6){
        role='公司';
      }
      else if(this.props.user.role==7){
        role='会计';
      }
      return(
        <Col span={4} offset={14}>
          <Dropdown overlay={infoMenu} trigger={['click']}>
            <a style={{lineHeight:'50px'}} className="ant-dropdown-link" href="#">
              {this.props.user.name+'/'+role}<Icon type="down" />
            </a>
          </Dropdown>
        </Col>
      );
    }
  },
  render() {
    return(
      <Row style={{background:"#333",height:"50px"}}>
        <Col span={6}><span style={{fontSize:"20px",lineHeight:"50px",marginLeft:'20px'}}>法务平台</span></Col>
        {this.getInfoNav()}
      </Row>
    );
  }
});

export default Header;
