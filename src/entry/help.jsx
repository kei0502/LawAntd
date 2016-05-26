import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuClaim';
import Layout from '../component/web/PostLayoutWithMenu';
import mock from '../mock';
const Help = React.createClass({
    render(){
        return (<Layout menu={<Menu current="help"/>} current="help" post={this.props.help}/>);
    }
});
const news = mock.news[1];
ReactDOM.render(<Help
    help={{_id:news._id,title:'专业帮助',date:news.date,text:news.text,imgs:news.imgs}}/>, document.getElementById('react-content'));