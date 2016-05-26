import React from 'react';
import {Row, Col} from 'antd';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';
const Layout = React.createClass({
    render(){
        return (<div>
            <Header current={this.props.current}/>
            <Row>
                <Col span={3} offset={4} style={{marginTop:"3em"}}>{this.props.menu}</Col>
                <Col span={12} offset={1}><Post showDate={this.props.showDate} post={this.props.post}/></Col>
            </Row>
            <Footer/>
        </div>);
    }
});
export default Layout;