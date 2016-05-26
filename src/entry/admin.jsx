import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuAgency';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Admin = React.createClass({
    render(){
        return (<Layout menu={<Menu current="admin"/>} current="admin"
                        posts={this.props.admins.map(admin=>({...admin,href:"adminPage.html?adminId="+admin._id}))}/>);
    }
});
ReactDOM.render(<Admin admins={mock.news}/>, document.getElementById('react-content'));