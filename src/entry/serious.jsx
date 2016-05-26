import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuDeep';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Serious = React.createClass({
    render(){
        return (<Layout menu={<Menu current="serious"/>} current="serious" showDate
                        posts={this.props.serious.map(serious=>({...serious,href:"seriousPage.html?seriousId="+serious._id}))}/>);
    }
});
ReactDOM.render(<Serious serious={mock.news}/>, document.getElementById('react-content'));