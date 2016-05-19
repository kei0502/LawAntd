import '../common/lib';
import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import ModalVote from '../component/ModalVote';
import { Row, Col, Breadcrumb, Button, Table} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';


const CompanyCaseList = React.createClass({
  getInitialState(){
    return({
      voteVisible:false
    });
  },
  showDetail(id) { //查看案件详情
  },
  manageApplications(id) { //管理债权申请
  },
  assignVote(id){ //安排投票
    this.showModalVote();
  },
  inputVote(id){ //输入线下投票结果
  },
  showModalVote(){
    this.setState({voteVisible:true});
  },
  handleModalVoteCancel() {
    this.setState({voteVisible: false});
  },
  render() {
    const columns = [{
      title: '案件编码',
      dataIndex: 'caseId',
      key: 'caseId',
      className: 'tableHead', //可以通过class设置样式
      sorter: (a, b) => a.caseId-b.caseId
    }, {
      title: '债务人名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '受理日期',
      dataIndex: 'startDate',
      key: 'startDate',
      sorter: (a, b) => Date.parse(a.startDate)-Date.parse(b.startDate)
    }, {
      title: '申请截止日期',
      dataIndex: 'endDate',
      key: 'endDate',
      sorter: (a, b) => Date.parse(a.endDate)-Date.parse(b.endDate)
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: [{
        text: '案件审核中',
        value: 1
      }, {
        text: '债权申报中',
        value: 2
      }, {
        text: '债权申报截止',
        value: 3
      }, {
        text: '投票中',
        value: 4
      }, {
        text: '投票截止',
        value: 5
      }],
      onFilter: (value, record) => record.status==value,
      render: (text, record) => {
        if(record.status==1) return '案件审核中';
        else if(record.status==2) return '债权申报中';
        else if(record.status==3) return '债权申请截止';
        else if(record.status==4) return '投票中';
        else if(record.status==5) return '投票截止';
      },
      sorter: (a, b) => a.status-b.status
    }, {
      title: '操作',
      key: 'operation',
      render: (text, record) => {
        if(record.status==1) return(<Button type="ghost" onClick={()=>this.showDetail(record.key)}>案件详情</Button>);
        else if(record.status==2) return(<Button type="ghost" onClick={()=>this.manageApplications(record.key)}>管理申请</Button>);
        else if(record.status==3) return(<Button type="ghost" onClick={()=>this.assignVote(record.key)}>安排投票</Button>);
        else if(record.status==4) return(<Button type="ghost" onClick={()=>this.inputVote(record.key)}>登记线下</Button>);
        else if(record.status==5) return(<Button type="ghost" onClick={()=>this.inputVote(record.key)}>关闭项目</Button>);
      }
    }];
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderCompany /></Col>
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
                <Col span={22} offset={1}>
                  <Table columns={columns} dataSource={this.props.cases}/>
                </Col>
              </Row>
            </Col>
          </Row>
          <ModalVote visible={this.state.voteVisible} persons={treeData} onCancel={this.handleModalVoteCancel}></ModalVote>
        </div>
    );
  }
});
var userObj = {name: '管理员一', role: 2};
var caseObj = [{
  key:1,
  caseId:1,
  name: '中国移动',
  status: 1,
  startDate: '2016-01-01',
  endDate: '2016-02-01'
},{
  key:2,
  caseId:2,
  name: '中国电信',
  status: 2,
  startDate: '2016-01-02',
  endDate: '2016-03-06'
},{
  key:5,
  caseId:5,
  name: '中国电信',
  status: 5,
  startDate: '2016-01-02',
  endDate: '2016-04-01'
},{
  key:3,
  caseId:3,
  name: '中国银行',
  status: 3,
  startDate: '2016-01-03',
  endDate: '2016-03-12'
}, {
  key: 4,
  caseId: 4,
  name: '农业银行',
  status: 4,
  startDate: '2016-01-20',
  endDate: '2016-03-01'
}];
const treeData = [{
  label: '群体一',
  value: '0-0',
  key: '0-0',
  children: [{
    label: '张三',
    value: '0-0-0',
    key: '0-0-0'
  }, {
    label: '李四',
    value: '0-0-1',
    key: '0-0-1'
  }]
}, {
  label: '群体二',
  value: '0-1',
  key: '0-1',
  children: [{
    label: '王五',
    value: '0-1-0',
    key: '0-1-0'
  }, {
    label: '赵六',
    value: '0-1-1',
    key: '0-1-1'
  }]
}];
ReactDOM.render(<CompanyCaseList user={userObj} cases={caseObj}/>, document.getElementById('react-content'));
