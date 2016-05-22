import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Collapse, Pagination, Table, Button, Form, Select, Dropdown, Menu, Icon} from 'antd';
import moment from 'moment';
import Header from '../component/Header';
import SiderCreditor from '../component/SiderCreditor';
import TableCompany from '../component/TableCompany';
import ModalVoteCreditor from '../component/ModalVoteCreditor';
import ModalVoteResult from '../component/ModalVoteResult';
import mock from '../mock';
import noop from '../common/noop';
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
const CreditorVote = React.createClass({
    getInitialState(){
        return {
            state: 0,
            page: 1,
            voteCreditorVisible: false,
            voteResultVisible: false,
            companies: this.props.companies
        };
    },
    handleSelectChange(value){
        this.setState({state: value});
    },
    handlePageChange(page){
        this.setState({page: page});
    },
    showVoteCreditorModal(vote){
        return ()=> {
            this.setState({vote: vote, voteCreditorVisible: true})
        };
    },
    showVoteResultModal(vote, spotFile){
        return ()=> {
            this.setState({vote: vote, spotFile: spotFile, voteResultVisible: true});
        };
    },
    handleVoteCreditorSubmit(cb){
        return ()=> {
            var voteResult = cb(), vote = this.state.vote;
            for (var i = 0; i < vote.length; i++) {
                vote[i].choice = voteResult[i];
            }
            this.setState({
                companies: this.state.companies.slice(0),
                vote: vote.slice(0),
                voteCreditorVisible: false,
                voteResultVisible: true
            });
        }
    },
    closeVoteCreditorModal(){
        this.setState({voteCreditorVisible: false});
    },
    closeVoteResultModal(){
        this.setState({voteResultVisible: false});
    },
    render(){
        var companies = this.state.companies.map(company=>({
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
                                        <Option value={4}>现场投票结果统计中</Option>
                                        <Option value={5}>完成投票</Option>
                                        <Option value={6}>已关闭</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Collapse accordion>
                                {sliced.map(company=> {
                                    var button;
                                    switch (company.step) {
                                        case 2:
                                            let menu = (<Menu>{company.vote ? company.vote.map(vote=>(
                                                <Menu.Item key={vote._id}><a target="_blank"
                                                                             href={vote.file}>{vote.name}</a></Menu.Item>)) : undefined}</Menu>)
                                            button = (<Dropdown overlay={menu}>
                                                <a href="#" className="ant-dropdown-link" onClick={noop}>查看投票项目 <Icon
                                                    type="down"/></a>
                                            </Dropdown>);
                                            break;
                                        case 3:
                                            if (company.vote && company.vote.length > 0) {
                                                if (company.vote[0].choice === null || company.vote[0].choice === undefined) {
                                                    button = (<Button size="large" type="primary"
                                                                      onClick={this.showVoteCreditorModal(company.vote)}>投票</Button>);
                                                } else {
                                                    button = (<Button size="large" type="primary"
                                                                      onClick={this.showVoteResultModal(company.vote,company.spotFile)}>查看当前投票结果</Button>);
                                                }
                                            }
                                            break;
                                        case 4:
                                            button = (<Button size="large" type="primary"
                                                              onClick={this.showVoteResultModal(company.vote,company.spotFile)}>查看当前投票结果</Button>);
                                            break;
                                        case 5:
                                        case 6:
                                            button = (<Button size="large" type="primary"
                                                              onClick={this.showVoteResultModal(company.vote,company.spotFile)}>查看投票结果</Button>);
                                            break;
                                    }
                                    return (<Panel key={company._id} header={company.name}>
                                        <TableCompany company={company}>{button}</TableCompany>
                                    </Panel>);
                                })}
                            </Collapse>
                            <Pagination onChange={this.handlePageChange} total={companies.length}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ModalVoteCreditor vote={this.state.vote} visible={this.state.voteCreditorVisible} handleSubmit={this.handleVoteCreditorSubmit}
                               close={this.closeVoteCreditorModal}/>
            <ModalVoteResult vote={this.state.vote} spotFile={this.state.spotFile}
                             visible={this.state.voteResultVisible} close={this.closeVoteResultModal}/>
        </div>);
    }
});
ReactDOM.render(<CreditorVote
    companies={mock.companies.filter(company=>(moment().isAfter(company.expire,"day")))}/>, document.getElementById('react-content'));