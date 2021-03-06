import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/Header';
import {Row, Col, Form, Select, Collapse, Pagination} from 'antd';
import SiderCreditor from '../component/SiderCreditor';
import TableCompany from '../component/TableCompany';
import StepsCompany from '../component/StepsCompany';
import moment from 'moment';
import mock from '../mock';
const Option = Select.Option;
const Panel = Collapse.Panel;
function getCurrentStep(company) {
    const current = moment(), expire = moment(company.expire), voteStart = moment(company.voteStart), voteEnd = moment(company.voteEnd);
    if (current.isSameOrBefore(expire, 'day')) {
        return 1;
    } else if (current.isBefore(voteStart)) {
        return 2;
    } else if (current.isSameOrBefore(voteEnd)) {
        return 3;
    } else if (!company.spotFile) {
        return 4;
    } else if (!company.closed) {
        return 5;
    } else {
        return 6;
    }
}
const CompanyInfo = React.createClass({
    getInitialState(){
        return {
            state: 0,
            page: 1
        };
    },
    handleSelectChange(value){
        this.setState({state: value});
    },
    handlePageChange(page){
        this.setState({page: page});
    },
    render(){
        var companies = this.props.companies.map(company=>({
            ...company,
            step: getCurrentStep(company)
        })).filter(company=> (!this.state.state || this.state.state === company.step)), page = this.state.page, sliced = companies.length <= page * 10 ? companies.slice((page - 1) * 10) : companies.slice((page - 1) * 10, page * 10);

        return (<div>
            <Header user={mock.creditor}/>
            <Row>
                <Col span={4}><SiderCreditor current="user_menu2"/></Col>
                <Col span={20}>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={22} offset={1}>
                            <Form horizontal>
                                <Form.Item label="状态筛选：" labelCol={{span:20}} wrapperCol={{span: 4}}>
                                    <Select size="large" defaultValue="" onChange={this.handleSelectChange}>
                                        <Option value={0}>&nbsp;</Option>
                                        <Option value={1}>债权申请中</Option>
                                        <Option value={2}>债权申请截止</Option>
                                        <Option value={3}>投票中</Option>
                                        <Option value={4}>现场投票结果统计中</Option>
                                        <Option value={5}>完成投票</Option>
                                        <Option value={6}>已关闭</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Collapse accordion>
                                {sliced.map(company=>(<Panel key={company._id} header={company.name}>
                                    <TableCompany company={company}>
                                        <StepsCompany {...company}/>
                                    </TableCompany>
                                </Panel>))}
                            </Collapse>
                            <Pagination onChange={this.handlePageChange} total={companies.length}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>);
    }
});
ReactDOM.render(<CompanyInfo companies={mock.companies}/>, document.getElementById('react-content'));
