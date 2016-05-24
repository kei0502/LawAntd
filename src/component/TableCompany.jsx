import React from 'react';
require('../css/unstyledTable.css');
const caseTypes = ["破产清算", "强制清算", "破产重整", "自行清算"];
function judgeShow(judge) {
    return judge.name + "（联系方式:" + judge.phone + "）";
}
const TableCompany = React.createClass({
    render(){
        return (<table border="0">
            <tbody>
            <tr>
                <th width="15%">案件编码:</th>
                <td width="35%">{this.props.company.cid}</td>
                <th width="15%">案件类型:</th>
                <td width="35%">{caseTypes[this.props.company.type - 1]}</td>
            </tr>
            <tr>
                <th>统一信用代码:</th>
                <td>{this.props.company.code}</td>
                <th>公司名称:</th>
                <td>{this.props.company.name}</td>
            </tr>
            <tr>
                <th>法定代表人:</th>
                <td>{this.props.company.representative}</td>
                <th>财务负责人:</th>
                <td>{this.props.company.cfo}</td>
            </tr>
            <tr>
                <th>公司地址:</th>
                <td colSpan="3">{this.props.company.address}</td>
            </tr>
            <tr>
                <th>受理日期:</th>
                <td>{this.props.company.create}</td>
                <th>结算日期:</th>
                <td>{this.props.company.settlement}</td>
            </tr>
            <tr>
                <th>审理法院:</th>
                <td>{this.props.company.courtName}</td>
                <th>主审法官:</th>
                <td>{judgeShow(this.props.company.judge)}</td>
            </tr>
            <tr>
                <th>合议庭成员:</th>
                <td>{this.props.company.collegiates.map((collegiate, i)=> {
                    return (<span key={"collegiate_"+i}>{judgeShow(collegiate)}<br/></span>);
                })}</td>
                <th>书记员:</th>
                <td>{judgeShow(this.props.company.note)}</td>
            </tr>
            <tr>
                <td colSpan="4">{this.props.children}</td>
            </tr>
            </tbody>
        </table>);
    }
});
export default TableCompany;