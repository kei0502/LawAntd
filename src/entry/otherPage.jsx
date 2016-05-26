import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuAgency';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Other = React.createClass({
    render(){
        return (<Layout menu={<Menu current="other"/>} current="other" post={this.props.other}/>);
    }
});
const otherId = getQueryParams(location.search)['otherId'];
var other;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === otherId) {
        other = mock.news[i];
        break;
    }
}
ReactDOM.render(<Other other={other}/>, document.getElementById('react-content'));