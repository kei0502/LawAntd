import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/Header';
import {Row, Col, Form, Select, Collapse, Pagination, Table, Input, Button} from 'antd';
import SiderCreditor from '../component/SiderCreditor';
import TableCompany from '../component/TableCompany';
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
    } else {
        return 4;
    }
}
const CreditorQuestion = React.createClass({
    getInitialState(){
        return {
            state: 0,
            page: 1,
            companies: this.props.companies
        };
    },
    handleSelectChange(value){
        this.setState({state: value});
    },
    handlePageChange(page){
        this.setState({page: page});
    },
    handleQuestionChange(_id) {
        return e=> {
            var state = {};
            state["question_" + _id] = e.target.value;
            this.setState(state);
        };
    },
    handleQuestionSubmit(_id) {
        return e=> {
            var companies = this.state.companies.slice(0);
            companies.forEach(company=> {
                if (company._id === _id) {
                    var current = moment();
                    company.questions.push({
                        _id: current.valueOf().toString(),
                        question: this.state["question_" + _id],
                        questionTime: current.format("YYYY-MM-DD HH:mm")
                    });
                }
            });
            var state = {companies: companies};
            state["question_" + _id] = "";
            this.setState(state);
        }
    },
    render(){
        var companies = this.state.companies.map(company=>({
            ...company,
            step: getCurrentStep(company)
        })).filter(company=> (!this.state.state || this.state.state === company.step)), page = this.state.page, sliced = companies.length <= page * 10 ? companies.slice((page - 1) * 10) : companies.slice((page - 1) * 10, page * 10);
        var columns = [{
            title: "提问时间",
            dataIndex: "questionTime",
            key: "questionTime",
            width: "15%",
            sorter: (a, b)=>(a.questionTime === b.questionTime ? 0 : (a.questionTime < b.questionTime ? -1 : 1))
        }, {title: "问题", dataIndex: "question", key: "question", width: "35%"}, {
            title: "回答时间",
            dataIndex: "answerTime",
            key: "answerTime",
            width: "15%",
            sorter: (a, b)=> {
                if (!a.answerTime) {
                    return b.answerTime ? -1 : 0;
                } else if (!b.answerTime) {
                    return 1
                } else if (a.answerTime === b.answerTime) {
                    return 0;
                } else {
                    return a.answerTime < b.answerTime ? -1 : 1;
                }
            }
        }, {title: "回答", dataIndex: "answer", key: "answer", width: "35%"}];
        return (<div>
            <Header user={mock.creditor}/>
            <Row>
                <Col span={4}><SiderCreditor current="user_menu6"/></Col>
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
                                        <Option value={4}>投票结束</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Collapse accordion>
                                {sliced.map(company=>(<Panel key={company._id} header={company.name}>
                                    <TableCompany company={company}>
                                        <Table columns={columns} pagination={{total:company.questions.length}}
                                               dataSource={company.questions.map(questions=>({...questions,key:questions._id}))}/>
                                        <Input type="textarea" value={this.state["question_"+company._id]}
                                               placeholder="请输入您的问题" style={{marginBottom:16}}
                                               onChange={this.handleQuestionChange(company._id)}/>
                                        <Button size="large" type="primary"
                                                onClick={this.handleQuestionSubmit(company._id)}
                                                disabled={!this.state["question_"+company._id]}>提问</Button>
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
ReactDOM.render(<CreditorQuestion companies={mock.companies}/>, document.getElementById('react-content'));
