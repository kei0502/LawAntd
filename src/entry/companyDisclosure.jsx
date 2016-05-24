import '../common/lib';
import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import FormDisclosure from '../component/FormDisclosure';
import mock from '../mock';
import moment from 'moment';
import { Row, Col, Table, Tabs, Icon, Select } from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const CompanyDispatch = React.createClass({
  getInitialState(){
    return {dispatches: this.props.dispatches, companySelect: ""};
  },
  handleSelectChange(value){
    this.setState({companySelect: value});
  },
  handleResponseSubmit(_id){
    return (cb)=>((e)=> {
      e.preventDefault();
      var response = cb(), dispatches = this.state.dispatches.slice(0);
      for (var i = 0; i < dispatches.length; i++) {
        if (dispatches[i]._id === _id) {
          dispatches[i].response = response;
          break;
        }
      }
      this.setState({dispatches: dispatches});
    });
  },
  render() {
    let companies = [], companyIndexes = [];


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
                          <Select style={{width: '100%'}} size="large" defaultValue="" onChange={this.handleSelectChange}>
                            <Option key="" value="">&nbsp;</Option>
                            {companies.map(company=>(
                            <Option key={company._id} value={company._id}>{company.name}</Option>))}
                          </Select>
                        </Col>
                      </Row>
                      <Row style={{marginTop:'15px'}}>
                        <ul className="news-list">
                          <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                          <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-22</span></a></li>
                          <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-22</span></a></li>
                          <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                          <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                          <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                          <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-22</span></a></li>
                          <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-22</span></a></li>
                          <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                          <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
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

ReactDOM.render(<CompanyDispatch user={mock.creditor} dispatches={mock.dispatches}/>, document.getElementById('react-content'));
