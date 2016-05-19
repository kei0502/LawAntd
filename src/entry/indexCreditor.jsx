import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/Header';
import {Row, Col} from 'antd';
import SiderCreditor from '../component/SiderCreditor';
import mock from '../mock'
require('../css/style.css');
const Index = React.createClass({
    render(){
        return (<div>
            <Header user={mock.creditor}/>
            <Row>
                <Col span={4}><SiderCreditor /></Col>
                <Col span={20}>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={22} offset={1}>
                            <div className="header news-header">
                                <span>新闻公告</span>
                                <a href="#">查看更多>></a>
                            </div>
                            <ul className="news-list">
                                <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                                <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-22</span></a></li>
                                <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-22</span></a></li>
                                <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                                <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                                <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                                <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-22</span></a></li>
                                <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-22</span></a></li>
                                <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                                <li><a href="#">公安部开通非法集资案件投资人信息登记平台首对“e租宝”案<span>2016-02-21</span></a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'20px'}}>
                        <Col span={22} offset={1}>
                            <div className="header news-header">
                                <span>通知</span>
                                <a href="#">查看更多>></a>
                            </div>
                            <ul className="news-list">
                                <li><a href="#">“e租宝”案债权申请已审核完毕<span>2016-02-23</span></a></li>
                                <li><a href="#">“e租宝”案债权申请投票公告<span>2016-02-22</span></a></li>
                                <li><a href="#">“e租宝”案债权申请已审核完毕<span>2016-02-23</span></a></li>
                                <li><a href="#">“e租宝”案债权申请投票公告<span>2016-02-22</span></a></li>
                                <li><a href="#">“e租宝”案债权申请已审核完毕<span>2016-02-23</span></a></li>
                                <li><a href="#">“e租宝”案债权申请投票公告<span>2016-02-22</span></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>);
    }
});
ReactDOM.render(<Index/>, document.getElementById('react-content'));
