import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Header from '../component/Header';
import {Row, Col, Table, Form, Select} from 'antd';
import SiderCreditor from '../component/SiderCreditor';
import FormDistributionCreditor from '../component/FormDistributionCreditor';
import mock from '../mock';
const Option = Select.Option;
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
const CreditorDistribution = React.createClass({
    getInitialState(){
        var distributions = [];
        this.props.companies.forEach(company=> {
            company.claims.forEach(claim=> {
                if (claim.distribution) {
                    distributions.push({
                        ...claim.distribution,
                        _id: claim._id,
                        key: claim._id,
                        display: claim.display,
                        total: claim.total,
                        verifyTotal: claim.verifyTotal,
                        company: {_id: company._id, name: company.name}
                    });
                }
            });
        });
        return {distributions: distributions, companySelect: ""};
    },
    handleSelectChange(value){
        this.setState({companySelect: value});
    },
    handleResponseSubmit(_id){
        return cb=>(e=> {
            e.preventDefault();
            var response = cb(), distributions = this.state.distributions.slice(0);
            for (let i = 0; i < distributions.length; i++) {
                if (distributions[i]._id === _id) {
                    distributions[i].response = response;
                    break;
                }
            }
            this.setState({distributions: distributions});
        });
    },
    render(){
        const distributions = this.state.distributions.filter(distribution=>(!this.state.companySelect || distribution.company._id === this.state.companySelect));
        const columns = [{title: "债权申报", dataIndex: "display", key: "display", width: "11%"}, {
            title: "公司",
            dataIndex: "company",
            key: "company",
            width: "11%",
            render: (text)=>(text.name),
            sorter: (a, b) => {
                if (a._id === b._id) {
                    return 0;
                } else {
                    return a._id < b._id ? -1 : 1;
                }
            }
        }, {
            title: "申报金额",
            dataIndex: "total",
            key: "total",
            width: "10%",
            sorter: (a, b)=>(a.total - b.total)
        }, {
            title: "评估金额",
            dataIndex: "verifyTotal",
            key: "verifyTotal",
            width: "10%",
            sorter: (a, b)=>(a.verifyTotal - b.verifyTotal)
        }, {
            title: "分配金额",
            dataIndex: "money",
            key: "money",
            width: "10%",
            sorter: (a, b)=>(a.money - b.money)
        }, {
            title: "分配时间",
            dataIndex: "time",
            key: "time",
            width: "10%",
            sorter: (a, b)=>(moment(a.time).valueOf() - moment(b.time).valueOf())
        }, {
            title: "确认时间",
            dataIndex: "confirm",
            key: "confirm",
            width: "10%",
            sorter: (a, b)=>(moment(a.confirm).valueOf() - moment(b.confirm).valueOf())
        }, {
            title: "反馈",
            key: "response",
            dataIndex: "response",
            width: "28%",
            render: (text, record)=>(
                <FormDistributionCreditor response={text} handleSubmit={this.handleResponseSubmit(record._id)}/>),
            sorter: (a, b)=> {
                if (!a.response) {
                    return b.response ? -1 : 0;
                } else if (!b.response) {
                    return 1;
                } else {
                    return a.response - b.response;
                }
            }
        }];
        return (<div>
            <Header user={mock.creditor}/>
            <Row>
                <Col span={4}><SiderCreditor current="user_menu8"/></Col>
                <Col span={20}>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={22} offset={1}>
                            <Form horizontal>
                                <Form.Item label="公司筛选：" labelCol={{span:20}} wrapperCol={{span: 4}}>
                                    <Select size="large" value={this.state.companySelect}
                                            onChange={this.handleSelectChange}>
                                        <Option key="" value="">&nbsp;</Option>
                                        {this.props.companies.map(company=>(
                                            <Option key={company._id} value={company._id}>{company.name}</Option>))}
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Table columns={columns} pagination={{total:distributions.length}}
                                   dataSource={distributions}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>);
    }
});
let companies = mock.companies.filter(company=> {
    if (getCurrentStep(company) < 5) {
        return false;
    } else if (company.claims) {
        for (var i = 0; i < company.claims.length; i++) {
            if (company.claims[i].distribution) {
                return true;
            }
        }
        return false;
    } else {
        return false;
    }
});
ReactDOM.render(<CreditorDistribution companies={companies}/>, document.getElementById('react-content'));