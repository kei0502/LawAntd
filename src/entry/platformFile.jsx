import SiderPlatform from '../component/SiderPlatform';
import Header from '../component/Header';
import Common from '../common/lib';
import mock from '../mock';
import { Row, Col, Table, Select, Modal, Button} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const PlatformFile = React.createClass({
  getInitialState(){
    return {statusSelect: "",companySelect:"",files:this.props.files};
  },
  handleCompanySelectChange(value) {
    this.setState({companySelect: value});
  },
  handleStatusSelectChange(value) {
    this.setState({statusSelect: value});
  },
  showModalPassFile(id){
    let that=this;
    Modal.confirm({
      title: '确认审核通过这份文件并披露?',
      onOk() {
        let files=that.state.files;
        for(let i=0,len=files.length;i<len;i++){
          if(files[i]._id==id){
            files[i].status=1;
            break;
          }
        }
        that.setState({files:files});
      },
      onCancel() {
      }
    });
  },
  showModalFailFile(id){
    let that=this;
    Modal.confirm({
      title: '确认审核通过这份文件并披露?',
      onOk() {
        let files=that.state.files;
        for(let i=0,len=files.length;i<len;i++){
          if(files[i]._id==id){
            files[i].status=2;
            break;
          }
        }
        that.setState({files:files});
      },
      onCancel() {
      }
    });
  },
  render() {
    const columns = [{
      title: '文件名',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      render: (text, record) => {
        return <a href={record.file} target="_blank">{record.name}</a>;
      }
    }, {
      title: '债务公司名称',
      key: 'company',
      width: '30%',
      render: (text, record) => {
        return record.company.name;
      }
    }, {
      title: '状态',
      key: 'status',
      width: '15%',
      render: (text, record) => {
        if(record.status==1) return '通过';
        else if(record.status==2) return '未通过';
        else return '未审核';
      }
    }, {
      title: '操作',
      key: 'operation',
      width: '20%',
      render: (text, record) => {
        if(!record.status)
          return [(<Button key={1} type="ghost" size="small" onClick={()=>this.showModalPassFile(record._id)}>审核通过</Button>),
            (<Button key={2} type="ghost" size="small" onClick={()=>this.showModalFailFile(record._id)}>审核不通过</Button>)];
      }
    }];
    let companies = [], companyIndexes = [];
    this.state.files.forEach(file=> {
      const company = file.company, companyId = company._id;
      if (companyIndexes.indexOf(companyId) < 0) {
        companies.push(company);
        companyIndexes.push(companyId);
      }
    });
    let files = this.state.files.filter((x)=> {
      let selectStatus = this.state.statusSelect, selectCompany = this.state.companySelect;
      return (selectStatus == ""&& selectCompany=="") || (selectCompany=="" && selectStatus==x.status) ||
          (selectStatus=="" && selectCompany==x.company._id) || (selectStatus==x.status && selectCompany==x.company._id);
    });
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderPlatform current="menu3"/></Col>
            <Col span={20}>
              <Row style={{margin:'15px 0'}}>
                <Col span={22} offset={1}>
                  <Row>
                    <Col span={14} style={{textAlign:'right',marginTop:'8px'}}>
                      <span>公司筛选：</span>
                    </Col>
                    <Col span={4}>
                      <Select style={{width: '100%'}} size="large" defaultValue="" onChange={this.handleCompanySelectChange}>
                        <Option key="" value="">&nbsp;</Option>
                        {companies.map((company,i)=>(
                        <Option key={i} value={company._id}>{company.name}</Option>))}
                      </Select>
                    </Col>
                    <Col span={2} style={{textAlign:'right',marginTop:'8px'}}>
                      <span>状态筛选：</span>
                    </Col>
                    <Col span={4}>
                      <Select style={{width: '100%'}} size="large" defaultValue="" onChange={this.handleStatusSelectChange}>
                        <Option key="" value="">&nbsp;</Option>
                        <Option key={0} value={undefined}>未审核</Option>
                        <Option key={1} value={1}>通过</Option>
                        <Option key={2} value={2}>未通过</Option>
                      </Select>
                    </Col>
                  </Row>
                  <Row style={{marginTop:'15px'}}>
                    <Table columns={columns} pagination={{total:files.length}}
                           dataSource={files} rowKey={record => record._id}/>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
    );
  }
});

ReactDOM.render(<PlatformFile user={mock.platform} files={mock.files}/>, document.getElementById('react-content'));
