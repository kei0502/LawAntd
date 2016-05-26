import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuAgency';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Investment = React.createClass({
    render(){
        return (<Layout menu={<Menu current="investment"/>} current="investment"
                        posts={this.props.investments.map(investment=>({...investment,href:"investmentPage.html?investmentId="+investment._id}))}/>);
    }
});
ReactDOM.render(<Investment investments={mock.news}/>, document.getElementById('react-content'));