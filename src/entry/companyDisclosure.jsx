import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import FormDisclosure from '../component/FormDisclosure';
import mock from '../mock';
import moment from 'moment';
import { Row, Col, Tabs, Icon, Select } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';
require('../css/style.css');

const CompanyDisclosure = React.createClass({
  getInitialState(){
    return {companySelect: ""};
  },
  handleSelectChange(value){
    this.setState({companySelect: value});
  },
  render() {
    let companies = [], companyIndexes = [];
    this.props.files.forEach(file=> {
      const company = file.company, companyId = company._id;
      if (companyIndexes.indexOf(companyId) < 0) {
        companies.push(company);
        companyIndexes.push(companyId);
      }
    });
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderCompany current="menu4"/></Col>
            <Col span={20}>
              <Row style={{margin:'15px 0'}}>
                <Col span={22} offset={1}>
                  <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab={<span><Icon type="book" />所有披露</span>} key="1">
                      <Row>
                        <Col span={20} style={{textAlign:'right',marginTop:'8px'}}>
                          <span>公司筛选：</span>
                        </Col>
                        <Col span={4}>
                          <Select style={{width: '100%'}} size="large" defaultValue=""
                                  onChange={this.handleSelectChange}>
                            <Option key="" value="">&nbsp;</Option>
                            {companies.map(company=>(
                            <Option key={company._id} value={company._id}>{company.name}</Option>))}
                          </Select>
                        </Col>
                      </Row>
                      <Row style={{marginTop:'15px'}}>
                        <ul className="news-list">
                          {this.props.files.filter(x=>x.status==1&&(this.state.companySelect==""||this.state.companySelect==x.company._id))
                              .map(file=>(
                          <li key={file._id}><a href={file.file} target="_blank"><span style={{fontWeight:'bold'}}>[{file.company.name}]</span> {file.name}
                            <span className="date">{file.date}</span></a></li>))}
                        </ul>
                      </Row>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="plus" />新建披露</span>} key="3">
                      <FormDisclosure companies={companies}></FormDisclosure>
                    </Tabs.TabPane>
                  </Tabs>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
    );
  }
});

ReactDOM.render(<CompanyDisclosure user={mock.admin} files={mock.disclosureFiles}/>, document.getElementById('react-content'));
