import '../common/lib';
import React from 'react';
import { Row, Col, Modal, Form, DatePicker, TimePicker, Button, Icon, Upload, Table, Input,TreeSelect } from 'antd';
const FormItem = Form.Item;

let FormVote = React.createClass({
  getInitialState() {
    return {
      voteItems: []
    };
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
    const isPDF = file.type === 'application/pdf';
    if (!isPDF) {
      message.error('只能上传 PDF 文件哦！');
    }
    return isPDF;
  },
  remove(e, key) { //删除投票项目
    e.preventDefault();
    let voteItems = this.state.voteItems;
    for (let i = 0; i < voteItems.length; i++) {
      if (voteItems[i].key == key)
        voteItems.splice(i, 1);
    }
    this.props.form.setFieldsValue({voteItems: voteItems});
    this.setState({voteItems: voteItems});
  },
  add() { //添加投票项目
    const { form } = this.props;
    form.validateFields(['voteItemName', 'voteItemPersons', 'upload'], (errors, values)=> {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      let voteItems = this.state.voteItems;
      voteItems.push({
        key: voteItems.length,
        name: form.getFieldValue('voteItemName'),
        persons: form.getFieldValue('voteItemPersons'),
        file: form.getFieldValue('upload')
      });
      form.setFieldsValue({voteItems:voteItems, voteItemName:undefined, voteItemPersons:undefined, upload:undefined});
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields(['voteItems', 'voteStartDate', 'voteEndDate', 'voteStartTime', 'voteEndTime', 'upload'], (errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      //...
      console.log(values);
      if(this.props.isModal&&this.props.isModal=='true')
        this.props.onCancel();
    });
  },
  getAddForm(){
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 16}
    };
    const {getFieldProps} = this.props.form;
    const voteItemNameProps = getFieldProps('voteItemName', {
      rules: [
        {required: true, message: '请输入项目名称'}
      ]
    });
    const voteItemPersonsProps = getFieldProps('voteItemPersons', {
      rules: [
        {required: true, type: 'array', message: '请选择至少一个债权人'}
      ]
    });
    const treeProps = {
      treeData: this.props.persons,
      multiple: true,
      treeCheckable: true,
      treeDefaultExpandAll: true
    };
    return ([
      <FormItem key={'itemNameInput'}
          {...formItemLayout}
                label="项目名称：" required>
        <Input {...voteItemNameProps} type="text" placeholder="项目名称"/>
      </FormItem>,
      <FormItem key={'itemPersonsInput'}
          {...formItemLayout}
                label="投票债权人：" required>
        <TreeSelect {...treeProps} {...voteItemPersonsProps}/>
      </FormItem>,
      <FormItem key={'itemFilesInput'}
                label="项目文件："
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}>
        <Upload name="logo" action="" listType="pdf" onChange={this.handleUpload}
                beforeUpload={this.beforeUpload}
            {...getFieldProps('upload', {
              valuePropName: 'fileList',
              normalize: this.normFile
            })}
        >
          <Button type="ghost">
            <Icon type="upload"/> 点击上传
          </Button>
        </Upload>
      </FormItem>,
      <Row key={'itemAddButton'}>
        <Col span={16} offset={6}>
          <Button type="ghost" onClick={this.add}>添加</Button>
        </Col>
      </Row>
    ]);
  },
  getSubmitBtn(){
    if(!(this.props.isModal&&this.props.isModal=='true')){
      return(
        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: '24px' }}>
          <Button type="primary" htmlType="button" onClick={this.handleSubmit}>确定</Button>
        </FormItem>
      );
    }
  },
  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const voteStartDateProps = getFieldProps('voteStartDate', {
      rules: [
        {required: true, type: 'date', message: '请输入投票开始日期'}
      ]
    });
    const voteEndDateProps = getFieldProps('voteEndDate', {
      rules: [
        {required: true, type: 'date', message: '请输入投票结束日期'}
      ]
    });
    const voteStartTimeProps = getFieldProps('voteStartTime', {
      rules: [
        {required: true, type: 'date', message: '请输入投票开始时间'}
      ]
    });
    const voteEndTimeProps = getFieldProps('voteEndTime', {
      rules: [
        {required: true, type: 'date', message: '请输入投票结束时间'}
      ]
    });

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '所含债权人',
      dataIndex: 'persons',
      key: 'persons',
      render: (text, record) => {
        let selected = record.persons;
        let all = this.props.persons;
        let result = '';
        for (var i = 0; i < all.length; i++) {
          let t = selected.filter((x)=>x == all[i].key);
          if (t.length == 1) {
            result += '，' + all[i].label;
          }
          else {
            (function () {
              var m = arguments[0];
              for (var j = 0; j < m.length; j++) {
                let tt = selected.filter((x)=>x == m[j].key);
                if (tt.length == 1) {
                  result += '，' + m[j].label;
                }
                else if (m[j].children && m[j].children.length > 0) {
                  arguments.callee(m[j].children);//递归匿名方法
                }
              }
            })(all[i].children);
          }
        }
        return result.substr(1);
      }
    }, {
      title: '文件',
      dataIndex: 'file',
      key: 'file'
    }, {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
          <span>
            <a href="#" onClick={(e)=>this.remove(e,record.key)}>删除</a>
          </span>
      )
    }];

    return (
        <Form horizontal form={this.props.form}>
          <Row>
            <Col span={16}>
              <FormItem
                  labelCol={{span: 9}}
                  wrapperCol={{span: 9}}
                  label="投票开始时间：" required>
                <DatePicker {...voteStartDateProps} placeholder="投票开始日期"/>
              </FormItem>
            </Col>
            <Col span={8} pull={3}>
              <FormItem
                  labelCol={{span: 0}}
                  wrapperCol={{span: 24}}>
                <TimePicker {...voteStartTimeProps} placeholder="投票开始时间"/>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <FormItem
                  labelCol={{span: 9}}
                  wrapperCol={{span: 9}}
                  label="投票结束时间：" required>
                <DatePicker {...voteEndDateProps} placeholder="投票结束日期"/>
              </FormItem>
            </Col>
            <Col span={8} pull={3}>
              <FormItem
                  labelCol={{span: 0}}
                  wrapperCol={{span: 24}}>
                <TimePicker {...voteEndTimeProps} placeholder="投票结束时间"/>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <FormItem
                  labelCol={{span: 24}}
                  label="投票项目：">
              </FormItem>
            </Col>
            <Col span={16} offset={6} style={{marginTop:'-60px',marginBottom:'10px'}}>
              <Table {...getFieldProps('voteItems')} columns={columns} dataSource={this.state.voteItems} pagination={false} size="small"/>
            </Col>
          </Row>
          {this.getAddForm()}
          {this.getSubmitBtn()}
        </Form>
    );
  }
});
FormVote = Form.create()(FormVote);
export default FormVote;
