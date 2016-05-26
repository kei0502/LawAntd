import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuAgency';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Admin = React.createClass({
    render(){
        return (<Layout menu={<Menu current="admin"/>} current="admin" post={this.props.admin}/>);
    }
});
const adminId = getQueryParams(location.search)['adminId'];
var admin;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === adminId) {
        admin = mock.news[i];
        break;
    }
}
ReactDOM.render(<Admin admin={admin}/>, document.getElementById('react-content'));