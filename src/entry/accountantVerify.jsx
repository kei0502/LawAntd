import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Header from '../component/Header';
import {Row, Col, Table, Form, Select, Button} from 'antd';
import SiderAccountant from '../component/SiderAccountant';
import ModalVerifyAccountant from '../component/ModalVerifyAccountant';
import mock from '../mock';
const Option = Select.Option;
const claimTypes = ["工资", "税金", "无担保债权", "有担保债权"];
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
const AccountantVerify = React.createClass({
    getInitialState(){
        var claims = [], names = [];
        this.props.companies.forEach(company=> {
            company.claims.forEach(claim=> {
                if (claim.state > 1) {
                    claims.push({...claim, key: claim._id, company: {_id: company._id, name: company.name}});
                    if (names.indexOf(claim.name) < 0) {
                        names.push(claim.name);
                    }
                }
            });
        });
        return {names: names, claims: claims, nameSelect: "", companySelect: "", modalVisible: false, claim: undefined};
    },
    handleNameSelectChange(value) {
        this.setState({nameSelect: value});
    },
    handleCompanySelectChange(value){
        this.setState({companySelect: value});
    },
    handleVerifyStateChange(value){
        this.setState({verifyState: value});
    },
    showModal(claim) {
        return ()=> {
            this.setState({claim: claim, modalVisible: true})
        };
    },
    handleModalClose(){
        this.setState({modalVisible: false});
    },
    handleModalSubmit(verify){
        var claim = this.state.claim, claims = this.state.claims.slice(0);
        claim.verifyAccountant = verify.verify;
        claim.verifyAccountantFile = verify.file;
        for (var i = 0; i < claims.length; i++) {
            if (claims[i]._id === claim._id) {
                claims[i] = claim;
                break;
            }
        }
        this.setState({claims: claims, claim: claim, modalVisible: false});
    },
    render(){
        const claims = this.state.claims.filter(claim=> {
            if (this.state.nameSelect && claim.name !== this.state.nameSelect) {
                return false;
            } else if (this.state.companySelect && claim.company._id !== this.state.companySelect) {
                return false;
            } else if (this.state.verifyState === undefined) {
                return true;
            } else if (this.state.verifyState === true) {
                return claim.verifyAccountant !== undefined;
            } else {
                return claim.verifyAccountant === undefined;
            }
        });
        const columns = [{
            title: "债权人", dataIndex: "name", key: "name", width: "25%", sorter: (a, b)=> {
                if (a.name === b.name) {
                    return 0;
                } else {
                    return a.name < b.name ? -1 : 1;
                }
            }
        }, {
            title: "类型",
            dataIndex: "claim_type",
            key: "type",
            width: "25%",
            render: (text)=>(claimTypes[text - 1]),
            sorter: (a, b)=>(a.claim_type - b.claim_type),
        }, {
            title: "债务公司",
            dataIndex: "company",
            key: "company",
            width: "25%",
            render: (company)=>(company.name),
            sorter: (a, b)=> {
                if (a.company._id === b.company._id) {
                    return 0;
                } else {
                    return a.company._id < b.company._id ? -1 : 1;
                }
            }
        }, {
            title: "审核状态",
            dataIndex: "verifyAccountant",
            key: "verifyAccountant",
            width: "25%",
            render: (text, record)=>(text === undefined ? (
                <Button type="primary" onClick={this.showModal(record)}>审核</Button>) : (
                <span>审核结论：{text}<br/>{record.verifyAccountantFile ? (
                    <a href={record.verifyAccountantFile} target="_blank">审核报告</a>) : undefined}</span>)),
            sorter: (a, b)=> {
                if (a.verifyAccountant) {
                    return b.verifyAccountant ? 0 : 1;
                } else {
                    return b.verifyAccountant ? -1 : 0;
                }
            }
        }];
        return (<div>
            <Header user={mock.accountant}/>
            <Row>
                <Col span={4}><SiderAccountant current="accountant_menu1"/></Col>
                <Col span={20}>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={22} offset={1}>
                            <Form inline style={{textAlign:"right"}}>
                                <Form.Item label="债权人：">
                                    <Select size="large" value={this.state.nameSelect}
                                            style={{width:150,textAlign:"left"}} onChange={this.handleNameSelectChange}>
                                        <Option key="" value="">&nbsp;</Option>
                                        {this.state.names.map(name=>(<Option key={name} value={name}>{name}</Option>))}
                                    </Select>
                                </Form.Item>
                                <Form.Item label="公司：">
                                    <Select size="large" value={this.state.companySelect}
                                            style={{width:150,textAlign:"left"}}
                                            onChange={this.handleCompanySelectChange}>
                                        <Option key="" value="">&nbsp;</Option>
                                        {this.props.companies.map(company=>(
                                            <Option key={company._id} value={company._id}>{company.name}</Option>))}
                                    </Select>
                                </Form.Item>
                                <Form.Item label="审核状态：">
                                    <Select size="large" value={this.state.verifyState}
                                            style={{width:150,textAlign:"left"}}
                                            onChange={this.handleVerifyStateChange}>
                                        <Option value={undefined}>&nbsp;</Option>
                                        <Option value={false}>未审核</Option>
                                        <Option value={true}>已审核</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Table columns={columns} pagination={{total:claims.length}} dataSource={claims}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ModalVerifyAccountant visible={this.state.modalVisible} claim={this.state.claim}
                                   close={this.handleModalClose} handleSubmit={this.handleModalSubmit}/>
        </div>);
    }
});
let companies = mock.companies.filter(company=> (getCurrentStep(company) <= 2 && !!company.claims));
ReactDOM.render(<AccountantVerify companies={companies}/>, document.getElementById('react-content'));