import '../common/lib';
import React from 'react';
import { Col, Form, Cascader, Input, Button } from 'antd';
const FormItem = Form.Item;
const InputGroup = Input.Group;
import chinaSelect from '../common/chinaSelect';

const FormCourt = React.createClass({
  render() {
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 16}
    };
    console.log(this.props.form);
    return (
      <Form horizontal form={this.props.form} onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="审理法院：">
          <Col span={11}>
            <Cascader options={chinaSelect} placeholder="省市区"/>
          </Col>
          <Col span={12} offset={1}>
            <Input type="text" ref="courtName" placeholder="具体地址"/>
          </Col>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="主审法官：">
          <Col span={7}>
            <Input type="text" ref="judgeName" placeholder="姓名"/>
          </Col>
          <Col span={7} offset={1}>
            <Input type="text" ref="judgePosition" placeholder="职位"/>
          </Col>
          <Col span={8} offset={1}>
            <Input type="text" ref="judgeMobile" placeholder="联系方式"/>
          </Col>
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="书记员：">
          <Col span={11}>
            <Input type="text" ref="noteName" placeholder="姓名"/>
          </Col>
          <Col span={12} offset={1}>
            <Input type="text" ref="noteMobile" placeholder="联系方式"/>
          </Col>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="合议庭成员：">
          <Input type="text" ref="collegiateName"/>
        </FormItem>
        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
    );
  }
});

export default FormCourt;
