import React from 'react';
import {Row, Col} from 'antd';
import Header from './Header';
import Footer from './Footer';
import PostList from './PostList';
const Layout = React.createClass({
    render(){
        return (<div>
            <Header current={this.props.current}/>
            <Row>
                <Col span={3} offset={4} style={{marginTop:"3em"}}>{this.props.menu}</Col>
                <Col span={12} offset={1}><PostList showDate={this.props.showDate} posts={this.props.posts}/></Col>
            </Row>
            <Footer/>
        </div>);
    }
});
export default Layout;