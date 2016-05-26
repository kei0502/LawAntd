import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuService';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Auction = React.createClass({
    render(){
        return (<Layout menu={<Menu current="auction"/>} current="auction" showDate
                        posts={this.props.auctions.map(auction=>({...auction,href:"auctionPage.html?auctionId="+auction._id}))}/>);
    }
});
ReactDOM.render(<Auction auctions={mock.news}/>, document.getElementById('react-content'));