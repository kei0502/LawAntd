import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuDeep';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Personal = React.createClass({
    render(){
        return (<Layout menu={<Menu current="personal"/>} current="personal" showDate
                        posts={this.props.personals.map(personal=>({...personal,href:"personalPage.html?personalId="+personal._id}))}/>);
    }
});
ReactDOM.render(<Personal personals={mock.news}/>, document.getElementById('react-content'));