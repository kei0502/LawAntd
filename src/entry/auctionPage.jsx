import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuService';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Auction = React.createClass({
    render(){
        return (<Layout menu={<Menu current="auction"/>} current="auction" post={this.props.auction} showDate/>);
    }
});
const auctionId = getQueryParams(location.search)['auctionId'];
var auction;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === auctionId) {
        auction = mock.news[i];
        break;
    }
}
ReactDOM.render(<Auction auction={auction}/>, document.getElementById('react-content'));