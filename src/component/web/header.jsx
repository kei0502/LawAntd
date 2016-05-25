import React from 'react';
import {Row, Col, Icon} from 'antd';
const Header = React.createClass({
    render(){
        return (<Row>
            <Col span={16} offset={4}><h1 style={{fontSize:36,lineHeight:"3"}}><Icon type="like"/> 法务平台</h1></Col>
        </Row>)
    }
});
export default Header;