import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Button, Table, Upload, Icon} from 'antd';
import SiderPlatform from '../component/SiderPlatform';
import Header from '../component/Header';
import mock from '../mock';
const PlatformHomepageAd = React.createClass({
    getInitialState(){
        return {ads: this.props.ads};
    },
    handleDelete(_id){
        return (e)=> {
            e.preventDefault();
            this.setState({ads: this.state.ads.filter(ad=>(ad._id !== _id))});
        }
    },
    render(){
        const columns = [{title: "序号", width: '10%', key: 'idx', render: (text, record, i)=>(i)}, {
            title: "图片",
            width: '75%',
            key: 'pic',
            dataIndex: 'pic',
            render: text=>(<img src={text} height="250"/>)
        }, {
            title: "操作",
            width: '15%',
            key: 'action',
            dataIndex: '_id',
            render: text=>(<Button type="ghost" onClick={this.handleDelete(text)}>移除</Button>)
        }];
        return (<div>
            <Header user={this.props.user}/>
            <Row>
                <Col span={4}><SiderPlatform current="menu4"/></Col>
                <Col span={20}>
                    <Row style={{margin:'15px 0'}}>
                        <Col span={22} offset={1}>
                            <Upload name="pic" action="/" style={{marginBottom:16}}>
                                <Button type="primary"><Icon type="upload"/> 新增首页轮播</Button>
                            </Upload>
                            <Table pagination={false} columns={columns} dataSource={this.state.ads}
                                   rowKey={ad=>(ad._id)}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>);
    }
});
ReactDOM.render(<PlatformHomepageAd ads={mock.homepage_ad}/>, document.getElementById('react-content'));