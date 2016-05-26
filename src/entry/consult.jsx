import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuService';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Consult = React.createClass({
    render(){
        return (<Layout menu={<Menu current="consult"/>} current="consult" showDate
                        posts={this.props.consults.map(consult=>({...consult,href:"consultPage.html?consultId="+consult._id}))}/>);
    }
});
ReactDOM.render(<Consult consults={mock.news}/>, document.getElementById('react-content'));