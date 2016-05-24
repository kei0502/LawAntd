import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import {Row, Col, Collapse, Pagination, Table, Button, Dropdown, Menu, Icon} from 'antd';
import Header from '../component/Header';
import SiderCreditor from '../component/SiderCreditor';
import TableCompany from '../component/TableCompany';
import StepsClaim from '../component/StepsClaim';
import ModalPreClaim from '../component/ModalPreClaim';
import ModalClaim from '../component/ModalClaim';
import ModalVerify from '../component/ModalVerify';
import mock from '../mock';
import noop from '../common/noop';
const Panel = Collapse.Panel;
const MenuItem = Menu.Item;
const claimTypes = ["工资", "税金", "无担保债权", "有担保债权"];
const ClaimApply = React.createClass({
    getInitialState(){
        return {
            page: 1,
            modalVisible: false,
            interestEnd: moment().format("YYYY-MM-DD"),
            verifyVisible: false,
            preClaimVisible: false
        };
    },
    handlePageChange(page){
        this.setState({page: page});
    },
    create(company){
        return ()=> {
            this.setState({interestEnd: company.settlement, preClaimVisible: true, claim: undefined})
        };
    },
    preClaimOk(){
        this.setState({preClaimVisible: false, modalVisible: true});
    },
    preClaimCancel(){
        this.setState({preClaimVisible: false});
    },
    view(claim){
        return e=> {
            e.preventDefault();
            this.setState({interestEnd: claim.settlement, modalVisible: true, disabled: true, claim: claim});
        }
    },
    edit(claim){
        return e=> {
            e.preventDefault();
            this.setState({interestEnd: claim.settlement, modalVisible: true, disabled: false, claim: claim});
        }
    },
    verify(claim){
        return e=> {
            e.preventDefault();
            this.setState({claim: claim, verifyVisible: true});
        }
    },
    closeModal(){
        this.setState({modalVisible: false});
    },
    closeVerify(){
        this.setState({verifyVisible: false});
    },
    render(){
        var page = this.state.page, sliced = this.props.companies.length <= page * 10 ? this.props.companies.slice((page - 1) * 10) : this.props.companies.slice((page - 1) * 10, page * 10), columns = [{
            title: "备注名",
            key: "display",
            dataIndex: "display",
            width: "20%"
        }, {title: "债权类型", key: "type", dataIndex: "claim_type", width: "20%", render: text=> (claimTypes[text - 1])}, {
            title: "审核状态",
            key: "step",
            width: "30%",
            render: (text, record)=>(<StepsClaim {...record}/>)
        }, {
            title: "操作", key: "operation", width: "30%", render: (text, record)=> {
                switch (record.state) {
                    case 1:
                        return (<span>
                            <a href="/processv1.pdf" target="_blank">下载授权书</a>
                            <span className="ant-divider"/>
                            <a href="#" onClick={this.view(record)}>查看</a>
                            <span className="ant-divider"/>
                            <a href="#" onClick={this.edit(record)}>修改</a>
                            <span className="ant-divider"/>
                            <a href="/processv1.pdf" target="_blank">打印</a>
                        </span>);
                    case 2:
                        return (<span>
                            <a href="#" onClick={this.view(record)}>查看</a>
                            <span className="ant-divider"/>
                            <a href="#" onClick={this.edit(record)}>修改</a>
                            <span className="ant-divider"/>
                            <a href="/processv1.pdf" target="_blank">打印</a>
                        </span>);
                    case 3:
                        var menu = (<Menu>
                            <MenuItem key="court" disabled={!record.verifyCourtFile}>
                                <a href={record.verifyCourtFile?record.verifyCourtFile:"#"} target="_blank">法院报告</a>
                            </MenuItem>
                            <MenuItem key="company" disabled={!record.verifyCompanyFile}>
                                <a href={record.verifyCompanyFile?record.verifyCompanyFile:"#"} target="_blank">财务报告</a>
                            </MenuItem>
                            <MenuItem key="accountant" disabled={!record.verifyAccountantFile}>
                                <a href={record.verifyAccountantFile?record.verifyAccountantFile:"#"} target="_blank">会计报告</a>
                            </MenuItem>
                            <Menu.Divider/>
                            <MenuItem key="liquidation" disabled={!record.verifyLiquidationFile}>
                                <a href={record.verifyLiquidationFile?record.verifyLiquidationFile:"#"} target="_blank">最终报告</a>
                            </MenuItem>
                        </Menu>);
                        return (<span>
                            <a href="#" onClick={this.view(record)}>查看</a>
                            <span className="ant-divider"/>
                            <a href="/processv1.pdf" target="_blank">打印</a>
                            <span className="ant-divider"/>
                            <a href="#" onClick={this.verify(record)}>查看审核意见</a>
                            <span className="ant-divider"/>
                            <Dropdown overlay={menu}>
                                <a href="#" className="ant-dropdown-link" onClick={noop}>
                                    下载审核报告 <Icon type="down"/>
                                </a>
                            </Dropdown>
                        </span>);
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
                                                   dataSource={company.claims?company.claims.map(claim=>({...claim,key:claim._id,settlement:company.settlement})):undefined}/>
                                        </TableCompany>
                                    </Panel>);
                                })}
                            </Collapse>
                            <Pagination onChange={this.handlePageChange} total={this.props.companies.length}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ModalPreClaim visible={this.state.preClaimVisible} handleOk={this.preClaimOk}
                           handleCancel={this.preClaimCancel}/>
            <ModalClaim visible={this.state.modalVisible} interestEnd={this.state.interestEnd}
                        disabled={this.state.disabled} close={this.closeModal} claim={this.state.claim}/>
            <ModalVerify visible={this.state.verifyVisible} claim={this.state.claim} close={this.closeVerify}
                         interestEnd={this.state.interestEnd}/>
        </div>);
    }
});
ReactDOM.render(<ClaimApply
    companies={mock.companies.filter(company=>(moment().isSameOrBefore(company.expire,'day')))}/>, document.getElementById('react-content'));