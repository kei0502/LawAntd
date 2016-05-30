import SiderPlatform from '../component/SiderPlatform';
import Header from '../component/Header';
import FormAdvert from '../component/FormAdvert';
import Common from '../common/lib';
import mock from '../mock';
import { Row, Col, Table, Select, Modal, Button} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const PlatformAdvert = React.createClass({
  getInitialState(){
    return {targetSelect: "",ads:this.props.ads,createVisible:false};
  },
  handleTargetSelectChange(value) {
    this.setState({targetSelect: value});
  },
  showModalDeleteAd(id){
    let that=this;
    Modal.confirm({
      title: '是否确认要删除该广告?',
      onOk() {
        let ads=that.state.ads;
        for(let i=0,len=ads.length;i<len;i++){
          if(ads[i]._id==id){
            ads.splice(i,1);
            break;
          }
        }
        that.setState({ads:ads});
      },
      onCancel() {
      }
    });
  },
  showModalCreateAdvert(){
    this.setState({createVisible:true});
  },
  handleModalCreateSubmit() {
    this.refs.formAdvert.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      //...
      console.log(values);
      this.refs.formAdvert.resetFields();
      this.setState({createVisible: false});
    });
  },
  handleModalCreateCancel() {
    this.setState({createVisible: false});
  },
  render() {
    const columns = [{
      title: '律师名字',
      dataIndex: 'name',
      key: 'name',
      width: '15%'
    }, {
      title: '联系方式',
      dataIndex: 'contact',
      key: 'contact',
      width: '15%'
    }, {
      title: '简介',
      dataIndex: 'description',
      key: 'description',
      width: '30%'
    }, {
      title: '广告目标',
      key: 'target',
      width: '20%',
      render: (text, record) => {
        let target='';
        for(let i=0,length=record.target.length;i<length;i++){
          target+=', '+Common.getUserRole(record.target[i]);
        }
        return target.substr(1);
      }
    }, {
      title: '操作',
      key: 'operation',
      width: '20%',
      render: (text, record) => {
        return (<Button type="ghost" size="small" onClick={()=>this.showModalDeleteAd(record._id)}>删除</Button>);
      }
    }];
    let ads = this.state.ads.filter((ad)=> {
      let select=this.state.targetSelect;
      return select==""||ad.target.filter(x=>x==select).length>0;
    });
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderPlatform current="menu4"/></Col>
            <Col span={20}>
              <Row style={{margin:'15px 0'}}>
                <Col span={22} offset={1}>
                  <Row>
                    <Col span={4}>
                      <Button type="primary" onClick={this.showModalCreateAdvert}>新增律师广告</Button>
                    </Col>
                    <Col span={16} style={{textAlign:'right',marginTop:'8px'}}>
                      <span>状态筛选：</span>
                    </Col>
                    <Col span={4}>
                      <Select style={{width: '100%'}} size="large" defaultValue="" onChange={this.handleTargetSelectChange}>
                        <Option key="" value="">&nbsp;</Option>
                        {Common.roles.map((role,i)=>(
                        <Option key={i} value={i+1}>{role}</Option>))}
                      </Select>
                    </Col>
                  </Row>
                  <Row style={{marginTop:'15px'}}>
                    <Table columns={columns} pagination={{total:ads.length}}
                           dataSource={ads} rowKey={record => record._id}/>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Modal visible={this.state.createVisible}
                 title="创建律师广告" onOk={this.handleModalCreateSubmit} onCancel={this.handleModalCreateCancel}>
            <FormAdvert ref="formAdvert"></FormAdvert>
          </Modal>
        </div>
    );
  }
});

ReactDOM.render(<PlatformAdvert user={mock.platform}
                              ads={mock.advertisements}/>, document.getElementById('react-content'));
