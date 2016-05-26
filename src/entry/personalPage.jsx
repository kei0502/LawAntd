import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuDeep';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Personal = React.createClass({
    render(){
        return (<Layout menu={<Menu current="personal"/>} current="personal" post={this.props.personal} showDate/>);
    }
});
const personalId = getQueryParams(location.search)['personalId'];
var personal;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === personalId) {
        personal = mock.news[i];
        break;
    }
}
ReactDOM.render(<Personal personal={personal}/>, document.getElementById('react-content'));