import '../common/lib';
import React from 'react';
import { Col, Form, Cascader, Input, Button, Radio, DatePicker, Icon } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

let FormCase = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      console.log(values);
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log("submit:" + values);
      this.props.onSubmit();
    });
  },
  render() {
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 16}
    };
    const { getFieldProps } = this.props.form;
    const caseCodeProps = getFieldProps('caseCode', {
      rules: [
        {required: true, message: '请输入案件代码'}
      ]
    });
    const caseNameProps = getFieldProps('caseName', {
      rules: [
        {required: true, message: '请输入案件名称'}
      ]
    });
    const caseSimpleProps = getFieldProps('caseContact', {
      rules: [
        {required: true, message: '请输入案件简称'}
      ]
    });
    return (
        <Form horizontal form={this.props.form}>
          <FormItem
              {...formItemLayout}
              label="案件类型：" required>
            <RadioGroup defaultValue="1">
              <Radio value="1">破产清算</Radio>
              <Radio value="2">强制清算</Radio>
              <Radio value="3">破产重整</Radio>
              <Radio value="4">自行清算</Radio>
            </RadioGroup>
          </FormItem>
            <FormItem
                labelCol={{span: 6}}
                wrapperCol={{span: 8}}
                label="案件代码：" required hasFeedback>
                <Input {...caseCodeProps} type="text" placeholder="案件代码"/>
            </FormItem>
            <FormItem
                labelCol={{span: 6}}
                wrapperCol={{span: 8}}
                label="案件名称：" required hasFeedback>
                <Input {...caseNameProps} type="text" placeholder="案件名称"/>
            </FormItem>
          <FormItem
              labelCol={{span: 6}}
              wrapperCol={{span: 8}}
              label="案件简称：" required hasFeedback>
            <Input {...caseSimpleProps} type="text" placeholder="案件简称"/>
          </FormItem>
          <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: '24px' }}>
            <Button type="primary" htmlType="button" onClick={this.handleSubmit}>确定</Button>
          </FormItem>
        </Form>
    );
  }
});
FormCase = Form.create()(FormCase);
export default FormCase;
