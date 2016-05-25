import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import FormVote from '../component/FormVote';
import FormVoteInput from '../component/FormVoteInput';
import FormPost from '../component/FormPost';
import FormDisclosure from '../component/FormDisclosure';
import mock from '../mock';
import moment from 'moment';
import { Row, Col, Breadcrumb, Button, Table, Modal, Tabs, Steps, Form, Radio, Icon, Input} from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
import ReactDOM from 'react-dom';
import React from 'react';

const caseTypes = ["破产清算", "强制清算", "破产重整", "自行清算"];
function getCurrentStatus(company) {
  const current = moment(), expire = moment(company.expire), voteStart = moment(company.voteStart), voteEnd = moment(company.voteEnd);
  if (company.cid == undefined || company.cid == '') { //平台审核中
    return 1;
  } else if (current.isSameOrBefore(expire, 'day')) {
    return 2;
  } else if (current.isBefore(voteStart)) {
    return 3;
  } else if (current.isSameOrBefore(voteEnd)) {
    return 4;
  } else {
    return 5;
  }
}
const CompanyCaseDetail = React.createClass({
  getInitialState(){
    return ({
      activeKey: '1',
      forms: mock.forms,
      creditorTypeVisible: false,
      distributionVisible: false,
      qaReplyVisible: false
    });
  },
  showVoteResult() {
    const columns = [{
      title: '公示',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '赞成人数',
      dataIndex: 'yPerson',
      key: 'yPersons'
    }, {
      title: '赞成金额',
      dataIndex: 'yMoney',
      key: 'yMoney'
    }, {
      title: '反对人数',
      dataIndex: 'nPerson',
      key: 'nPerson'
    }, {
      title: '反对金额',
      dataIndex: 'nMoney',
      key: 'nMoney'
    }, {
      title: '投票结果',
      dataIndex: 'result',
      key: 'result',
      render: (text, record) => {
        if (record.result == 1)
          return (<span style={{color:'#3c763d'}}>通过</span>);
        else
          return (<span style={{color:'#a94442'}}>不通过</span>);
      }
    }];
    return (<Table columns={columns} rowKey={record => record.id} dataSource={mock.voteResult} pagination={false}
                   size="small"/>);
  },
  assignVote(){
    this.setState({activeKey:'3'});
  },
  onTabChange(activeKey) {
    this.setState({ activeKey: activeKey });
  },
  showModalCloseCase(){
    Modal.confirm({
      title: '是否确认关闭该案件',
      content: '关闭后将无法修改案件任何信息',
      onOk() {
        console.log('确定');
      },
      onCancel() {
      }
    });
  },
  showBtns(status){
    if(status==1||status==2)
      return(<Button type="ghost" onClick={()=>window.location.href='/companyCaseCreate.html'}>修改案件信息</Button>);
    else if(status==3)
      return[(<Button key="btn1" type="ghost" onClick={()=>window.location.href='/companyCaseCreate.html'}>修改案件信息</Button>),
        (<Button key="btn2" type="ghost" onClick={this.assignVote}>安排投票</Button>)];
    else if(status==5)
      return(<Button type="ghost" onClick={this.showModalCloseCase}>关闭项目</Button>);
  },
  showModalAuthority(id){
    let forms=this.state.forms,that=this;
    Modal.confirm({
      title: '是否确认授权该债权人验证',
      onOk() {
        for(let i=0;i<forms.length;i++){
          if(forms[i].id==id){
            forms[i].status++;
            break;
          }
        }
        that.setState({forms:forms});
      },
      onCancel() {
      }
    });
  },
  showModalCreditorType(id){
    this.setState({creditorTypeVisible: true});
  },
  verify(id){
    //...
    window.location.href='/companyCaseVerify.html';
  },
  getFormDetail(id){
    //...
    window.location.href='/processv1.pdf';
  },
  showCreditorManage(status){
    const pagination = {
      total: this.state.forms.length
    };
    const columns = [{
      title: '债权人',
      dataIndex: 'creditor',
      key: 'creditor'
    }, {
      title: '申请状态',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        if(record.status==1)
          return "待验证";
        else if(record.status==2)
          return "待初审";
        else if(record.status==3)
          return "待终审";
        else if(record.status==4)
          return "待定性";
        else
          return "已完成";
      }
    }, {
      title: '操作',
      dataIndex: 'result',
      key: 'result',
      render: (text, record) => {
        if (record.status == 1)
          return (<Button type="ghost" onClick={()=>this.showModalAuthority(record.id)}>授权验证</Button>);
        else if(record.status==3)
          return (<Button type="ghost" onClick={()=>this.verify(record.id)}>填写审核</Button>);
        else if(record.status==4)
          return (<Button type="ghost" onClick={()=>this.showModalCreditorType(record.id)}>债权人定性</Button>);
        else if(record.status==5)
          return (<Button type="ghost" onClick={()=>this.showModalDistribution(record.id)}>分配清偿</Button>);
        else
          return (<Button type="ghost" onClick={()=>this.getFormDetail(record.id)}>查看申请</Button>);
      }
    }];
    return(
      <Table columns={columns} rowKey={record => record.id} dataSource={this.state.forms} pagination={pagination} size="middle"></Table>
    );
  },
  handleCreditorSubmit(){
    //...
    console.log(this.state.creditorTypeValue);
    this.setState({creditorTypeVisible:false});
  },
  handleCreditorCancel(){
    this.setState({creditorTypeVisible:false});
  },
  showModalQaReply(id,question){
    this.setState({qaReplyVisible: true, qaQuestion:question});
  },
  handleQaReplySubmit(){
    //...
    console.log(this.refs.qa);
    this.setState({qaReplyVisible:false});
  },
  handleQaReplyCancel(){
    this.setState({qaReplyVisible:false});
  },
  showModalDistribution(id){
    this.setState({distributionVisible: true});
  },
  handleDistributionSubmit(){
    //...
    console.log(this.refs.distributionInput);
    this.setState({distributionVisible:false});
  },
  handleDistributionCancel(){
    this.setState({distributionVisible:false});
  },
  onCreditorTypeChange(e){
    this.setState({creditorTypeValue: e.target.value});
  },
  showMeeting(status){
    if(status<=3){
      return(<FormVote persons={mock.persons}></FormVote>);
    }
    else if(status==4){
      return(<FormVoteInput></FormVoteInput>);
    }
    else if(status==5){
      return this.showVoteResult();
    }
  },
  getQATable(){
    const pagination = {
      total: mock.qas.length
    };
    const columns = [{
      title: '债权人',
      dataIndex: 'creditor',
      key: 'creditor',
      width: '15%'
    }, {
      title: '问题',
      dataIndex: 'question',
      key: 'question',
      width: '60%'
    }, {
      title: '提问时间',
      dataIndex: 'date',
      key: 'date',
      width: '15%'
    }, {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: '10%',
      render: (text, record) => {
        return (<Button type="ghost" onClick={()=>this.showModalQaReply(record.id,record.question)}>回复</Button>);
      }
    }];
    return (<Table columns={columns} rowKey={record => record.id} dataSource={mock.qas} pagination={pagination} size="middle"/>);
  },
  judgeShow(judge){
    return judge.name + "（联系方式:" + judge.phone + "）";
  },
  render() {
    let theCase = this.props.case;
    theCase.status=getCurrentStatus(theCase);
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderCompany current="menu2"/></Col>
            <Col span={20}>
              <Row style={{margin:'15px 0'}}>
                <Col span={22} offset={1}>
                  <Breadcrumb>
                    <Breadcrumb.Item>案件流程管理</Breadcrumb.Item>
                    <Breadcrumb.Item>选择案件</Breadcrumb.Item>
                    <Breadcrumb.Item>案件详情</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
              <Row style={{marginTop:'10px'}}>
                <Col span={22} offset={1}>
                  <h2>案件基本信息</h2>
                  <table border="0" style={{width:"100%",textAlign:"left",verticalAlign:"top"}}>
                    <tbody>
                    <tr>
                      <th width="15%">案件编码:</th>
                      <td width="35%">{theCase.cid}</td>
                      <th width="15%">案件类型:</th>
                      <td width="35%">{caseTypes[theCase.type - 1]}</td>
                    </tr>
                    <tr>
                      <th>统一信用代码:</th>
                      <td>{theCase.code}</td>
                      <th>公司名称:</th>
                      <td>{theCase.name}</td>
                    </tr>
                    <tr>
                      <th>法定代表人:</th>
                      <td>{theCase.representative}</td>
                      <th>财务负责人:</th>
                      <td>{theCase.cfo}</td>
                    </tr>
                    <tr>
                      <th>公司地址:</th>
                      <td colSpan="3">{theCase.address}</td>
                    </tr>
                    <tr>
                      <th>受理日期:</th>
                      <td>{theCase.create}</td>
                      <th>结算日期:</th>
                      <td>{theCase.settlement}</td>
                    </tr>
                    <tr>
                      <th>审理法院:</th>
                      <td>{theCase.courtName}</td>
                      <th>主审法官:</th>
                      <td>{this.judgeShow(this.props.case.judge)}</td>
                    </tr>
                    <tr>
                      <th>合议庭成员:</th>
                      <td>{
                          theCase.collegiates.map((collegiate, i)=> {
                            return (<span key={"collegiate_"+i}>
                              {this.judgeShow(collegiate)}<br/>
                            </span>);})
                          }
                      </td>
                      <th>书记员:</th>
                      <td>{this.judgeShow(theCase.note)}</td>
                    </tr>
                    <tr>
                      <td colSpan="4">
                        <Steps style={{marginTop: '10px'}} size="small" current={theCase.status-1}>
                          <Steps.Step key={1} title="案件审核中" description={'创建: '+theCase.create}/>
                          <Steps.Step key={2} title="债权申请中"/>
                          <Steps.Step key={3} title="债权申请截止" description={theCase.expire}/>
                          <Steps.Step key={4} title="投票中" description={<span>{theCase.voteStart}<br/>{theCase.voteEnd}</span>}/>
                          <Steps.Step key={5} title="投票结束" />
                        </Steps>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div>
                    {this.showBtns(theCase.status)}
                  </div>
                </Col>
              </Row>
              <Row style={{marginTop:'10px'}}>
                <Col span={22} offset={1}>
                  <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                    <Tabs.TabPane tab={<span><Icon type="copy" />管理债权申报</span>} key="1">{this.showCreditorManage(theCase.status)}</Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="file-text" />报告发文</span>} key="2"><FormPost persons={mock.persons}></FormPost></Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="info-circle-o" />信息披露</span>} key="3"><FormDisclosure></FormDisclosure></Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="team" />债权人会议</span>} key="4">{this.showMeeting(theCase.status)}</Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="retweet" />债权人问题</span>} key="5">{this.getQATable()}</Tabs.TabPane>
                  </Tabs>
                </Col>
              </Row>
            </Col>
          </Row>
          <Modal title="债权人定性" visible={this.state.creditorTypeVisible} onOk={this.handleCreditorSubmit} onCancel={this.handleCreditorCancel}>
            <Form horizontal>
              <FormItem
                  labelCol={{ span: 0 }}
                  wrapperCol={{ span: 2 }}>
                <RadioGroup defaultValue="1" value={this.state.creditorTypeValue} onChange={this.onCreditorTypeChange}>
                  <Radio value="1">破产清算</Radio>
                  <Radio value="2">强制清算</Radio>
                  <Radio value="3">破产重整</Radio>
                  <Radio value="4">自行清算</Radio>
                </RadioGroup>
              </FormItem>
            </Form>
          </Modal>
          <Modal title="分配清偿" visible={this.state.distributionVisible} onOk={this.handleDistributionSubmit} onCancel={this.handleDistributionCancel}>
            <Form horizontal>
              <FormItem
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 16 }}
                  label="分配金额：" required>
                <Input type="number" ref="distributionInput" placeholder="输入分配金额"/>
              </FormItem>
            </Form>
          </Modal>
          <Modal title="债权人问题回复" visible={this.state.qaReplyVisible} onOk={this.handleQaReplySubmit} onCancel={this.handleQaReplyCancel}>
            <Form horizontal>
              <FormItem
                  label="问题："
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}>
                <p className="ant-form-text" id="question">{this.state.qaQuestion}</p>
              </FormItem>
              <FormItem
                  label="回复："
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}>
                <Input type="textarea" ref="replyTextArea" rows="3" />
              </FormItem>
            </Form>
          </Modal>
        </div>
    );
  }
});

ReactDOM.render(<CompanyCaseDetail user={mock.creditor}
                                   case={mock.companies[4]}/>, document.getElementById('react-content'));
