import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuRule';
import Layout from '../component/web/PostListLayoutWithMenu';
import mock from '../mock';
const Interpretation = React.createClass({
    render(){
        return (<Layout menu={<Menu current="interpretation"/>} current="interpretation"
                        posts={this.props.interpretations.map(interpretation=>({...interpretation,href:"interpretationPage.html?interpretationId="+interpretation._id}))}/>);
    }
});
ReactDOM.render(<Interpretation interpretations={mock.news}/>, document.getElementById('react-content'));