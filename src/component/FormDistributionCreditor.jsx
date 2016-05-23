import React from 'react';
import {Form, Radio, Tag, Button} from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const responseStyles = ["知悉", "同意", "反对"];
const responseColors = [undefined, "green", "red"];
const FormResponse = React.createClass({
    getInitialState(){
        return {style: 1};
    },
    handleChange(e){
        this.setState({style: e.target.value});
    },
    getResponse(){
        return this.state.style;
    },
    render(){
        if (this.props.response) {
            var style = this.props.response - 1;
            return (<Tag color={responseColors[style]}>{responseStyles[style]}</Tag>);
        } else {
            return (<Form inline onSubmit={this.props.handleSubmit(this.getResponse)}>
                <RadioGroup value={this.state.style} onChange={this.handleChange}>
                    <Radio key="1" value={1}>知悉</Radio>
                    <Radio key="2" value={2}>同意</Radio>
                    <Radio key="3" value={3}>反对</Radio>
                </RadioGroup>
                <Button type="primary" htmlType="submit" size="small">确认</Button>
            </Form>);
        }
    }
});
export default FormResponse;