import '../common/lib';
import SiderUser from '../component/SiderUser';
import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import { Row, Col, Modal, Button, Form, Input } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

export default class Index extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Row>
          <Col span={4}><SiderUser /></Col>
          <Col span={20}>首页</Col>
        </Row>
      </div>
      );
  }
}
ReactDOM.render(<Index />, document.getElementById('react-content'));
