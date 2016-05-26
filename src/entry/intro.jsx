import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuAbout';
import Layout from '../component/web/PostLayoutWithMenu';
import mock from '../mock';
const Intro = React.createClass({
    render(){
        return (<Layout menu={<Menu current="intro"/>} current="intro" post={this.props.intro}/>);
    }
});
const news = mock.news[3];
ReactDOM.render(<Intro
    intro={{_id:news._id,title:'公司介绍',date:news.date,text:news.text,imgs:news.imgs}}/>, document.getElementById('react-content'));