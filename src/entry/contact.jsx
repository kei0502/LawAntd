import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuAbout';
import Layout from '../component/web/PostLayoutWithMenu';
import mock from '../mock';
const Contact = React.createClass({
    render(){
        return (<Layout menu={<Menu current="contact"/>} current="contact" post={this.props.contact}/>);
    }
});
const news = mock.news[4];
ReactDOM.render(<Contact
    contact={{_id:news._id,title:'法律声明',date:news.date,text:news.text,imgs:news.imgs}}/>, document.getElementById('react-content'));