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
            let claim = this.props.claim;
            return {
                disabled: this.props.disabled,
                name: claim.name,
                representative: claim.representative,
                phoneRepresentative: claim.phone_representative,
                phone: claim.phone,
                fax: claim.fax,
                address3: claim.address3,
                address: claim.address,
                reason: claim.reason,
                fileList: claim.file ? [{uid: -1, name: claim._id + "_file.pdf", status: "done", url: claim.file}] : [],
                guaranteed: !!claim.guarantee,
                guaranteedName: claim.guarantee ? claim.guarantee.name : undefined,
                guaranteedMoney: claim.guarantee ? claim.guarantee.money : 0,
                guaranteedStyle: claim.guarantee ? claim.guarantee.style : 1,
                judged: !!claim.judge,
                judgedMoney: claim.judge ? claim.judge.money : 0,
                judgedFileList: claim.judge ? [{
                    uid: -1,
                    name: claim._id + "_judge.pdf",
                    status: "done",
                    url: claim.judge.file
                }] : [],
                rule: claim.rule,
                claimType: claim.claim_type,
                currency: claim.currency,
                principal: claim.principal,
                interestCalculate: claim.interest ? claim.interest.calculate : 0,
                interestStart: claim.interestStart,
                claimInformation: claim.claim_information,
                attachmentName: undefined,
                attachmentStyle: 1,
                attachmentList: claim.attachments.map((attachment, i)=>({
                    uid: -1 - i,
                    name: attachment.name,
                    status: "done",
                    url: attachment.file
                }))
            };
        } else {
            return {
                disabled: false,
                name: undefined,
                representative: undefined,
                phoneRepresentative: undefined,
                phone: undefined,
                fax: undefined,
                address3: [],
                address: undefined,
                reason: undefined,
                fileList: [],
                guaranteed: false,
                guaranteedName: undefined,
                guaranteedMoney: 0,
                guaranteedStyle: 1,
                judged: false,
                judgedMoney: 0,
                judgedFileList: [],
                rule: false,
                claimType: 1,
                currency: mock.currencies[0]._id,
                principal: 0,
                interestCalculate: 0,
                interestStart: this.props.interestEnd,
                claimInformation: undefined,
                attachmentName: undefined,
                attachmentStyle: 1,
                attachmentList: []
            };
        }
    },
    handleOk(){
        this.props.close();
    },
    handleCancel(){
        this.props.close();
    },
    disabledDate(current) {
        return current && (current.getTime() > Date.now() || moment(this.props.interestEnd).isBefore(current));
    },
    handleChangeEvent(name){
        return e=> {
            let state = {};
            state[name] = e.target.value;
            this.setState(state);
        };
    },
    handleChangeValue(name) {
        return value=> {
            let state = {};
            state[name] = value;
            this.setState(state);
        };
    },
    handleEdit() {
        this.setState({disabled: false});
    },
    handleFileChange(name){
        return info=> {
            let fileList = info.fileList;
            let state = {};
            state[name] = fileList.slice(-1);
            this.setState(state);
        };
    },
    handleAttachmentChange(info){
        let fileList = info.fileList;
        if (fileList.length === this.state.attachmentList.length + 1) {
            fileList[fileList.length - 1].name = this.state.attachmentName;
            this.setState({attachmentList: fileList, attachmentName: undefined});
        } else {
            this.setState({attachmentList: fileList});
        }
    },
    componentWillReceiveProps(props) {
        if (props.claim) {
            let claim = props.claim;
            this.setState({
                disabled: props.disabled,
                name: claim.name,
                representative: claim.representative,
                phoneRepresentative: claim.phone_representative,
                phone: claim.phone,
                fax: claim.fax,
                address3: claim.address3,
                address: claim.address,
                reason: claim.reason,
                fileList: claim.file ? [{uid: -1, name: claim._id + "_file.pdf", status: "done", url: claim.file}] : [],
                guaranteed: !!claim.guarantee,
                guaranteedName: claim.guarantee ? claim.guarantee.name : undefined,
                guaranteedMoney: claim.guarantee ? claim.guarantee.money : 0,
                guaranteedStyle: claim.guarantee ? claim.guarantee.style : 1,
                judged: !!claim.judge,
                judgedMoney: claim.judge ? claim.judge.money : 0,
                judgedFileList: claim.judge ? [{
                    uid: -1,
                    name: claim._id + "_judge.pdf",
                    status: "done",
                    url: claim.judge.file
                }] : [],
                rule: claim.rule,
                claimType: claim.claim_type,
                currency: claim.currency,
                principal: claim.principal,
                interestCalculate: claim.interest ? claim.interest.calculate : 0,
                interestStart: claim.interest ? claim.interest.start : props.interestEnd,
                claimInformation: claim.claim_information,
                attachmentName: undefined,
                attachmentStyle: 1,
                attachmentList: claim.attachments.map((attachment, i)=>({
                    uid: -1 - i,
                    name: attachment.name,
                    status: "done",
                    url: attachment.file
                }))
            });
        } else {
            this.setState({
                disabled: false,
                name: undefined,
                representative: undefined,
                phoneRepresentative: undefined,
                phone: undefined,
                fax: undefined,
                address3: [],
                address: undefined,
                reason: undefined,
                fileList: [],
                guaranteed: false,
                guaranteedName: undefined,
                guaranteedMoney: 0,
                guaranteedStyle: 1,
                judged: false,
                judgedMoney: 0,
                judgedFileList: [],
                rule: false,
                claimType: 1,
                currency: mock.currencies[0]._id,
                principal: 0,
                interestCalculate: 0,
                interestStart: props.interestEnd,
                claimInformation: undefined,
                attachmentName: undefined,
                attachmentStyle: 1,
                attachmentList: []
            });
        }
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
        var form = (<Form horizontal form={this.props.form}>
            <FormItem {...formItemLayout} label="债权人：" required>
                <Input {...getFieldProps('name', {})} value={this.state.name}
                                                      onChange={this.handleChangeEvent("name")}
                                                      disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="法定代表人：" required>
                <Input {...getFieldProps('representative', {})} value={this.state.representative}
                                                                onChange={this.handleChangeEvent("representative")}
                                                                disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="法定代表人联系电话：" required>
                <Input {...getFieldProps('phoneRepresentative', {})} value={this.state.phoneRepresentative}
                                                                     onChange={this.handleChangeEvent("phoneRepresentative")}
                                                                     disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="联系电话：" required>
                <Input {...getFieldProps('phone', {})} value={this.state.phone}
                                                       onChange={this.handleChangeEvent("phone")}
                                                       disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="传真：">
                <Input {...getFieldProps('fax', {})} value={this.state.fax}
                                                     onChange={this.handleChangeEvent("fax")}
                                                     disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="地址：" required>
                <Cascader {...getFieldProps('address3', {})} options={chinaSelect} value={this.state.address3}
                                                             onChange={this.handleChangeValue("address3")}
                                                             disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="具体地址：" required>
                <Input {...getFieldProps('address', {})} value={this.state.address}
                                                         onChange={this.handleChangeEvent("address")}
                                                         disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="邮编：">
                <Input {...getFieldProps('postcode', {})}
                    value={this.state.address3.length>0?this.state.address3[this.state.address3.length-1]:""}
                    disabled={true}/>
            </FormItem>
            <FormItem {...formItemLayout} label="债权形成原因：" required>
                <Input {...getFieldProps('reason', {})} type="textarea" value={this.state.reason}
                                                        onChange={this.handleChangeEvent("reason")}
                                                        disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="《债权申报书》：">
                <Upload action="/" accept=".pdf" fileList={this.state.fileList}
                        onChange={this.handleFileChange("fileList")}>
                    <Button type="ghost" disabled={this.state.disabled}>
                        <Icon type="upload"/>点击上传
                    </Button>
                </Upload>
            </FormItem>
            <FormItem {...formItemLayout} label="债权担保：" required>
                <RadioGroup {...getFieldProps('guaranteed', {})} value={this.state.guaranteed}
                                                                 onChange={this.handleChangeEvent("guaranteed")}
                                                                 disabled={this.state.disabled}>
                    <Radio key="false" value={false}>无</Radio>
                    <Radio key="true" value={true}>有</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem {...formItemLayout} label="担保人名称：" style={this.state.guaranteed?{}:{display:"none"}} required>
                <Input {...getFieldProps('guaranteedName', {})} value={this.state.guaranteedName}
                                                                onChange={this.handleChangeEvent("guaranteedName")}
                                                                disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="担保金额：" style={this.state.guaranteed?{}:{display:"none"}} required>
                <InputNumber {...getFieldProps('guaranteedMoney', {})} min={0} step={0.01}
                                                                       value={this.state.guaranteedMoney}
                                                                       onChange={this.handleChangeValue("guaranteedMoney")}
                                                                       disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="担保形式：" style={this.state.guaranteed?{}:{display:"none"}} required>
                <RadioGroup {...getFieldProps('guaranteedStyle', {})} value={this.state.guaranteedStyle}
                                                                      onChange={this.handleChangeEvent("guaranteedStyle")}
                                                                      disabled={this.state.disabled}>
                    <Radio key="1" value={1}>保证</Radio>
                    <Radio key="2" value={2}>抵押</Radio>
                    <Radio key="3" value={3}>质押</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem {...formItemLayout} label="判决、裁定或仲裁：" required>
                <RadioGroup {...getFieldProps('judged', {})} value={this.state.judged}
                                                             onChange={this.handleChangeEvent("judged")}
                                                             disabled={this.state.disabled}>
                    <Radio key="false" value={false}>无</Radio>
                    <Radio key="true" value={true}>有</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem {...formItemLayout} label="诉讼/保全/执行费：" style={this.state.judged?{}:{display:"none"}} required>
                <InputNumber {...getFieldProps('judgedMoney', {})} min={0} step={0.01}
                                                                   value={this.state.judgedMoney}
                                                                   onChange={this.handleChangeValue("judgedMoney")}
                                                                   disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="裁决凭证：" style={this.state.judged?{}:{display:"none"}} required>
                <Upload action="/" accept=".pdf" name="judgedFile" fileList={this.state.judgedFileList}
                        onChange={this.handleFileChange("judgedFileList")}>
                    <Button type="ghost" disabled={this.state.disabled}>
                        <Icon type="upload"/>点击上传
                    </Button>
                </Upload>
            </FormItem>
            <FormItem {...formItemLayout} label="申请执行及裁定：" required>
                <RadioGroup {...getFieldProps('rule', {})} value={this.state.rule}
                                                           onChange={this.handleChangeEvent("rule")}
                                                           disabled={this.state.disabled}>
                    <Radio key="false" value={false}>无</Radio>
                    <Radio key="true" value={true}>有</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem {...formItemLayout} label="债权类型：" required>
                <RadioGroup {...getFieldProps('claimType', {})} value={this.state.claimType}
                                                                onChange={this.handleChangeEvent("claimType")}
                                                                disabled={this.state.disabled}>
                    {claimRadios}
                </RadioGroup>
            </FormItem>
            <FormItem {...formItemLayout} label="币种：" required>
                <Select {...getFieldProps('currency', {})} value={this.state.currency}
                                                           onChange={this.handleChangeValue("currency")}
                                                           disabled={this.state.disabled}>
                    {currencyOptions}
                </Select>
            </FormItem>
            <FormItem {...formItemLayout} label="本金：" required>
                <InputNumber {...getFieldProps('principal', {})} min={0} step={0.01}
                                                                 value={this.state.principal}
                                                                 onChange={this.handleChangeValue("principal")}
                                                                 disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="利息计算方式：" required>
                <RadioGroup {...getFieldProps('interestCalculate', {})} value={this.state.interestCalculate}
                                                                        onChange={this.handleChangeEvent("interestCalculate")}
                                                                        disabled={this.state.disabled}>
                    {interestRadios}
                </RadioGroup>
            </FormItem>
            <FormItem {...formItemLayout} label="计息开始日期：" required
                                          style={this.state.interestCalculate?{}:{display:"none"}}>
                <DatePicker {...getFieldProps('interestStart', {})} value={this.state.interestStart}
                                                                    onChange={this.handleChangeValue("interestStart")}
                                                                    disabledDate={this.disabledDate}
                                                                    disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="计息结束日期：" style={this.state.interestCalculate?{}:{display:"none"}}>
                <DatePicker value={this.props.interestEnd} disabled={true}/>
            </FormItem>
            <FormItem {...formItemLayout} label="利息：" style={this.state.interestCalculate?{}:{display:"none"}}>
                <InputNumber step={0.01} disabled={true}
                             value={this.state.principal*this.state.interestCalculate/100}/>
            </FormItem>
            <FormItem {...formItemLayout} label="总额：">
                <InputNumber step={0.01} disabled={true}
                             value={this.state.principal*(1+this.state.interestCalculate/100)}/>
            </FormItem>
            <FormItem {...formItemLayout} label="其他：" required>
                <Input {...getFieldProps('claimInformation', {})} type="textarea"
                                                                  value={this.state.claimInformation}
                                                                  onChange={this.handleChangeEvent("claimInformation")}
                                                                  disabled={this.state.disabled}/>
            </FormItem>
            <FormItem {...formItemLayout} label="附件名称：" style={this.state.disabled?{display:"none"}:{}}>
                <Input {...getFieldProps('attachmentName', {})} value={this.state.attachmentName}
                                                                onChange={this.handleChangeEvent("attachmentName")}/>
            </FormItem>
            <FormItem {...formItemLayout} label="附件类型：" style={this.state.disabled?{display:"none"}:{}}>
                <RadioGroup {...getFieldProps('attachmentStyle', {})} value={this.state.attachmentStyle}
                                                                      onChange={this.handleChangeEvent("attachmentStyle")}>
                    {attachmentRadios}
                </RadioGroup>
            </FormItem>
            <FormItem {...formItemLayout} label="附件上传：">
                <Upload action="/" accept=".pdf" name="attachmentFile" fileList={this.state.attachmentList}
                        onChange={this.handleAttachmentChange}>
                    <Button type="ghost" disabled={this.state.disabled||!this.state.attachmentName}>
                        <Icon type="upload"/>点击上传
                    </Button>
                </Upload>
            </FormItem>
        </Form>);
        if (this.state.disabled) {
            return (<Modal visible={this.props.visible} title="债权申请" onOk={this.handleOk} onCancel={this.handleCancel}
                           footer={[<Button key="edit" size="large" type="ghost" onClick={this.handleEdit}>修改</Button>,
                           <Button key="close" size="large" type="primary" onClick={this.handleOk}>关闭</Button>]}>
                {form}
            </Modal>);
        } else {
            return (<Modal visible={this.props.visible} title="债权申请" onOk={this.handleOk} onCancel={this.handleCancel}>
                {form}
            </Modal>);
        }
    }
});
ModalClaim = Form.create()(ModalClaim);
export default ModalClaim;
