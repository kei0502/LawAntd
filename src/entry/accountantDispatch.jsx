import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/Header';
import {Row, Col, Table, Form, Select} from 'antd';
import SiderAccountant from '../component/SiderAccountant';
import FormResponse from '../component/FormResponse';
import mock from '../mock';
const Option = Select.Option;
const AccountantDispatch = React.createClass({
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
    render(){
        let companies = [], companyIndexes = [];
        this.state.dispatches.forEach(dispatch=> {
            const company = dispatch.company, companyId = company._id;
            if (companyIndexes.indexOf(companyId) < 0) {
                companies.push(company);
                companyIndexes.push(companyId);
            }
        });
        var dispatches = this.state.dispatches.filter(dispatch=>(!this.state.companySelect || dispatch.company._id === this.state.companySelect));
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
        return (<div>
            <Header user={mock.accountant}/>
            <Row>
                <Col span={4}><SiderAccountant current="accountant_menu2"/></Col>
                <Col span={20}>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={22} offset={1}>
                            <Form horizontal>
                                <Form.Item label="公司筛选：" labelCol={{span:20}} wrapperCol={{span: 4}}>
                                    <Select size="large" value={this.state.companySelect}
                                            onChange={this.handleSelectChange}>
                                        <Option key="" value="">&nbsp;</Option>
                                        {companies.map(company=>(
                                            <Option key={company._id} value={company._id}>{company.name}</Option>))}
                                    </Select>
                                </Form.Item>
                            </Form>
                            <Table columns={columns} pagination={{total:dispatches.length}}
                                   dataSource={dispatches.map(dispatch=>({...dispatch,key:dispatch._id}))}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>);
    }
});
ReactDOM.render(<AccountantDispatch dispatches={mock.dispatches}/>, document.getElementById('react-content'));