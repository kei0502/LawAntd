import React from 'react';
import {Modal, Form, Input, Upload, Button, Icon} from 'antd';
const FormItem = Form.Item;
let ModalContract = React.createClass({
    render(){
        const formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 16}};
        const {getFieldProps}=this.props.form;
        const nameProps = getFieldProps('name', {rules: [{required: true, whitespace: true, message: '请填写管理人名称'}]});
        const contractProps = getFieldProps('contract', {
            rules: [{
                required: true,
                whitespace: true,
                message: '请填写协议名称'
            }]
        });
        return (<Modal title="协议上传" visible={this.props.visible} onOk={this.props.close} onCancel={this.props.close}>
            <Form horizontal form={this.props.form}>
                <FormItem {...formItemLayout} label="管理人名称"><Input {...nameProps}/></FormItem>
                <FormItem {...formItemLayout} label="协议名称"><Input {...contractProps}/></FormItem>
                <FormItem {...formItemLayout} label="协议上传">
                    <Upload action="/">
                        <Button type="ghost"><Icon type="upload"/> 文件上传</Button>
                    </Upload>
                </FormItem>
            </Form>
        </Modal>);
    }
});
ModalContract = Form.create()(ModalContract);
export default ModalContract;