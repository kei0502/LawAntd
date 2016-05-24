import '../common/lib';
import React from 'react';
import { Row, Col, Form, Cascader, Input, Button, Upload, Icon, message } from 'antd';
const FormItem = Form.Item;
import chinaSelect from '../common/chinaSelect';

let FormCourt = React.createClass({
  getInitialState() {
    return({
      collegiateNumber:1
    });
  },
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
  add() { //添加合议庭成员

    this.setState({collegiateNumber:this.state.collegiateNumber+1});
  },
  remove(k) { //删除合议庭成员
    let length=this.state.collegiateNumber;
    const { form } = this.props;
    let values={};
    for(let i=k+1;i<length;i++) {
      values['collegiateName'+(i-1)]=form.getFieldValue('collegiateName'+i);
      values['collegiateMobile'+(i-1)]=form.getFieldValue('collegiateMobile'+i);
    }
    form.setFieldsValue(values);
    this.setState({collegiateNumber:this.state.collegiateNumber-1});
  },
  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const courtPCDProps = getFieldProps('courtPCD', {
      rules: [
        {required: true, type: 'array', message: '请选择法院所在的省市区'}
      ]
    });
    const courtNameProps = getFieldProps('courtName', {
      rules: [
        {required: true, message: '请输入法院的名称'}
      ]
    });
    const judgeNameProps = getFieldProps('judgeName', {
      rules: [
        {required: true, message: '请输入主审法官的姓名'}
      ]
    });
    const judgePositionProps = getFieldProps('judgePosition', {
      rules: [
        {required: true, message: '请输入主审法官的职位'}
      ]
    });
    const judgeMobileProps = getFieldProps('judgeMobile', {
      rules: [
        {required: true, message: '请输入主审法官的联系方式'}
      ]
    });
    const noteNameProps = getFieldProps('noteName', {
      rules: [
        {required: true, message: '请输入书记员的姓名'}
      ]
    });
    const noteMobileProps = getFieldProps('noteMobile', {
      rules: [
        {required: true, message: '请输入书记员的联系方式'}
      ]
    });

    const collegiateItems = [], length = this.state.collegiateNumber;

    for (let i = 0; i < length; i++) {
      const collegiateNameProps = getFieldProps('collegiateName'+i, {
        rules: [
          {required: true, message: '请输入合议庭成员的姓名'}
        ]
      });
      const collegiateMobileProps = getFieldProps('collegiateMobile'+i, {
        rules: [
          {required: true, message: '请输入合议庭成员的姓名'}
        ]
      });
      let that=this;
      (function(i) {
          collegiateItems.push((
              <Row key={'collegiate'+i}>
                <Col span={16}>
                  <FormItem
                      labelCol={{span: 9}}
                      wrapperCol={{span: 9}}
                      label={i==0?"合议庭成员：":" "} hasFeedback>
                    <Input type="text" {...collegiateNameProps} placeholder="姓名"/>
                  </FormItem>
                </Col>
                <Col span={6} pull={3}>
                  <FormItem
                      labelCol={{span: 0}}
                      wrapperCol={{span: 24}} hasFeedback>
                    <Input type="text" {...collegiateMobileProps} placeholder="联系方式"/>
                  </FormItem>
                </Col>
                <Col span={2} pull={2}>
                  <Button onClick={() => {that.remove(i);}}>删除</Button>
                </Col>
              </Row>
          ));
      }(i));
    }
    return (
        <Form horizontal form={this.props.form}>
          <Row>
            <Col span={12}>
              <FormItem
                  labelCol={{span: 12}}
                  wrapperCol={{span: 11}}
                  label="审理法院：" required>
                <Cascader {...courtPCDProps} options={chinaSelect} placeholder="省市区"/>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                  labelCol={{span: 0}}
                  wrapperCol={{span: 20}}
                  hasFeedback>
                <Input {...courtNameProps} type="text" placeholder="名称"/>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem
                  labelCol={{span: 12}}
                  wrapperCol={{span: 9}}
                  label="主审法官：" required hasFeedback>
                <Input type="text" {...judgeNameProps} placeholder="姓名"/>
              </FormItem>
            </Col>
            <Col span={6} pull={1}>
              <FormItem
                  labelCol={{span: 0}}
                  wrapperCol={{span: 22}}
                  hasFeedback>
                <Input type="text" {...judgePositionProps} placeholder="职位"/>
              </FormItem>
            </Col>
            <Col span={6} pull={1}>
              <FormItem
                  labelCol={{span: 0}}
                  wrapperCol={{span: 20}}
                  hasFeedback>
                <Input type="text" {...judgeMobileProps} placeholder="联系方式"/>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <FormItem
                  labelCol={{span: 9}}
                  wrapperCol={{span: 11}}
                  label="书记员：" required hasFeedback>
                <Input type="text" {...noteNameProps} placeholder="姓名"/>
              </FormItem>
            </Col>
            <Col span={8} pull={2}>
              <FormItem
                  labelCol={{span: 0}}
                  wrapperCol={{span: 24}} required hasFeedback>
                <Input type="text" {...noteMobileProps} placeholder="联系方式"/>
              </FormItem>
            </Col>
          </Row>
          {collegiateItems}
          <Form.Item wrapperCol={{ span: 16, offset: 6 }}>
            <Button onClick={this.add}>新增合议庭成员</Button>
          </Form.Item>
          <FormItem
              label="法院材料："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}>
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

          <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="button" onClick={this.handleSubmit}>确定</Button>
          </FormItem>
        </Form>
    );
  }
});
FormCourt = Form.create()(FormCourt);
export default FormCourt;
