import '../common/lib';
import React from 'react';
import { Row, Col, Form, Cascader, Input, Button, Radio, DatePicker, Icon } from 'antd';
const FormItem = Form.Item;

let FormVerfiy = React.createClass({
  getVerfiy(label,text) {
    if(text){
      return(
        <FormItem
        label={label}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}>
          <p className="ant-form-text">{text}</p>
        </FormItem>
      );
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log("submit:" + values);
    });
  },
  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const verifyProps = getFieldProps('verfiy', {
      rules: [
        {required: true, message: '请输入最终审核意见'}
      ]
    });
    return (
        <Form horizontal form={this.props.form}>
          {this.getVerfiy('公司意见：', this.props.companyVerify)}
          {this.getVerfiy('会计意见：', this.props.accountVerify)}
          <FormItem
              label="最终意见："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}>
            <Input type="textarea" placeholder="最终审核意见" rows="10"  {...verifyProps} />
          </FormItem>
          <Row>
            <Col span="16" offset="6">
              <Button type="primary" onClick={this.handleSubmit}>确定</Button>
            </Col>
          </Row>
        </Form>
    );
  }
});
FormVerfiy = Form.create()(FormVerfiy);
export default FormVerfiy;
