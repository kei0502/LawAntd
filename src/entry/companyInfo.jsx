import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/Header';
import {Row, Col, Form, Select, Collapse, Pagination} from 'antd';
import SiderCreditor from '../component/SiderCreditor';
import StepsCompany from '../component/StepsCompany';
import moment from 'moment';
import mock from '../mock';
const Option = Select.Option;
const Panel = Collapse.Panel;
const caseTypes = ["破产清算", "强制清算", "破产重整", "自行清算"];
function judgeShow(judge) {
    return judge.name + "（联系方式:" + judge.phone + "）";
}
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
                                        <Option value={4}>投票结束</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Collapse accordion>
                                {sliced.map(company=>(<Panel key={company._id} header={company.name}>
                                    <table border="0" style={{width:"100%",textAlign:"left",verticalAlign:"top"}}>
                                        <tbody>
                                        <tr>
                                            <th width="15%">案件编码:</th>
                                            <td width="35%">{company.cid}</td>
                                            <th width="15%">案件类型:</th>
                                            <td width="35%">{caseTypes[company.type - 1]}</td>
                                        </tr>
                                        <tr>
                                            <th>统一信用代码:</th>
                                            <td>{company.code}</td>
                                            <th>公司名称:</th>
                                            <td>{company.name}</td>
                                        </tr>
                                        <tr>
                                            <th>法定代表人:</th>
                                            <td>{company.representative}</td>
                                            <th>财务负责人:</th>
                                            <td>{company.cfo}</td>
                                        </tr>
                                        <tr>
                                            <th>公司地址:</th>
                                            <td colSpan="3">{company.address}</td>
                                        </tr>
                                        <tr>
                                            <th>受理日期:</th>
                                            <td>{company.create}</td>
                                            <th>结算日期:</th>
                                            <td>{company.settlement}</td>
                                        </tr>
                                        <tr>
                                            <th>审理法院:</th>
                                            <td>{company.courtName}</td>
                                            <th>主审法官:</th>
                                            <td>{judgeShow(company.judge)}</td>
                                        </tr>
                                        <tr>
                                            <th>合议庭成员:</th>
                                            <td>{company.collegiates.map((collegiate, i)=> {
                                                return (<span key={"collegiate_"+i}>
                                                    {judgeShow(collegiate)}<br/>
                                                </span>);
                                            })}</td>
                                            <th>书记员:</th>
                                            <td>{judgeShow(company.note)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4">
                                                <StepsCompany {...company}/>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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
