import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuDeep';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Classic = React.createClass({
    render(){
        return (<Layout menu={<Menu current="classic"/>} current="classic" showDate
                        posts={this.props.classics.map(classic=>({...classic,href:"classicPage.html?classicId="+classic._id}))}/>);
    }
});
ReactDOM.render(<Classic classics={mock.news}/>, document.getElementById('react-content'));