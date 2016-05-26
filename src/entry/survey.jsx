import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuDeep';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Survey = React.createClass({
    render(){
        return (<Layout menu={<Menu current="survey"/>} current="survey" showDate
                        posts={this.props.surveys.map(survey=>({...survey,href:"surveyPage.html?surveyId="+survey._id}))}/>);
    }
});
ReactDOM.render(<Survey surveys={mock.news}/>, document.getElementById('react-content'));