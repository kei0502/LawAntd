import React from 'react';
import {Modal, Table, Radio} from 'antd';
const RadioGroup = Radio.Group;
const ModalVoteCreditor = React.createClass({
    getInitialState(){
        return {
            vote: this.props.vote ? this.props.vote.map(vote=>({
                ...vote,
                key: vote._id,
                choice: true
            })) : undefined
        };
    },
    componentWillReceiveProps(props) {
        this.setState({vote: props.vote ? props.vote.map(vote=>({...vote, key: vote._id, choice: true})) : undefined});
    },
    handleChangeRadio(i){
        return (e)=> {
            var vote = this.state.vote.slice(0);
            vote[i].choice = e.target.value;
            this.setState({vote: vote});
        };
    },
    getResult(){
        return this.state.vote.map(vote=>(vote.choice));
    },
    render(){
        const columns = [{
            title: "项目",
            key: "name",
            width: "30%",
            render: (text, record)=>(<a href={record.file} target="_blank">{record.name}</a>)
        }, {
            title: "选择",
            key: "choice",
            width: "70%",
            render: (text, record, index)=>(
                <RadioGroup onChange={this.handleChangeRadio(index)} value={this.state.vote[index].choice}>
                    <Radio key="agree" value={true}>赞成</Radio>
                    <Radio key="disagree" value={false}>反对</Radio>
                </RadioGroup>)
        }];
        return (
            <Modal visible={this.props.visible}
                   onOk={this.props.vote?this.props.handleSubmit(this.getResult):this.props.close}
                   onCancel={this.props.close}
                   title="投票">
                <Table pagination={false} size="small" columns={columns} dataSource={this.state.vote}/>
            </Modal>);
    }
});
export default ModalVoteCreditor;