import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import FormVote from '../component/FormVote';
import FormVoteInput from '../component/FormVoteInput';
import mock from '../mock';
import moment from 'moment';
import { Row, Col, Breadcrumb, Button, Table, Select, Modal} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

function getCurrentStatus(company) {
  const current = moment(), expire = moment(company.expire), voteStart = moment(company.voteStart), voteEnd = moment(company.voteEnd);
  if (company.cid==undefined||company.cid==''){ //平台审核中
    return 1;
  } else if(current.isSameOrBefore(expire, 'day')) {
    return 2;
  } else if (current.isBefore(voteStart)) {
    return 3;
  } else if (current.isSameOrBefore(voteEnd)) {
    return 4;
  } else {
    return 5;
  }
}
const CompanyCaseList = React.createClass({
  getInitialState(){
    return({
      voteVisible:false,
      voteInputVisible: false
    });
  },
  showDetail(id) { //查看案件详情
    window.location.href='/companyCaseDetail.html';
  },
  manageApplications(id) { //管理债权申请
    window.location.href='/companyCaseDetail.html';
  },
  assignVote(id){ //安排投票
    //...
    this.showModalVote();
  },
  inputVote(id){ //输入线下投票结果
    this.showModalVoteInput();
  },
  showModalVote(){ //显示安排投票modal
    this.setState({voteVisible:true});
  },
  handleModalVoteSubmit() {
    this.refs.formVote.validateFields(['voteStartDate', 'voteEndDate','voteStartTime', 'voteEndTime', 'upload'], (errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log(values,this.refs.formVote.getFieldValue('voteItems'));
      this.setState({voteVisible: false});
    });
  },
  handleModalVoteCancel() { //关闭安排投票modal
    this.setState({voteVisible: false});
  },
  showModalVoteInput(){ //显示安排投票modal
    this.setState({voteInputVisible:true});
  },
  handleModalVoteInputSubmit() {
    console.log(this.refs.formVoteInput.getFieldValue('voters'));
    this.setState({voteInputVisible: false});
  },
  handleModalVoteInputCancel() { //关闭安排投票modal
    this.setState({voteInputVisible: false});
  },
  showModalVoteResult(id) {
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
      render:(text, record) => {
        if(record.result==1)
          return (<span style={{color:'#3c763d'}}>通过</span>);
        else
          return (<span style={{color:'#a94442'}}>不通过</span>);
      }
    }];
    Modal.info({
      width: '600px',
      title: '投票结果',
      content: (
          <Table columns={columns} rowKey={record => record.id} dataSource={mock.voteResult} pagination={false} size="small"/>
      ),
      okText: '确定'
    });
  },
  showModalCloseCase(id){
    Modal.confirm({
      title: '是否确认关闭该案件',
      content: '关闭后将无法修改案件任何信息',
      onOk() {
        console.log('确定');
      },
      onCancel() {}
    });
  },
  handleSelectChange(value){
    if(value!=0)
      this.setState({status: value});
    else
      this.setState({status: undefined});
  },
  render() {
    let cases = this.props.cases, filterState = this.state.status;
    if (filterState) {
      cases = cases.filter((x)=> {
        let status = getCurrentStatus(x);
        return status == filterState;
      });
    }
    const columns = [{
      title: '案件编码',
      dataIndex: 'cid',
      key: 'cid',
      width: '15%',
      sorter: (a, b) => a.cid>b.cid
    }, {
      title: '债务人名称',
      dataIndex: 'name',
      key: 'name',
      width: '20%'
    }, {
      title: '受理日期',
      dataIndex: 'settlement',
      key: 'settlement',
      width: '15%',
      sorter: (a, b) => Date.parse(a.settlement)-Date.parse(b.settlement)
    }, {
      title: '申请截止日期',
      dataIndex: 'expire',
      key: 'expire',
      width: '15%',
      sorter: (a, b) => Date.parse(a.expire)-Date.parse(b.expire)
    }, {
      title: '状态',
      key: 'status',
      width: '15%',
      render: (text, record) => {
        let status=getCurrentStatus(record);
        if(status==1) return '案件审核中';
        else if(status==2) return '债权申报中';
        else if(status==3) return '债权申请截止';
        else if(status==4) return '投票中';
        else if(status==5) return '投票截止';
      }
    }, {
      title: '操作',
      key: 'operation',
      width: '20%',
      render: (text, record) => {
        let status=getCurrentStatus(record);
        if(status==1) return(<Button type="ghost" size="small" onClick={()=>this.showDetail(record.key)}>详情</Button>);
        else if(status==2) return(<Button type="ghost" size="small" onClick={()=>this.manageApplications(record.key)}>管理申请</Button>);
        else if(status==3) return(<Button type="ghost" size="small" onClick={()=>this.assignVote(record.key)}>安排投票</Button>);
        else if(status==4) return(<Button type="ghost" size="small" onClick={()=>this.inputVote(record.key)}>登记线下</Button>);
        else return([<Button key="voteResultBtn" type="ghost" size="small" onClick={()=>this.showModalVoteResult(record.key)}>投票结果</Button>,
            <Button key="closeCaseBtn" type="ghost" size="small" onClick={()=>this.showModalCloseCase(record.key)}>关闭项目</Button>
          ]);
      }
    }];

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
                  </Breadcrumb>
                </Col>
              </Row>
              <Row>
                <Col span={20} style={{textAlign:'right',marginTop:'8px'}}>
                  <span>状态筛选：</span>
                </Col>
                <Col span={3}>
                  <Select style={{width: '100%'}} size="large" defaultValue="" onChange={this.handleSelectChange}>
                    <Option value={0}>&nbsp;</Option>
                    <Option value={1}>案件审核中</Option>
                    <Option value={2}>债权申请中</Option>
                    <Option value={3}>债权申请截止</Option>
                    <Option value={4}>投票中</Option>
                    <Option value={5}>投票结束</Option>
                  </Select>
                </Col>
              </Row>
              <Row style={{marginTop:'10px'}}>
                <Col span={22} offset={1}>
                  <Table columns={columns} rowKey={record => record.code} dataSource={cases} pagination={{total:cases.length}}/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Modal visible={this.state.voteVisible}
                 title="安排投票" onOk={this.handleModalVoteSubmit} onCancel={this.handleModalVoteCancel}>
            <FormVote persons={mock.persons} ref="formVote" isModal="true"></FormVote>
          </Modal>
          <Modal visible={this.state.voteInputVisible}
                 title="登记线下" onOk={this.handleModalVoteInputSubmit} onCancel={this.handleModalVoteInputCancel}>
            <FormVoteInput ref="formVoteInput" isModal="true"></FormVoteInput>
          </Modal>
        </div>
    );
  }
});

ReactDOM.render(<CompanyCaseList user={mock.creditor} cases={mock.companies}/>, document.getElementById('react-content'));
