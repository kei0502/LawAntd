import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuService';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Train = React.createClass({
    render(){
        return (<Layout menu={<Menu current="train"/>} current="train" post={this.props.train} showDate/>);
    }
});
const trainId = getQueryParams(location.search)['trainId'];
var train;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === trainId) {
        train = mock.news[i];
        break;
    }
}
ReactDOM.render(<Train train={train}/>, document.getElementById('react-content'));