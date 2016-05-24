import '../common/lib';
import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import FormVerify from '../component/FormVerify';
import mock from '../mock';
import moment from 'moment';
import { Row, Col, Breadcrumb, Button } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const CompanyCaseVerify = React.createClass({
  render() {
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderCompany current="menu2"/></Col>
            <Col span={20}>
              <Row style={{margin:'15px 0'}}>
                <Col span={22} offset={1}>
                  <Breadcrumb>
                    <Breadcrumb.Item>案件流程管理</Breadcrumb.Item>
                    <Breadcrumb.Item>选择案件</Breadcrumb.Item>
                    <Breadcrumb.Item>案件详情</Breadcrumb.Item>
                    <Breadcrumb.Item>申请审核</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
              <Row style={{marginTop:'10px'}}>
                <Col span={14} offset={1}>
                  <iframe src={this.props.file} width="100%" height="530" style={{border:'none'}}></iframe>
                </Col>
                <Col span={8}>
                  <FormVerify companyVerify="经查实与公司记录一致" accountVerify="经查实与会计记录一致"></FormVerify>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
    );
  }
});

ReactDOM.render(<CompanyCaseVerify user={mock.creditor} file="processv1.pdf"/>, document.getElementById('react-content'));
