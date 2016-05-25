import SiderPlatform from '../component/SiderPlatform';
import Header from '../component/Header';
import TableCompany from '../component/TableCompany';
import Common from '../common/lib';
import mock from '../mock';
import { Row, Col, Table, Select, Modal, Button} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const PlatformCase = React.createClass({
  getInitialState(){
    return {statusSelect: "",typeSelect:"",companies:this.props.companies};
  },
  handleTypeSelectChange(value) {
    this.setState({typeSelect: value});
  },
  handleStatusSelectChange(value) {
    this.setState({statusSelect: value});
  },
  showModalPassCase(id){
    Modal.confirm({
      title: '确认审核通过这个案件?',
      onOk() {
        console.log('确定');
      },
      onCancel() {
      }
    });
  },
  showModalDeleteCase(id){
    let that=this;
    Modal.confirm({
      title: '是否确认要删除该案件?',
      onOk() {
        let companies=that.state.companies;
        for(let i=0,len=companies.length;i<len;i++){
          if(companies[i]._id==id){
            companies.splice(i,1);
            break;
          }
        }
        that.setState({companies:companies});
      },
      onCancel() {
      }
    });
  },
  expandedRowRender(company){
    return (
        <div>
          <Row>
            <Col span={4}>统一信用代码:</Col>
            <Col span={8}>{company.code}</Col>
            <Col span={4}>公司名称:</Col>
            <Col span={8}>{company.name}</Col>
          </Row>
          <Row>
            <Col span={4}>法定代表人:</Col>
            <Col span={8}>{company.representative}</Col>
            <Col span={4}>财务负责人:</Col>
            <Col span={8}>{company.cfo}</Col>
          </Row>
          <Row>
            <Col span={4}>公司地址:</Col>
            <Col span={20}>{company.address}</Col>
          </Row>
          <Row>
            <Col span={4}>受理日期:</Col>
            <Col span={8}>{company.create}</Col>
            <Col span={4}>结算日期:</Col>
            <Col span={8}>{company.settlement}</Col>
          </Row>
          <Row>
            <Col span={4}>审理法院:</Col>
            <Col span={8}>{company.courtName}</Col>
            <Col span={4}>主审法官:</Col>
            <Col span={8}>{company.judge.name+'(联系方式:'+company.judge.phone+')'}</Col>
          </Row>
          <Row>
            <Col span={4}>合议庭成员:</Col>
            <Col span={8}>{company.collegiates.map((collegiate, i)=> {
                return (<span key={"collegiate_"+i}>{collegiate.name+'(联系方式:'+collegiate.phone+')'}<br/></span>);
                })}</Col>
            <Col span={4}>书记员:</Col>
            <Col span={8}>{company.note.name+'(联系方式:'+company.note.phone+')'}</Col>
          </Row>
        </div>
    );
  },
  render() {
    const columns = [{
      title: '案件编码',
      dataIndex: 'cid',
      key: 'cid',
      width: '10%'
    }, {
      title: '案件类型',
      key: 'type',
      width: '10%',
      render: (text, record) => {
        return Common.getCaseType(record.type);
      }
    }, {
      title: '债务公司名称',
      dataIndex: 'name',
      key: 'name',
      width: '30%'
    }, {
      title: '法定代表人',
      dataIndex: 'representative',
      key: 'representative',
      width: '15%'
    }, {
      title: '状态',
      key: 'status',
      width: '15%',
      render: (text, record) => {
        return Common.getCaseStatus(record);
      }
    }, {
      title: '操作',
      key: 'operation',
      width: '20%',
      render: (text, record) => {
        return ([<Button key={1} type="ghost" size="small"
                         onClick={()=>this.showModalPassCase(record._id)}>确认通过</Button>,
          <Button key={2} type="ghost" size="small" onClick={()=>this.showModalDeleteCase(record._id)}>删除</Button>]);
      }
    }];
    let companies = this.state.companies.filter((x)=> {
      let selectStatus = this.state.statusSelect, status = Common.getCurrentStatus(x), selectType = this.state.typeSelect;
      return (selectStatus == ""&& selectType=="") || (selectType=="" && selectStatus==status) ||
          (selectStatus=="" && selectType==x.type) || (selectStatus==status && selectType==x.type);
    });
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderPlatform current="menu2"/></Col>
            <Col span={20}>
              <Row style={{margin:'15px 0'}}>
                <Col span={22} offset={1}>
                  <Row>
                    <Col span={14} style={{textAlign:'right',marginTop:'8px'}}>
                      <span>类型筛选：</span>
                    </Col>
                    <Col span={4}>
                      <Select style={{width: '100%'}} size="large" defaultValue="" onChange={this.handleTypeSelectChange}>
                        <Option key="" value="">&nbsp;</Option>
                        {Common.caseTypes.map((type,i)=>(
                        <Option key={i} value={i+1}>{type}</Option>))}
                      </Select>
                    </Col>
                    <Col span={2} style={{textAlign:'right',marginTop:'8px'}}>
                      <span>状态筛选：</span>
                    </Col>
                    <Col span={4}>
                      <Select style={{width: '100%'}} size="large" defaultValue="" onChange={this.handleStatusSelectChange}>
                        <Option key="" value="">&nbsp;</Option>
                        {Common.caseStatus.map((status,i)=>(
                        <Option key={i} value={i+1}>{status}</Option>))}
                      </Select>
                    </Col>
                  </Row>
                  <Row style={{marginTop:'15px'}}>
                    <Table ref="caseTable" columns={columns} pagination={{total:companies.length}}
                           expandedRowRender={this.expandedRowRender}
                           dataSource={companies} rowKey={record => record._id}/>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
    );
  }
});

ReactDOM.render(<PlatformCase user={mock.platform}
                              companies={mock.companies}/>, document.getElementById('react-content'));
