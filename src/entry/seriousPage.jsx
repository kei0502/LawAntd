import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuDeep';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Serious = React.createClass({
    render(){
        return (<Layout menu={<Menu current="serious"/>} current="serious" post={this.props.serious} showDate/>);
    }
});
const seriousId = getQueryParams(location.search)['seriousId'];
var serious;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === seriousId) {
        serious = mock.news[i];
        break;
    }
}
ReactDOM.render(<Serious serious={serious}/>, document.getElementById('react-content'));