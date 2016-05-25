import SiderPlatform from '../component/SiderPlatform';
import Header from '../component/Header';
import Common from '../common/lib';
import mock from '../mock';
import { Row, Col, Table, Select, Modal, Button} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';

const PlatformUser = React.createClass({
  getInitialState(){
    return {typeSelect: "",users:this.props.users};
  },
  handleSelectChange(value) {
    this.setState({typeSelect: value});
  },
  showModalChangePwd(id){
    Modal.confirm({
      title: '是否确认要重制该用户的密码?',
      onOk() {
        console.log('确定');
      },
      onCancel() {}
    });
  },
  showModalDeleteUser(id){
    let that=this;
    Modal.confirm({
      title: '是否确认要删除该用户?',
      onOk() {
        let users=that.state.users;
        for(let i=0,len=users.length;i<len;i++){
          if(id==users[i]._id){
            users.splice(i,1);
            break;
          }
        }
        that.setState({users:users});
      },
      onCancel() {}
    });
  },
  render() {
    const columns = [{
      title: '用户名称',
      dataIndex: 'name',
      key: 'name',
      width: '35%'
    }, {
      title: '类型',
      key: 'role',
      width: '35%',
      render: (text, record) => {
        return Common.getUserRole(record.role);
      }
    }, {
      title: '操作',
      key: 'operation',
      width: '30%',
      render: (text, record) => {
        return([<Button key={1} type="ghost" size="small" onClick={()=>this.showModalChangePwd(record._id)}>重制密码</Button>,
          <Button key={2} type="ghost" size="small" onClick={()=>this.showModalDeleteUser(record._id)}>删除</Button>]);
      }
    }];
    let users = this.state.users.filter((x)=>{
      let type=this.state.typeSelect;
      return type==""||type==x.role;
    });
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderPlatform current="menu1"/></Col>
            <Col span={20}>
              <Row style={{margin:'15px 0'}}>
                <Col span={22} offset={1}>
                  <Row>
                    <Col span={20} style={{textAlign:'right',marginTop:'8px'}}>
                      <span>类型筛选：</span>
                    </Col>
                    <Col span={4}>
                      <Select style={{width: '100%'}} size="large" defaultValue="" onChange={this.handleSelectChange}>
                        <Option key="" value="">&nbsp;</Option>
                        {Common.roles.map((role,i)=>(
                        <Option key={i} value={i+1}>{role}</Option>))}
                      </Select>
                    </Col>
                  </Row>
                  <Row style={{marginTop:'15px'}}>
                    <Table columns={columns} pagination={{total:users.length}}
                         dataSource={users} rowKey={record => record._id}/>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
    );
  }
});

ReactDOM.render(<PlatformUser user={mock.platform} users={mock.users}/>, document.getElementById('react-content'));
