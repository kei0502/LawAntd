import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuDeep';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Scholarship = React.createClass({
    render(){
        return (<Layout menu={<Menu current="scholarship"/>} current="scholarship" post={this.props.scholarship} showDate/>);
    }
});
const scholarshipId = getQueryParams(location.search)['scholarshipId'];
var scholarship;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === scholarshipId) {
        scholarship = mock.news[i];
        break;
    }
}
ReactDOM.render(<Scholarship scholarship={scholarship}/>, document.getElementById('react-content'));