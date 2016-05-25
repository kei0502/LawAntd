import '../common/lib';
import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import FormResponse from '../component/FormResponse';
import FormPost from '../component/FormPost';
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
    this.state.dispatches.forEach(dispatch=> {
      const company = dispatch.company, companyId = company._id;
      if (companyIndexes.indexOf(companyId) < 0) {
        companies.push(company);
        companyIndexes.push(companyId);
      }
    });
    let dispatchesReceive = this.state.dispatches.filter(dispatch=>(!this.state.companySelect || dispatch.company._id === this.state.companySelect));
    let dispatchesSend = this.state.dispatches.filter(dispatch=>(dispatch.response && (!this.state.companySelect || dispatch.company._id === this.state.companySelect)));

    const columns = [{
        title: "文件",
        key: 'name',
        width: '30%',
        render: (text, record)=>(<a href={record.file} target="_blank">{record.name}</a>)
      }, {
        title: "公司",
        key: "company",
        width: '30%',
        dataIndex: "company",
        render: (company)=>(company.name),
        sorter: (a, b)=> {
          if (a.company._id === b.company._id) {
            return 0;
          } else {
            return a.company._id < b.company._id ? -1 : 1
          }
        }
      }, {
        title: "反馈",
        key: "response",
        width: "40%",
        dataIndex: "response",
        render: (response, record)=>(
            <FormResponse response={response} handleSubmit={this.handleResponseSubmit(record._id)}/>),
        sorter: (a, b)=> {
          if (!a.response) {
            return b.response ? -1 : 0;
          } else if (!b.response) {
            return 1;
          } else {
            return a.response.style - b.response.style;
          }
        }
      }];
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderCompany current="menu3"/></Col>
            <Col span={20}>
              <Row style={{margin:'15px 0'}}>
                <Col span={22} offset={1}>
                  <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab={<span><Icon type="inbox" />收件箱</span>} key="1">
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
                      <Table columns={columns} pagination={{total:dispatchesReceive.length}}
                             dataSource={dispatchesReceive} rowKey={record => record._id}/>
                      </Row>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="export" />收件箱</span>} key="2">
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
                        <Table columns={columns} pagination={{total:dispatchesSend.length}}
                               dataSource={dispatchesSend} rowKey={record => record._id}/>
                      </Row>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="plus" />新建发文</span>} key="3">
                      <FormPost companies={companies}></FormPost>
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
