import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuRule';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Statute = React.createClass({
    render(){
        return (<Layout menu={<Menu current="statute"/>} current="statute"
                        posts={this.props.statutes.map(statute=>({...statute,href:"statutePage.html?statuteId="+statute._id}))}/>);
    }
});
ReactDOM.render(<Statute statutes={mock.news}/>, document.getElementById('react-content'));