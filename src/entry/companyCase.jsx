import '../common/lib';
import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import FormCourt from '../component/FormCourt';
import { Row, Col, Breadcrumb, Card} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

export default class CompanyCase extends React.Component {

  render() {
    return(
      <div>
        <Header user={this.props.user}/>
        <Row>
          <Col span={4}><SiderCompany /></Col>
          <Col span={20}>
            <Row style={{margin:'5px 10px'}}>
              <Breadcrumb separator=">">
                <Breadcrumb.Item>管理人</Breadcrumb.Item>
                <Breadcrumb.Item>案件立项</Breadcrumb.Item>
                <Breadcrumb.Item>案件管理</Breadcrumb.Item>
              </Breadcrumb>
            </Row>
            <Row>
              <Col span={22} offset={1}>
                <Card title="法院信息" style={{marginTop: '20px'}}>
                  <FormCourt />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      );
  }
}
var userObj={name:'管理员一',role:2};
ReactDOM.render(<CompanyCase user={userObj}/>, document.getElementById('react-content'));
