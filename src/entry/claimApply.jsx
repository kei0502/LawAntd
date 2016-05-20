import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import {Row, Col, Collapse, Pagination, Table, Button} from 'antd';
import Header from '../component/Header';
import SiderCreditor from '../component/SiderCreditor';
import TableCompany from '../component/TableCompany';
import StepsClaim from '../component/StepsClaim';
import ModalClaim from '../component/ModalClaim';
import mock from '../mock';
const Panel = Collapse.Panel;
const claimTypes = ["工资", "税金", "无担保债权", "有担保债权"];
const ClaimApply = React.createClass({
    getInitialState(){
        return {page: 1, modalVisible: false, interestEnd: moment().format("YYYY-MM-DD")};
    },
    handlePageChange(page){
        this.setState({page: page});
    },
    create(company){
        return ()=> {
            this.setState({interestEnd: company.expire, modalVisible: true})
        };
    },
    closeModal(){
        this.setState({modalVisible: false});
    },
    render(){
        var page = this.state.page, sliced = this.props.companies.length <= page * 10 ? this.props.companies.slice((page - 1) * 10) : this.props.companies.slice((page - 1) * 10, page * 10), columns = [{
            title: "备注名",
            key: "display",
            dataIndex: "display"
        }, {title: "债权类型", key: "type", dataIndex: "claim_type", render: text=> (claimTypes[text - 1])}, {
            title: "审核状态",
            key: "step",
            render: (text, record)=>(<StepsClaim {...record}/>)
        }, {
            title: "操作", key: "operation", render: (text, record)=> {
                switch (record.state) {
                    case 1:
                        return (<span>
                            <a href="/processv1.pdf" target="_blank">下载授权书</a>
                            <span className="ant-divider"/>
                            <a href="#">查看</a>
                            <span className="ant-divider"/>
                            <a href="#">修改</a>
                        </span>);
                    case 2:
                        return (<span>
                            <a href="#">查看</a>
                            <span className="ant-divider"/>
                            <a href="#">修改</a>
                        </span>);
                    case 3:
                        return (<span><a href="#">查看</a></span>);
                }
            }
        }];
        return (<div>
            <Header user={mock.creditor}/>
            <Row>
                <Col span={4}><SiderCreditor current="user_menu3"/></Col>
                <Col span={20}>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={22} offset={1}>
                            <Collapse accordion>
                                {sliced.map(company=> {
                                    return (<Panel key={company._id} header={company.name}>
                                        <TableCompany company={company}>
                                            <Button type="primary" onClick={this.create(company)}>新增债权申请</Button>
                                            <Table pagination={false} columns={columns}
                                                   dataSource={company.claims?company.claims.map(claim=>({...claim,key:claim._id})):undefined}/>
                                        </TableCompany>
                                    </Panel>);
                                })}
                            </Collapse>
                            <Pagination onChange={this.handlePageChange} total={this.props.companies.length}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ModalClaim visible={this.state.modalVisible} interestEnd={this.state.interestEnd}
                        editable={this.state.editable} close={this.closeModal}/>
        </div>);
    }
});
ReactDOM.render(<ClaimApply
    companies={mock.companies.filter(company=>(moment().isSameOrBefore(company.expire,'day')))}/>, document.getElementById('react-content'));