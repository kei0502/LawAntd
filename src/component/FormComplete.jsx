import React from 'react';
import {Form, Input, Button, Modal} from 'antd';
const FormItem = Form.Item;
let FormComplete = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((errors, values) => {
            console.log(values);
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            console.log("submit:" + values);
            Modal.confirm({
                title: "确认开通案件", content: "开通案件后债权人可以开始进行债权申报", onOk: ()=> {
                    this.props.onSubmit();
                }, onCancel(){
                }
            });
        });
    },
    render(){
        const formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 16}};
        const {getFieldProps}=this.props.form;
        const phoneProps = getFieldProps('phone', {
            rules: [{
                required: true,
                whitespace: true,
                message: '请填写债权申报咨询电话'
            }]
        });
        return (<Form horizontal form={this.props.form}>
            <FormItem {...formItemLayout} label="债权申报咨询电话">
                <Input {...phoneProps} placeholder="债权申报咨询电话"/>
            </FormItem>
            <FormItem wrapperCol={{span:16,offset:6}}>
                <Button type="primary" onClick={this.handleSubmit}>开通案件</Button>
            </FormItem>
        </Form>);
    }
});
FormComplete = Form.create()(FormComplete);
export default FormComplete;