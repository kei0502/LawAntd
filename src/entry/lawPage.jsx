import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuRule';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Law = React.createClass({
    render(){
        return (<Layout menu={<Menu current="law"/>} current="law" post={this.props.law}/>);
    }
});
const lawId = getQueryParams(location.search)['lawId'];
var law;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === lawId) {
        law = mock.news[i];
        break;
    }
}
ReactDOM.render(<Law law={law}/>, document.getElementById('react-content'));