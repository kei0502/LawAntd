import React from 'react';
import {Modal, Table, Tag} from 'antd';
const ModalVoteResult = React.createClass({
    render(){
        const columns = [{
            title: "项目",
            key: "name",
            width: "16%",
            render: (text, record)=>(<a href={record.file} target="_blank">{record.name}</a>)
        }, {
            title: "赞成人数",
            dataIndex: "agree",
            key: "agree",
            width: "16%"
        }, {
            title: "赞成金额",
            dataIndex: "agreeMoney",
            key: "agreeMoney",
            width: "16%"
        }, {
            title: "反对人数",
            dataIndex: "disagree",
            key: "disagree",
            width: "16%"
        }, {
            title: "反对金额",
            dataIndex: "disagreeMoney",
            key: "disagreeMoney",
            width: "16%"
        }];
        if (this.props.vote && this.props.vote.length > 0 && this.props.vote[0].choice !== undefined && this.props.vote[0].choice !== null) {
            columns.push({
                title: "我的选择",
                dataIndex: "choice",
                key: "choice",
                width: "16%",
                render: (text)=>(text ? (<Tag color="green">赞成</Tag>) : (<Tag color="red">反对</Tag>))
            });
        } else if (this.props.spotFile) {
            columns.push({
                title: "最终结果",
                dataIndex: "result",
                key: "result",
                width: "16%",
                render: (text, record)=>(record.agreeMoney > record.disagreeMoney ? (<Tag color="green">通过</Tag>) : (
                    <Tag color="red">未通过</Tag>))
            });
        }
        return (<Modal visible={this.props.visible} onOk={this.props.close} onCancel={this.props.close}
                       title={this.props.spotFile?"投票结果":"当前投票结果"}>
            <Table pagination={false} size="small" columns={columns}
                   dataSource={this.props.vote?this.props.vote.map(vote=>({...vote,key:vote._id})):undefined}/>
        </Modal>);
    }
});
export default ModalVoteResult;