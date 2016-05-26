import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuRule';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Law = React.createClass({
    render(){
        return (<Layout menu={<Menu current="law"/>} current="law"
                        posts={this.props.laws.map(law=>({...law,href:"lawPage.html?lawId="+law._id}))}/>);
    }
});
ReactDOM.render(<Law laws={mock.news}/>, document.getElementById('react-content'));