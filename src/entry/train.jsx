import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuService';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Train = React.createClass({
    render(){
        return (<Layout menu={<Menu current="train"/>} current="train" showDate
                        posts={this.props.trains.map(train=>({...train,href:"trainPage.html?trainId="+train._id}))}/>);
    }
});
ReactDOM.render(<Train trains={mock.news}/>, document.getElementById('react-content'));