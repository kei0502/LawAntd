import '../common/lib';
import React from 'react';
import { Row, Col, Form, Cascader, Input, Button, Radio, DatePicker, Upload, Icon, Table, Select, Transfer } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

let FormVote = React.createClass({
  getInitialState() {
    return({
      voters: []
    });
  },
  handleSubmit(e) {
    e.preventDefault();

    console.log(this.props.form.getFieldValue('voters'));
    if(this.props.isModal&&this.props.isModal=='true')
      this.props.onCancel();
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
  remove(e,key) { //删除投票人
    e.preventDefault();
    let voters = this.state.voters;
    for(let i=0;i<voters.length;i++){
      if(voters[i].key==key)
          voters.splice(i,1);
    }
    this.props.form.setFieldsValue({voters:voters});
    this.setState({voters:voters});
  },
  add() { //添加投票人
    const { form } = this.props;
    form.validateFields(['voterName','voterResult'],(errors,values)=> {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      let voters = this.state.voters;
      voters.push({key:new Date().getTime(),name:form.getFieldValue('voterName'),result:form.getFieldValue('voterResult')});
      form.setFieldsValue({voterName:undefined,voterResult:undefined,voters:voters});
    });
  },
  getSubmitBtn(){
    if(!(this.props.isModal&&this.props.isModal=='true')) {
      return (
        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: '24px' }}>
          <Button type="primary" htmlType="button" onClick={this.handleSubmit}>确定</Button>
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
    const voterNameProps = getFieldProps('voterName', {
      rules: [
        {required: true, message: '请输入线下投票人的姓名'}
      ]
    });
    const voterResultProps = getFieldProps('voterResult', {
      rules: [
        {required: true, message: '请输入线下投票人的结果'}
      ]
    });
    const columns = [{
      title: '债权人',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '投票结果',
      dataIndex: 'result',
      key: 'result'
    },{
      title: '操作',
      key: 'operation',
      render: (text, record) => (
          <span>
            <a href="#">修改</a>
            <span className="ant-divider"></span>
            <a href="#" onClick={(e)=>this.remove(e,record.key)}>删除</a>
          </span>
      )
    }];
    return (
        <Form horizontal form={this.props.form}>
          <FormItem
              {...formItemLayout}
              label="线下投票结果：">
          </FormItem>
          <Row>
            <Col span={16} offset={6} style={{marginTop:'-58px'}}>
              <Table {...getFieldProps('voters')} columns={columns} dataSource={this.state.voters} pagination={false} size="middle"/>
            </Col>
          </Row>
          <Row style={{marginTop:'15px'}}>
            <Col span={16}>
              <FormItem
                  labelCol={{span: 9}}
                  wrapperCol={{span: 9}}
                  label="添加线下结果：" hasFeedback>
                <Input type="text" {...voterNameProps} placeholder="姓名"/>
              </FormItem>
            </Col>
            <Col span={7} pull={3}>
              <FormItem
                  labelCol={{span: 0}}
                  wrapperCol={{span: 24}}>
                <RadioGroup {...voterResultProps}>
                  <Radio value="1">同意</Radio>
                  <Radio value="2">不同意</Radio>
                </RadioGroup>
              </FormItem>
            </Col>
            <Col span={1} pull={3}>
              <Button onClick={() => {this.add();}}>添加</Button>
            </Col>
          </Row>
          <FormItem
              label="现场材料："
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}>
            <Upload name="logo" action="" listType="pdf" onChange={this.handleUpload} beforeUpload={this.beforeUpload}
                {...getFieldProps('upload', {
                  valuePropName: 'fileList',
                  normalize: this.normFile
                })}
            >
              <Button type="ghost">
                <Icon type="upload"/> 点击上传
              </Button>
            </Upload>
          </FormItem>
          {this.getSubmitBtn()}
        </Form>
    );
  }
});
FormVote = Form.create()(FormVote);
export default FormVote;
