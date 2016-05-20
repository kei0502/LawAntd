import React from 'react';
import {Modal, Form, Input, Button, Select, Radio, Cascader, Upload, Icon, InputNumber, DatePicker} from 'antd';
import chinaSelect from '../common/chinaSelect';
import mock from '../mock';
import moment from 'moment';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const claimTypes = ["工资", "税金", "无担保债权", "有担保债权"];
const interestTypes = ["无利息", "百元基数计息法", "积数计息法", "利余", "其他"];
const attachmentTypes = ["申报书", "证明材料", "其他"];
let ModalClaim = React.createClass({
    getInitialState(){
        if (this.props.claim) {
            return {
                editable: this.props.editable,
                address3: this.props.claim.address3,
                guaranteed: !!this.props.claim.guarantee,
                judged: !!this.props.claim.judge,
                principle: this.props.claim.principle,
                interestCalculate: this.props.claim.interest ? this.props.claim.interest.calculate : 0
            };
        } else {
            return {guaranteed: false, judged: false, principle: 0, interestCalculate: 0, address3: []};
        }
    },
    handleOk(){
        this.props.close();
    },
    handleCancel(){
        this.props.close();
    },
    handleAddress3Change(value){
        this.setState({address3: value});
    },
    handleGaranteedChange(e){
        this.setState({guaranteed: e.target.value});
    },
    handleJudgedChange(e){
        this.setState({judged: e.target.value});
    },
    handlePrincipleChange(value){
        this.setState({principle: value});
    },
    handleInterestCalculateChange(e) {
        this.setState({interestCalculate: e.target.value});
    },
    disabledDate(current) {
        return current && (current.getTime() > Date.now() || moment(this.props.interestEnd).isBefore(current));
    },
    handleAttachmentNameChange(e){
        this.setState({attachmentName: e.target.value});
    },
    render(){
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 16}
        };
        const {getFieldProps}=this.props.form;
        const claimRadios = claimTypes.map((claim, i)=>(<Radio key={"claim_"+(i+1)} value={i+1}>{claim}</Radio>));
        const currencyOptions = mock.currencies.map(currency=>(<Option key={currency._id} value={currency._id}>
            {currency.name + " " + currency.code + " " + (currency.rate ? currency.rate : "")}
        </Option>));
        const interestRadios = interestTypes.map((interest, i)=>(
            <Radio key={"interest_"+i} value={i}>{interest}</Radio>));
        console.log(interestRadios);
        const attachmentRadios = attachmentTypes.map((attachment, i)=>(
            <Radio key={"attachment_"+(i+1)} value={i+1}>{attachment}</Radio>));
        if (this.props.claim) {
            return (<Modal visible={this.props.visible} title="债权申请" onOk={this.handleOk}
                           onCancel={this.handleCancel}></Modal>);
        } else {
            return (<Modal visible={this.props.visible} title="债权申请" onOk={this.handleOk} onCancel={this.handleCancel}>
                <Form horizontal form={this.props.form}>
                    <FormItem {...formItemLayout} label="债权人：">
                        <Input {...getFieldProps('username', {})}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="法定代表人：">
                        <Input {...getFieldProps('representative', {})}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="法定代表人联系电话：">
                        <Input {...getFieldProps('phone_representative', {})}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="联系电话：">
                        <Input {...getFieldProps('phone', {})}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="传真：">
                        <Input {...getFieldProps('fax', {})}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="地址：">
                        <Cascader {...getFieldProps('address3', {})} options={chinaSelect} value={this.state.address3}
                                                                     onChange={this.handleAddress3Change}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="具体地址：">
                        <Input {...getFieldProps('address', {})}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="邮编：">
                        <Input {...getFieldProps('postcode', {})}
                            value={this.state.address3.length>0?this.state.address3[this.state.address3.length-1]:""}
                            disabled={true}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="债权形成原因：">
                        <Input {...getFieldProps('postcode', {})} type="textarea"/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="必要时上传《债权申报书》：">
                        <Upload action="/" accept=".pdf">
                            <Button type="ghost">
                                <Icon type="upload"/>点击上传
                            </Button>
                        </Upload>
                    </FormItem>
                    <FormItem {...formItemLayout} label="债权有无担保：">
                        <RadioGroup {...getFieldProps('garanteed', {})} value={this.state.guaranteed}
                                                                        onChange={this.handleGaranteedChange}>
                            <Radio key="false" value={false}>无</Radio>
                            <Radio key="true" value={true}>有</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem {...formItemLayout} label="担保人名称：" style={this.state.guaranteed?{}:{display:"none"}}>
                        <Input {...getFieldProps('guaranteedName', {})}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="担保金额：" style={this.state.guaranteed?{}:{display:"none"}}>
                        <InputNumber {...getFieldProps('guaranteedMoney', {})} min={0} defaultValue={0} step={0.01}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="担保形式：" style={this.state.guaranteed?{}:{display:"none"}}>
                        <RadioGroup {...getFieldProps('guaranteedStyle', {})} defaultValue={1}>
                            <Radio key="1" value={1}>保证</Radio>
                            <Radio key="2" value={2}>抵押</Radio>
                            <Radio key="3" value={3}>质押</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem {...formItemLayout} label="有无判决、裁定或仲裁裁决：">
                        <RadioGroup {...getFieldProps('judged', {})} value={this.state.judged}
                                                                     onChange={this.handleJudgedChange}>
                            <Radio key="false" value={false}>无</Radio>
                            <Radio key="true" value={true}>有</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem {...formItemLayout} label="诉讼/保全/执行费：" style={this.state.judged?{}:{display:"none"}}>
                        <InputNumber {...getFieldProps('judgedMoney', {})} min={0} defaultValue={0} step={0.01}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="裁决凭证：" style={this.state.judged?{}:{display:"none"}}>
                        <Upload action="/" accept=".pdf" name="judgedFile">
                            <Button type="ghost">
                                <Icon type="upload"/>点击上传
                            </Button>
                        </Upload>
                    </FormItem>
                    <FormItem {...formItemLayout} label="有无申请执行及裁定：">
                        <RadioGroup {...getFieldProps('rule', {})} defaultValue={false}>
                            <Radio key="false" value={false}>无</Radio>
                            <Radio key="true" value={true}>有</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem {...formItemLayout} label="债权类型：">
                        <RadioGroup {...getFieldProps('claimType', {})} defaultValue={1}>{claimRadios}</RadioGroup>
                    </FormItem>
                    <FormItem {...formItemLayout} label="币种：">
                        <Select {...getFieldProps('currency', {})} defaultValue={mock.currencies[0]._id}>
                            {currencyOptions}
                        </Select>
                    </FormItem>
                    <FormItem {...formItemLayout} label="本金：">
                        <InputNumber {...getFieldProps('principle', {})} min={0} value={this.state.principle}
                                                                         step={0.01}
                                                                         onChange={this.handlePrincipleChange}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="利息计算方式：">
                        <RadioGroup {...getFieldProps('interestCalculate', {})} value={this.state.interestCalculate}
                                                                                onChange={this.handleInterestCalculateChange}>
                            {interestRadios}
                        </RadioGroup>
                    </FormItem>
                    <FormItem {...formItemLayout} label="计息开始日期：">
                        <DatePicker {...getFieldProps('interestStart', {})} defaultValue={new Date()}
                                                                            disabledDate={this.disabledDate}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="计息结束日期：">
                        <DatePicker defaultValue={this.props.interestEnd} disabled={true}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="利息：">
                        <InputNumber step={0.01} disabled={true}
                                     value={this.state.principle*this.state.interestCalculate/100}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="总额：">
                        <InputNumber step={0.01} disabled={true}
                                     value={this.state.principle*(1+this.state.interestCalculate/100)}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="其他：">
                        <Input {...getFieldProps('claimInformation', {})} type="textarea"/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="附件名称：">
                        <Input {...getFieldProps('attachmentName', {})} value={this.state.attachmentName}
                                                                        onChange={this.handleAttachmentNameChange}/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="附件类型：">
                        <RadioGroup {...getFieldProps('attachmentStyle', {})} defaultValue={1}>
                            {attachmentRadios}
                        </RadioGroup>
                    </FormItem>
                    <FormItem {...formItemLayout} label="附件上传：" style={this.state.attachmentName?{}:{display:"none"}}>
                        <Upload action="/" accept=".pdf" name="attachmentFile">
                            <Button type="ghost">
                                <Icon type="upload"/>点击上传
                            </Button>
                        </Upload>
                    </FormItem>
                </Form>
            </Modal>);
        }
    }
});
ModalClaim = Form.create()(ModalClaim);
export default ModalClaim;
