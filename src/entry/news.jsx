import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'antd';
import Header from '../component/web/Header';
import Footer from '../component/web/Footer';
import PostList from '../component/web/PostList';
import mock from '../mock';
const News = React.createClass({
    render(){
        return (<div>
            <Header current="news"/>
            <Row><Col span={16} offset={4}>
                <PostList posts={this.props.news.map(post=>({...post,href:"newsPage.html?newsId="+post._id}))} showDate/>
            </Col></Row>
            <Footer/>
        </div>);
    }
});
ReactDOM.render(<News news={mock.news}/>, document.getElementById('react-content'));