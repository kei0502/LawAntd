import '../common/lib';
import React from 'react';
import { Col, Form, Cascader, Input, Button, Radio, DatePicker, Upload, Icon } from 'antd';
const FormItem = Form.Item;

let FormDebtor = React.createClass({
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
  handleUpload() {

  },
  normFile(e) { //上传文件
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  },
  beforeUpload(file) {
    console.log(file);
    const isPDF = file.type === 'application/pdf';
    if (!isPDF) {
      message.error('只能上传 PDF 文件哦！');
    }
    return isPDF;
  },
  render() {
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 16}
    };
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const companyCodeProps = getFieldProps('companyCode', {
      rules: [
        {required: true, message: '请填写统一信用代码'}
      ]
    });
    const companyPersonProps = getFieldProps('companyPerson', {
      rules: [
        {required: true, message: '请填写债务人名称'}
      ]
    });
    const companyLegalPersonProps = getFieldProps('companyLegalPerson', {
      rules: [
        {required: true, message: '请填写法定代表人'}
      ]
    });
    const companyFinancePersonProps = getFieldProps('companyFinancePerson');
    const companyAddressProps = getFieldProps('companyAddress', {
      rules: [
        {required: true, message: '请填写住所地址'}
      ]
    });
    return (
        <Form horizontal form={this.props.form}>
          <FormItem
              {...formItemLayout}
              label="统一信用代码：" required hasFeedback>
            <Input {...companyCodeProps} type="text" placeholder="统一信用代码"/>
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="债务人名称：" required hasFeedback>
            <Input {...companyPersonProps} type="text" placeholder="债务人名称"/>
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="法定代表人：" required hasFeedback>
            <Input {...companyLegalPersonProps} type="text" placeholder="法定代表人"/>
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="财务负责人：">
            <Input {...companyFinancePersonProps} type="text" placeholder="财务负责人"/>
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="住所地址：" required hasFeedback>
              <Input {...companyAddressProps}type="text" placeholder="住所地址"/>
          </FormItem>
          <FormItem
              label="公司材料："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}>
            <Upload name="logo" action="" listType="pdf" onChange={this.handleUpload} beforeUpload={this.beforeUpload}
                {...getFieldProps('upload', {
                  valuePropName: 'fileList',
                  normalize: this.normFile
                })}
            >
              <Button type="ghost">
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>
          </FormItem>
          <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: '24px' }}>
            <Button type="primary" htmlType="button" onClick={this.handleSubmit}>确定</Button>
          </FormItem>
        </Form>
    );
  }
});
FormDebtor = Form.create()(FormDebtor);
export default FormDebtor;
