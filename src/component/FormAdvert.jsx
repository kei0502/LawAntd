import '../common/lib';
import React from 'react';
import { Row, Col, Modal, Form, Button, Icon, Input, Select } from 'antd';
const FormItem = Form.Item;

let FormAdvert = React.createClass({
  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 16}
    };
    const nameProps = getFieldProps('mobile', {
      rules: [
        {required: true, message: '请输入律师名字'}
      ]
    });
    const phoneProps = getFieldProps('phone', {
      rules: [
        {required: true, message: '请输入律师联系方式'}
      ]
    });

    return (
        <Form horizontal form={this.props.form}>
          <FormItem {...formItemLayout}
                    label="律师名称：" required>
            <Input {...nameProps} type="text" placeholder="律师名称"/>
          </FormItem>
          <FormItem {...formItemLayout}
                    label="联系方式：" required>
            <Input {...phoneProps} type="text" placeholder="联系方式"/>
          </FormItem>
          <FormItem {...formItemLayout}
              label="简介：">
            <Input {...getFieldProps('description')} type="textarea" rows={3} placeholder="一句话简介"/>
          </FormItem>
        </Form>
    );
  }
});
FormAdvert = Form.create()(FormAdvert);
export default FormAdvert;
