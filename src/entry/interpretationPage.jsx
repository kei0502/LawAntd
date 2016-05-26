import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../component/web/MenuRule';
import Layout from '../component/web/PostLayoutWithMenu';
import getQueryParams from '../common/getQueryParams';
import mock from '../mock';
const Interpretation = React.createClass({
    render(){
        return (<Layout menu={<Menu current="interpretation"/>} current="interpretation" post={this.props.interpretation}/>);
    }
});
const interpretationId = getQueryParams(location.search)['interpretationId'];
var interpretation;
for (let i = 0; i < mock.news.length; i++) {
    if (mock.news[i]._id === interpretationId) {
        interpretation = mock.news[i];
        break;
    }
}
ReactDOM.render(<Interpretation interpretation={interpretation}/>, document.getElementById('react-content'));