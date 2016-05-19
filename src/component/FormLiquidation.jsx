import '../common/lib';
import React from 'react';
import { Row, Col, Form, Cascader, Input, Button, Radio, DatePicker, Upload, Icon, Table, Select, Transfer } from 'antd';
const FormItem = Form.Item;

let FormLiquidation = React.createClass({
  getInitialState() {
    return({
      members: [],
      targetKeys: []
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    //this.props.form.validateFieldsAndScroll((errors, values) => {
    //  console.log(values);
    //  if (!!errors) {
    //    console.log('Errors in form!!!');
    //    return;
    //  }
    //  console.log("submit:" + values);
    //  this.props.onSubmit();
    //});
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
  remove(e,key) { //删除成员
    e.preventDefault();
    let members = this.state.members;
    for(let i=0;i<members.length;i++){
      if(members[i].key==key)
          members.splice(i,1);
    }
    this.setState({members:members});
  },
  add() { //添加成员
    const { form } = this.props;
    form.validateFields(['memberName','memberMobile'],(errors,values)=> {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      let members = this.state.members;
      members.push({key:new Date().getTime(),name:form.getFieldValue('memberName'),mobile:form.getFieldValue('memberMobile')});
      form.setFieldsValue({memberName:undefined,memberMobile:undefined});
    });
  },
  assign() {
    let members = this.state.members,target = this.state.targetKeys;
    target=target.sort();
    let p=0;
    for(let i=0;i<members.length&&p<target.length;i++){
      if(members[i].key==target[p]){
        members[i].authority=this.props.form.getFieldValue('authoritySelect');
        p++;
      }
    }
    this.setState({members:members,targetKeys:[]});
  },
  handleChange(targetKeys, direction, moveKeys) { //分配权限穿梭框
    this.setState({ targetKeys:targetKeys });
  },
  render() {
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 16}
    };
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const supervisorProps = getFieldProps('supervisor', {
      rules: [
        {required: true, message: '请输入管理人负责人的姓名'}
      ]
    });
    const memberNameProps = getFieldProps('memberName', {
      rules: [
        {required: true, message: '请输入新成员的姓名'}
      ]
    });
    const memberMobileProps = getFieldProps('memberMobile', {
      rules: [
        {required: true, message: '请输入新成员的联系方式'}
      ]
    });
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '联系方式',
      dataIndex: 'mobile',
      key: 'mobile'
    }, {
      title: '权限',
      dataIndex: 'authority',
      key: 'authority',
      render: (text, record) => {
        if(record.authority=='1') return '律师';
        else if(record.authority=='2') return '会计师';
        else if(record.authority=='3') return '法院法官';
      }
    }, {
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
              label="管理人负责人：" required>
            <Input {...supervisorProps} type="text" placeholder="管理人负责人姓名"/>
          </FormItem>
          <FormItem
              {...formItemLayout}
              label="成员信息：" required>
          </FormItem>
          <Row>
            <Col span={16} offset={6} style={{marginTop:'-58px'}}>
              <Table columns={columns} dataSource={this.state.members} size="middle"/>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <FormItem
                  labelCol={{span: 9}}
                  wrapperCol={{span: 9}}
                  label="添加成员：" hasFeedback>
                <Input type="text" {...memberNameProps} placeholder="姓名"/>
              </FormItem>
            </Col>
            <Col span={6} pull={3}>
              <FormItem
                  labelCol={{span: 0}}
                  wrapperCol={{span: 24}} hasFeedback>
                <Input type="text" {...memberMobileProps} placeholder="联系方式"/>
              </FormItem>
            </Col>
            <Col span={2} pull={2}>
              <Button onClick={() => {this.add();}}>添加</Button>
            </Col>
          </Row>
          <FormItem
              {...formItemLayout}
              label="分配权限：">
            <Row>
              <Col span={6}>
                <Select {...getFieldProps('authoritySelect')}>
                  <Option value="1">律师</Option>
                  <Option value="2">会计师</Option>
                  <Option value="3">法院法官</Option>
                </Select>
              </Col>
              <Col span={2} offset={1}>
                <Button type="ghost" onClick={this.assign}>分配</Button>
              </Col>
            </Row>
          </FormItem>
          <Row style={{marginTop:'-10px',marginBottom:'20px'}}>
            <Col span={16} offset={6}>
              <Transfer
                  dataSource={this.state.members}
                  targetKeys={this.state.targetKeys}
                  onChange={this.handleChange}
                  render={item => item.name}
                  titles={["所有成员","权限成员"]} />
            </Col>
          </Row>
          <FormItem
              label="成员材料："
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
          <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: '24px' }}>
            <Button type="primary" htmlType="button" onClick={this.handleSubmit}>确定</Button>
          </FormItem>
        </Form>
    );
  }
});
FormLiquidation = Form.create()(FormLiquidation);
export default FormLiquidation;
