import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'antd';
import Header from '../component/web/Header';
import Nav from '../component/web/Nav';
import Footer from '../component/web/Footer';
import PostList from '../component/web/PostList';
import mock from '../mock';
const News = React.createClass({
    render(){
        return (<div>
            <Header/>
            <Nav current="news"/>
            <Row><Col span={16} offset={4}>
                <PostList posts={this.props.news.map(post=>({...post,href:"newsPage.html?newsId="+post._id}))}/>
            </Col></Row>
            <Footer/>
        </div>);
    }
});
ReactDOM.render(<News news={mock.news}/>, document.getElementById('react-content'));