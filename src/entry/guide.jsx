import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuClaim';
import Layout from '../component/web/PostLayoutWithMenu';
import mock from '../mock';
const Guide = React.createClass({
    render(){
        return (<Layout menu={<Menu current="guide"/>} current="guide" post={this.props.guide}/>);
    }
});
const news = mock.news[0];
ReactDOM.render(<Guide
    guide={{_id:news._id,title:'申报指南',date:news.date,text:news.text,imgs:news.imgs}}/>, document.getElementById('react-content'));