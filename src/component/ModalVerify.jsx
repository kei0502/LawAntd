import React from 'react';
import {Modal} from 'antd';
require('../css/unstyledTable.css');
const claimTypes = ["工资", "税金", "无担保债权", "有担保债权"];
const guaranteedStyles = ["保证", "抵押", "质押"];
const ModalVerify = React.createClass({
    render(){
        let claim = this.props.claim;
        return (<Modal visible={this.props.visible} title="债权审核" onOk={this.props.close} onCancel={this.props.close}>
            <table border="0" style={{width:"100%",textAlign:"left",verticalAlign:"top"}}>
                <tbody>
                <tr>
                    <th width="20%">申报债权类型</th>
                    <td width="30%">{claim ? claimTypes[claim.claim_type - 1] : ""}</td>
                    <th width="20%">评估债权类型</th>
                    <td width="30%">{claim ? claimTypes[claim.verifyClaim_type - 1] : ""}</td>
                </tr>
                <tr>
                    <th>申报金额</th>
                    <td>{claim ? claim.total : ""}</td>
                    <th>评估金额</th>
                    <td>{claim ? claim.verifyTotal : ""}</td>
                </tr>
                <tr>
                    <th>申报担保情况</th>
                    <td>{claim ? (claim.guarantee ? guaranteedStyles[claim.guarantee.style - 1] : "无担保") : ""}</td>
                    <th>评估担保情况</th>
                    <td>{claim ? (claim.verifyGuarantee ? guaranteedStyles[claim.verifyGuarantee - 1] : "无担保") : ""}</td>
                </tr>
                <tr>
                    <th>申报裁决情况</th>
                    <td>{claim ? (claim.judge ? "有" : "无") : ""}</td>
                    <th>评估裁决情况</th>
                    <td>{claim ? (claim.verifyJudge ? "有" : "无") : ""}</td>
                </tr>
                <tr>
                    <th>法院审核意见</th>
                    <td colSpan="3">{claim ? claim.verifyCourt : ""}</td>
                </tr>
                <tr>
                    <th>财务审核意见</th>
                    <td colSpan="3">{claim ? claim.verifyCompany : ""}</td>
                </tr>
                <tr>
                    <th>会计师审核意见</th>
                    <td colSpan="3">{claim ? claim.verifyAccountant : ""}</td>
                </tr>
                <tr>
                    <th>最终审核意见</th>
                    <td colSpan="3">{claim ? claim.verifyLiquidation : ""}</td>
                </tr>
                </tbody>
            </table>
        </Modal>);
    }
});
export default ModalVerify;
