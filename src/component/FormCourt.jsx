import '../common/lib';
import React from 'react';
import { Col, Form, Cascader, Input, Button } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;

const FormCourt = React.createClass({
  //省市区三级菜单
  onChange(value) {
    console.log(value);
  },
  // 省市区三级菜单只展示最后一项
  displayRender(label) {
    return label[label.length - 1];
  },
  render() {
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 16}
    };
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="审理法院：">
          <InputGroup>
            <Col span="12">
              <Cascader options={chinaSelect}
                        displayRender={this.displayRender} onChange={this.onChange}/>
            </Col>
            <Col span="12">
              <Input type="text" ref="courtName"/>
            </Col>
          </InputGroup>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="主审法官：">
          <Input type="text" ref="judgeName"/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="合议庭成员：">
          <Input type="text" ref="judgeName"/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="书记员：">
          <Input type="text" ref="noteName"/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="书记员联系方式：">
          <Input type="text" ref="noteMobile"/>
        </FormItem>
        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
    );
  }
});

export default FormCourt;
