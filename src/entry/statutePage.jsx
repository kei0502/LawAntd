import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuRule';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Statute = React.createClass({
    render(){
        return (<Layout menu={<Menu current="statute"/>} current="statute" post={this.props.statute}/>);
    }
});
const statuteId = getQueryParams(location.search)['statuteId'];
var statute;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === statuteId) {
        statute = mock.news[i];
        break;
    }
}
ReactDOM.render(<Statute statute={statute}/>, document.getElementById('react-content'));