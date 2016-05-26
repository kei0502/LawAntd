import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuDeep';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Survey = React.createClass({
    render(){
        return (<Layout menu={<Menu current="survey"/>} current="survey" post={this.props.survey} showDate/>);
    }
});
const surveyId = getQueryParams(location.search)['surveyId'];
var survey;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === surveyId) {
        survey = mock.news[i];
        break;
    }
}
ReactDOM.render(<Survey survey={survey}/>, document.getElementById('react-content'));