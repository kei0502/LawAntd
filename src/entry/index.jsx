import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/Header';
import {Row, Col} from 'antd';
require('../css/style.css');
const Index = React.createClass({
    render(){
        return (<div>
            <Header/>
            <Row style={{padding:15}}>
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
            </Row>
        </div>);
    }
});
ReactDOM.render(<Index/>, document.getElementById('react-content'));