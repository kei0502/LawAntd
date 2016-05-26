import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Carousel, Icon} from 'antd';
import Header from '../component/web/Header';
import Footer from '../component/web/Footer'
import mock from '../mock'
const Index = React.createClass({
    render(){
        return (<div>
            <Header />
            <Row><Col span={16} offset={4}>
                <Carousel autoplay>
                    {mock.homepage_ad.map((ad, i)=>(
                        <div key={ad._id}><img src={ad.pic} alt={i.toString()} width="100%" height="300"/></div>))}
                </Carousel>
            </Col></Row>
            <Footer/>
        </div>);
    }
});
ReactDOM.render(<Index/>, document.getElementById('react-content'));