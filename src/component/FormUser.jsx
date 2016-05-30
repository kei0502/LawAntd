import '../common/lib';
import React from 'react';
import { Row, Col, Modal, Form, Button, Icon, Input, Select } from 'antd';
const FormItem = Form.Item;
import Common from '../common/lib';

let FormUser = React.createClass({
  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 16}
    };
    const usernameProps = getFieldProps('username', {
      rules: [
        {required: true, message: '请输入用户名'}
      ]
    });
    const nameProps = getFieldProps('name', {
      rules: [
        {required: true, message: '请输入真实姓名'}
      ]
    });
    const passwordProps = getFieldProps('password', {
      rules: [
        {required: true, message: '请输入密码'}
      ]
    });
    const typeProps = getFieldProps('type', {
      rules: [
        {required: true, type:'number', message: '请选择用户类型'}
      ]
    });

    return (
        <Form horizontal form={this.props.form}>
          <FormItem {...formItemLayout}
                    label="用户名：" required>
            <Input {...usernameProps} type="text" placeholder="用户名"/>
          </FormItem>
          <FormItem {...formItemLayout}
                    label="真实姓名：" required>
            <Input {...nameProps} type="text" placeholder="真实姓名"/>
          </FormItem>
          <FormItem {...formItemLayout}
                    label="密码：" required>
            <Input {...passwordProps} type="password" placeholder="密码"/>
          </FormItem>
          <FormItem {...formItemLayout}
              label="类型：">
            <Select id="select" {...typeProps}>
              {Common.roles.map((role,i)=>(
              <Select.Option key={i} value={i+1}>{role}</Select.Option>))}
            </Select>
          </FormItem>
        </Form>
    );
  }
});
FormUser = Form.create()(FormUser);
export default FormUser;
