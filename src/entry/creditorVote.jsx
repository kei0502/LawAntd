import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Collapse, Pagination, Table, Button, Form, Select} from 'antd';
import moment from 'moment';
import Header from '../component/Header';
import SiderCreditor from '../component/SiderCreditor';
import TableCompany from '../component/TableCompany';
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
    } else {
        return 4;
    }
}
const CreditorVote = React.createClass({
    getInitialState(){
        return {state: 0, page: 1};
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
                <Col span={4}><SiderCreditor current="user_menu5"/></Col>
                <Col span={20}>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={22} offset={1}>
                            <Form horizontal>
                                <Form.Item label="状态筛选：" labelCol={{span:20}} wrapperCol={{span: 4}}>
                                    <Select size="large" defaultValue="" onChange={this.handleSelectChange}>
                                        <Option value={0}>&nbsp;</Option>
                                        <Option value={2}>等待投票</Option>
                                        <Option value={3}>投票中</Option>
                                        <Option value={4}>投票结束</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Collapse accordion>
                                {sliced.map(company=>(<Panel key={company._id} header={company.name}>
                                    <TableCompany company={company}>
                                    </TableCompany>
                                </Panel>))}
                            </Collapse>
                            <Pagination onChange={this.handlePageChange} total={this.props.companies.length}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>);
    }
});
ReactDOM.render(<CreditorVote
    companies={mock.companies.filter(company=>(moment().isAfter(company.expire,"day")))}/>, document.getElementById('react-content'));