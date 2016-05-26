import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'antd';
import Header from '../component/web/Header';
import Footer from '../component/web/Footer';
import Post from '../component/web/Post';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const NewsPage = React.createClass({
    render(){
        return (<div>
            <Header current="news"/>
            <Row><Col span={16} offset={4}>
                <Post post={this.props.news} showDate/>
            </Col></Row>
            <Footer/>
        </div>);
    }
});
const newsId = getQueryParams(location.search)['newsId'];
var news;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === newsId) {
        news = mock.news[i];
        break;
    }
}
ReactDOM.render(<NewsPage news={news}/>, document.getElementById('react-content'));