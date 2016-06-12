import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import mock from '../mock';
import { Row, Col} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const CompanyContract = React.createClass({
  render() {
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderCompany current="menu5"/></Col>
            <Col span={20}>
              <Row style={{margin:'15px 0'}}>
                <Col span={22} offset={1}>
                  <h2>协议信息</h2>
                  <iframe height="1000" width="100%" src={this.props.contract.file}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
    );
  }
});

ReactDOM.render(<CompanyContract user={mock.admin} contract={mock.contracts[0]}/>, document.getElementById('react-content'));
