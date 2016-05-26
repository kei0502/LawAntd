import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuService';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Consult = React.createClass({
    render(){
        return (<Layout menu={<Menu current="consult"/>} current="consult" post={this.props.consult} showDate/>);
    }
});
const consultId = getQueryParams(location.search)['consultId'];
var consult;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === consultId) {
        consult = mock.news[i];
        break;
    }
}
ReactDOM.render(<Consult consult={consult}/>, document.getElementById('react-content'));