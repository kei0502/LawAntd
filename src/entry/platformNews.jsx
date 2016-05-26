import SiderPlatform from '../component/SiderPlatform';
import Header from '../component/Header';
import Common from '../common/lib';
import mock from '../mock';
import { Row, Col, Table, Tabs, Icon, Button, Modal} from 'antd';
import ReactDOM from 'react-dom';
import React from 'react';
import Editor from '../component/Editor';


const PlatformNews = React.createClass({
  getInitialState(){
    return {news:this.props.news};
  },
  showModalDeleteNews(id){
    let that=this;
    Modal.confirm({
      title: '是否确认要删除该用户?',
      onOk() {
        let news=that.state.news;
        for(let i=0,len=news.length;i<len;i++){
          if(id==news[i]._id){
            news.splice(i,1);
            break;
          }
        }
        that.setState({news:news});
      },
      onCancel() {}
    });
  },
  onSubmit(){
    Modal.info({
      content: this.refs.editor.state.value
    });
  },
  render() {
    const columns = [{
      title: '标题',
      dataIndex: 'title',
      key: 'titile',
      width: '30%'
    }, {
      title: '内容',
      dataIndex: 'text',
      key: 'text',
      width: '50%'
    }, {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      width: '10%'
    }, {
      title: '操作',
      key: 'operation',
      width: '10%',
      render: (text, record) => {
        return(<Button type="ghost" size="small" onClick={()=>this.showModalDeleteNews(record._id)}>删除</Button>);
      }
    }];
    let news = this.state.news;
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderPlatform current="menu1"/></Col>
            <Col span={20}>
              <Row style={{margin:'15px 0'}}>
                <Col span={22} offset={1}>
                  <Row style={{marginTop:'15px'}}>
                    <Tabs defaultActiveKey="1" onTabClick={this.onTabClick}>
                      <Tabs.TabPane tab={<span><Icon type="bars" />所有新闻</span>} key="1">
                         <Table columns={columns} pagination={{total:news.length}}
                          dataSource={news} rowKey={record => record._id}/>
                      </Tabs.TabPane>
                      <Tabs.TabPane tab={<span><Icon type="plus" />发布新闻</span>} key="2">
                        <Editor ref="editor"/>
                        <Button type="primary" onClick={()=>this.onSubmit()}>确定</Button>
                      </Tabs.TabPane>
                    </Tabs>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
    );
  }
});

ReactDOM.render(<PlatformNews user={mock.platform} news={mock.news}/>, document.getElementById('react-content'));
