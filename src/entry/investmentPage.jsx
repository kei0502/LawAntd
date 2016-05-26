import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuAgency';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Investment = React.createClass({
    render(){
        return (<Layout menu={<Menu current="investment"/>} current="investment" post={this.props.investment}/>);
    }
});
const investmentId = getQueryParams(location.search)['investmentId'];
var investment;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === investmentId) {
        investment = mock.news[i];
        break;
    }
}
ReactDOM.render(<Investment investment={investment}/>, document.getElementById('react-content'));