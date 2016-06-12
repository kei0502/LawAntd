import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Modal, Form, Button, Table, Upload, Icon, Input} from 'antd';
import SiderPlatform from '../component/SiderPlatform';
import Header from '../component/Header';
import ModalContract from '../component/ModalContract';
import mock from '../mock';
const PlatformContract = React.createClass({
    getInitialState(){
        return {modalVisible: false, contracts: this.props.contracts};
    },
    showModal(){
        this.setState({modalVisible: true});
    },
    closeModal(){
        this.setState({modalVisible: false});
    },
    render(){
        const columns = [{
            title: "管理人名称",
            key: "admin",
            dataIndex: "admin",
            width: "50%",
            render: admin=>(admin.name)
        }, {
            title: "协议",
            key: "contract",
            width: "50%",
            render: (text, record)=>(<a href={record.file} target="_blank">{record.name}</a>)
        }];
        const formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 16}};
        return (<div>
            <Header user={this.props.user}/>
            <Row>
                <Col span={4}><SiderPlatform current="menu6"/></Col>
                <Col span={20}>
                    <Row style={{margin:'15px 0'}}>
                        <Col span={22} offset={1}>
                            <Button type="primary" onClick={this.showModal} style={{marginBottom:16}}>协议上传</Button>
                            <Table columns={columns} dataSource={this.state.contracts}
                                   pagination={{total:this.state.contracts.length}} rowKey={contract=>(contract._id)}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ModalContract visible={this.state.modalVisible} close={this.closeModal}/>
        </div>);
    }
});
ReactDOM.render(<PlatformContract contracts={mock.contracts}/>, document.getElementById('react-content'));