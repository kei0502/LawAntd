import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuAgency';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Other = React.createClass({
    render(){
        return (<Layout menu={<Menu current="other"/>} current="other"
                        posts={this.props.others.map(other=>({...other,href:"otherPage.html?otherId="+other._id}))}/>);
    }
});
ReactDOM.render(<Other others={mock.news}/>, document.getElementById('react-content'));