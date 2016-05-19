import '../common/lib';
import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import ModalVote from '../component/ModalVote';
import mock from '../mock';
import moment from 'moment';
import { Row, Col, Breadcrumb, Button, Table} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

function getCurrentStatus(company) {
  const current = moment(), expire = moment(company.expire), voteStart = moment(company.voteStart), voteEnd = moment(company.voteEnd);
  if (current.isSameOrBefore(expire, 'day')) {
    return 1;
  } else if (current.isBefore(voteStart)) {
    return 2;
  } else if (current.isSameOrBefore(voteEnd)) {
    return 3;
  } else {
    return 4;
  }
}
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
      dataIndex: 'code',
      key: 'code',
      className: 'tableHead', //可以通过class设置样式
      sorter: (a, b) => a.code-b.code
    }, {
      title: '债务人名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '受理日期',
      dataIndex: 'settlement',
      key: 'settlement',
      sorter: (a, b) => Date.parse(a.settlement)-Date.parse(b.settlement)
    }, {
      title: '申请截止日期',
      dataIndex: 'expire',
      key: 'expire',
      sorter: (a, b) => Date.parse(a.expire)-Date.parse(b.expire)
    }, {
      title: '状态',
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
      onFilter: (value, record) => {
        let status=getCurrentStatus(record);
        return status==value;
      },
      render: (text, record) => {
        let status=getCurrentStatus(record);
        if(status==1) return '案件审核中';
        else if(status==2) return '债权申报中';
        else if(status==3) return '债权申请截止';
        else if(status==4) return '投票中';
        else
          return '投票截止';
      }
    }, {
      title: '操作',
      key: 'operation',
      render: (text, record) => {
        let status=getCurrentStatus(record);
        if(status==1) return(<Button type="ghost" onClick={()=>this.showDetail(record.key)}>案件详情</Button>);
        else if(status==2) return(<Button type="ghost" onClick={()=>this.manageApplications(record.key)}>管理申请</Button>);
        else if(status==3) return(<Button type="ghost" onClick={()=>this.assignVote(record.key)}>安排投票</Button>);
        else if(status==4) return(<Button type="ghost" onClick={()=>this.inputVote(record.key)}>登记线下</Button>);
        else return(<Button type="ghost" onClick={()=>this.inputVote(record.key)}>关闭项目</Button>);
      }
    }];
    const pagination = {
      total: this.props.cases.length,
      onChange(current) {
        console.log('Current: ', current);
      }
    };
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
                <Col span={22} offset={1}>
                  <Table columns={columns} rowKey={record => record.code} dataSource={this.props.cases} pagination={pagination}/>
                </Col>
              </Row>
            </Col>
          </Row>
          <ModalVote visible={this.state.voteVisible} persons={mock.persons} onCancel={this.handleModalVoteCancel}></ModalVote>
        </div>
    );
  }
});

ReactDOM.render(<CompanyCaseList user={mock.creditor} cases={mock.companies}/>, document.getElementById('react-content'));
