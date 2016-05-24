import '../common/lib';
import React from 'react';
import { Form, Button, Radio, Icon, TreeSelect, Upload, Select } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
import mock from '../mock';

let FormPost = React.createClass({
  getInitialState() {
    return ({
      persons: mock.persons
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
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      console.log(values);
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log("submit:" + values);
      this.props.onSubmit();
    });
  },
  handleSelectChange(value){
    //get persons
    this.props.form.setFieldsValue({"company":value});
  },
  showCompanySelect() {
    if(this.props.companies){
      let companies = this.props.companies;
      const companyProps = this.props.form.getFieldProps('company', {
        rules: [
          {required: true, message: '请选择一家债务公司'}
        ]
      });
      return(
        <FormItem
          labelCol={{span: 6}}
          wrapperCol={{span: 8}}
          label="债务公司：">
          <Select {...companyProps} size="large" defaultValue="" onChange={this.handleSelectChange}>
            <Option key="" value="">&nbsp;</Option>
            {companies.map(company=>(
            <Option key={company._id} value={company._id}>{company.name}</Option>))}
          </Select>
        </FormItem>
      );
    }
  },
  render() {
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 16}
    };
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const postPersonsProps = getFieldProps('postPersons', {
      rules: [
        {required: true, type:'array', message: '请选择一个或多个接收人'}
      ]
    });

    const treeProps = {
      treeData: this.state.persons,
      multiple: true,
      treeCheckable: true,
      treeDefaultExpandAll: true
    };
    return (
        <Form horizontal form={this.props.form}>
          {this.showCompanySelect()}
          <FormItem
              labelCol={{span: 6}}
              wrapperCol={{span: 8}}
              label="接收人：">
            <TreeSelect {...treeProps} {...postPersonsProps}/>
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="文件类型：" required>
            <RadioGroup defaultValue="2">
              <Radio value="1">审核</Radio>
              <Radio value="2">通知</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem
              label="发送文件："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }} required>
            <Upload name="logo" action="" listType="pdf" onChange={this.handleUpload} beforeUpload={this.beforeUpload}
                {...getFieldProps('upload', {
                  valuePropName: 'fileList',
                  normalize: this.normFile
                })}>
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
FormPost = Form.create()(FormPost);
export default FormPost;
