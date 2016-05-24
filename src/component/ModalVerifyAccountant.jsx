import React from 'react';
import {Modal, Form, Input, Upload, Row, Col, Select, Icon, Button} from 'antd';
const OptGroup = Select.OptGroup;
const attachmentStyles = ["申报书", "证明材料", "其他"];
let ModalVerifyAccountant = React.createClass({
    getInitialState(){
        return {src: this.props.claim ? ("generatedFile " + this.props.claim.generatedFile) : undefined, fileList: []};
    },
    componentWillReceiveProps(props) {
        this.setState({src: props.claim ? ("generatedFile " + props.claim.generatedFile) : undefined, fileList: []});
    },
    handleSelectChange(value){
        this.setState({src: value});
    },
    handleUploadChange(info){
        let fileList = info.fileList;
        if (fileList.length > 1) {
            fileList = fileList.slice(-1);
        }
        this.setState({fileList: fileList});
    },
    handleSubmit(cb){
        return ()=> {
            this.props.form.validateFields((errors, values)=> {
                if (!errors) {
                    cb({verify: values.verify, file: this.state.fileList.length > 0 ? "/processv1.pdf" : undefined});
                }
            })
        }
    },
    render(){
        if (this.props.claim) {
            const claim = this.props.claim, {getFieldProps}=this.props.form;
            const verifyProps = getFieldProps('verify', {
                trigger: ['onBlur'],
                rules: [{required: true, whitespace: true}]
            });
            const formItemLayout = {labelCol: {span: 6}, wrapperCol: {span: 18}};
            return (<Modal title="审核" width={960} visible={this.props.visible} onCancel={this.props.close}
                           onOk={this.handleSubmit(this.props.handleSubmit)}>
                <Row>
                    <Col span={15}>
                        <div className="ant-form-item">
                            <Select size="large" value={this.state.src} onChange={this.handleSelectChange}
                                    style={{width:"100%"}}>
                                <Option value={"generatedFile "+claim.generatedFile}>债权申请表</Option>
                                {claim.file ? <Option value={"file "+claim.file}>债权申报书</Option> : undefined}
                                {claim.judge ? <Option value={"judgedFile "+claim.judge.file}>裁决凭证</Option> : undefined}
                                <OptGroup label="附件">
                                    {claim.attachments.slice(0).sort((a, b)=>(a.style - b.style)).map((attachment, i)=>(
                                        <Option key={i.toString()} value={i.toString()+" "+attachment.file}>
                                            {attachmentStyles[attachment.style - 1] + "——" + attachment.name}
                                        </Option>))}
                                </OptGroup>
                            </Select>
                        </div>
                        <iframe src={this.state.src.split(" ")[1]} height="600" width="100%" frameborder="0" seamless/>
                    </Col>
                    <Col span={9}>
                        <Form horizontal form={this.props.form}>
                            <Form.Item {...formItemLayout} label="审核意见：" hasFeedback required>
                                <Input {...verifyProps} type="textarea" placeholder="请填写审核意见"/>
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="审核报告：">
                                <Upload fileList={this.state.fileList} action="/" onChange={this.handleUploadChange}>
                                    <Button type="ghost"><Icon type="upload"/> 点击上传</Button>
                                </Upload>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Modal>);
        } else {
            return null;
        }
    }
});
ModalVerifyAccountant = Form.create()(ModalVerifyAccountant);
export default ModalVerifyAccountant;