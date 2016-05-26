import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuDeep';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Classic = React.createClass({
    render(){
        return (<Layout menu={<Menu current="classic"/>} current="classic" post={this.props.classic} showDate/>);
    }
});
const classicId = getQueryParams(location.search)['classicId'];
var classic;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === classicId) {
        classic = mock.news[i];
        break;
    }
}
ReactDOM.render(<Classic classic={classic}/>, document.getElementById('react-content'));