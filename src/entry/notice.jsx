import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuAbout';
import Layout from '../component/web/PostLayoutWithMenu';
import mock from '../mock';
const Notice = React.createClass({
    render(){
        return (<Layout menu={<Menu current="notice"/>} current="notice" post={this.props.notice}/>);
    }
});
const news = mock.news[2];
ReactDOM.render(<Notice
    notice={{_id:news._id,title:'法律声明',date:news.date,text:news.text,imgs:news.imgs}}/>, document.getElementById('react-content'));