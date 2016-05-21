import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/Header';
import {Row, Col, Collapse, Pagination, Table} from 'antd';
import SiderCreditor from '../component/SiderCreditor';
import TableCompany from '../component/TableCompany';
import mock from '../mock';
const Panel = Collapse.Panel;
const CompanyRelease = React.createClass({
    getInitialState(){
        return {
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
        var page = this.state.page, sliced = this.props.companies.length <= page * 10 ? this.props.companies.slice((page - 1) * 10) : this.props.companies.slice((page - 1) * 10, page * 10);
        var columns = [{
            title: "文件名",
            dataIndex: "name",
            key: "name",
            width: "20%",
            sorter: (a, b)=>(a.name.length - b.name.length)
        }, {
            title: "披露日期",
            dataIndex: "time",
            key: "time",
            width: "20%",
            sorter: (a, b)=>(a.time === b.time ? 0 : (a.time < b.time ? -1 : 1))
        }, {
            title: "链接",
            dataIndex: "href",
            key: "href",
            width: "40%",
            render: text=>(<a href={text} target="_blank">{text}</a>)
        }, {
            title: "附件列表",
            dataIndex: "attachments",
            key: "attachments",
            width: "20%",
            render: attachments=>(<ul>{attachments.map((attachment, i)=>(<li key={i}>
                <a href={attachment.href} target="_blank">{attachment.name}</a>
            </li>))}</ul>)
        }];
        return (<div>
            <Header user={mock.creditor}/>
            <Row>
                <Col span={4}><SiderCreditor current="user_menu4"/></Col>
                <Col span={20}>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={22} offset={1}>
                            <Collapse accordion>
                                {sliced.map(company=>(<Panel key={company._id} header={company.name}>
                                    <TableCompany company={company}>
                                        <Table columns={columns}
                                               dataSource={company.files.map(file=>({...file,key:file._id}))}
                                               pagination={{total:company.files.length}}/>
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
ReactDOM.render(<CompanyRelease companies={mock.companies}/>, document.getElementById('react-content'));
