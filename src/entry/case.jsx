import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Table, Select, Form} from 'antd';
import moment from 'moment';
import Header from '../component/web/Header';
import Nav from '../component/web/Nav';
import Footer from '../component/web/Footer';
import mock from '../mock';
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
const caseTypes = ["破产清算", "强制清算", "破产重整", "自行清算"];
const Case = React.createClass({
    getInitialState(){
        return {state: 0};
    },
    handleSelectChange(value){
        this.setState({state: value});
    },
    render(){
        var companies = this.props.companies.map(company=>({
            ...company,
            key: company._id
        })).filter(company=> (!this.state.state || this.state.state === company.type));
        const columns = [{title: "公司名称", key: "name", dataIndex: "name", width: "50%"}, {
            title: "案件类型",
            key: "type",
            dataIndex: "type",
            width: "25%",
            render: (type)=>(caseTypes[type - 1]),
            sorter: (a, b)=>(a.type - b.type)
        }, {
            title: "受理日期", key: "create", dataIndex: "create", width: "25%", sorter: (a, b)=> {
                if (a.create === b.create) {
                    return 0;
                } else {
                    return a.create < b.create ? -1 : 1
                }
            }
        }];
        return (<div>
            <Header/>
            <Nav current="case"/>
            <Row><Col span={16} offset={4}>
                <Form horizontal style={{margin: "1em 0"}}>
                    <Form.Item label="案件类型：" labelCol={{span:18}} wrapperCol={{span: 6}}>
                        <Select size="large" defaultValue="" onChange={this.handleSelectChange}>
                            <Option key="0" value={0}>&nbsp;</Option>
                            {caseTypes.map((type, i)=>(<Option key={(i+1).toString()} value={i+1}>{type}</Option>))}
                        </Select>
                    </Form.Item>
                </Form>
                <Table columns={columns} pagination={{total: companies.length}} dataSource={companies}/>
            </Col></Row>
            <Footer/>
        </div>);
    }
});
ReactDOM.render(<Case
    companies={mock.companies.filter(company=>(getCurrentStep(company)<6))}/>, document.getElementById('react-content'));