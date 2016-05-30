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
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const startDateProps = getFieldProps('startDate', {
      rules: [
        {required: true, type:'date', message: '请选择案件受理日期'}
      ]
    });
    const endDateProps = getFieldProps('endDate', {
      rules: [
        {required: true, type:'date', message: '请选择案件申请截止日期'}
      ]
    });
    const caseContactProps = getFieldProps('caseContact', {
      rules: [
        {required: true, message: '请输入债权申报电话'}
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
              {...formItemLayout}
              label="受理日期：" required>
              <DatePicker {...startDateProps} style={{width:'36%'}} placeholder="受理日期"/>
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="申请截止日期：" required>
            <DatePicker {...endDateProps} style={{width:'36%'}} placeholder="申请截止日期"/>
          </FormItem>
          <FormItem
              labelCol={{span: 6}}
              wrapperCol={{span: 8}}
              label="债权申报电话：" required hasFeedback>
            <Input {...caseContactProps} type="text" placeholder="债权申报电话"/>
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
