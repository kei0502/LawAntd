import React from 'react';
import {Modal} from 'antd';
const ModalPreClaim = React.createClass({
    render(){
        return (<Modal title="平台使用协议" visible={this.props.visible} onOk={this.props.handleOk}
                       onCancel={this.props.handleCancel}>
            <p>点击确定将意味着...</p>
        </Modal>);
    }
});
export default ModalPreClaim;