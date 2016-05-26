import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuDeep';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Scholarship = React.createClass({
    render(){
        return (<Layout menu={<Menu current="scholarship"/>} current="scholarship" showDate
                        posts={this.props.scholarships.map(scholarship=>({...scholarship,href:"scholarshipPage.html?scholarshipId="+scholarship._id}))}/>);
    }
});
ReactDOM.render(<Scholarship scholarships={mock.news}/>, document.getElementById('react-content'));