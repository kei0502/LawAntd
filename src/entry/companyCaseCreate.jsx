import '../common/lib';
import SiderCompany from '../component/SiderCompany';
import Header from '../component/Header';
import FormCourt from '../component/FormCourt';
import FormCase from '../component/FormCase';
import FormDebtor from '../component/FormDebtor';
import FormLiquidation from '../component/FormLiquidation';
import { Row, Col, Breadcrumb, Card, Steps} from 'antd';
const Step = Steps.Step;
import ReactDOM from 'react-dom';
import React from 'react';


const CompanyCase = React.createClass({
  getInitialState() {
    return {
      currentStep: 0
    };
  },
  goStep(i) {
    return (e)=> {
      e.preventDefault();
      this.setState({currentStep: i});
    };
  },
  handleSubmit() {
    let s = this.state.currentStep + 1;
    if (s != 4) { //caseSteps.length
      this.setState({
        currentStep: s
      });
    }
  },
  getStepForm(){
    if (this.state.currentStep == 0) { //法院
      return (
          <Card title="法院信息" style={{marginTop: '20px'}}>
            <FormCourt onSubmit={this.handleSubmit}/>
          </Card>
      )
    }
    else if (this.state.currentStep == 1) { //债务人信息
      return (
          <Card title="债务人信息" style={{marginTop: '20px'}}>
            <FormDebtor onSubmit={this.handleSubmit}/>
          </Card>
      )
    }
    else if (this.state.currentStep == 2) {
      return (
          <Card title="案件信息" style={{marginTop: '20px'}}>
            <FormCase onSubmit={this.handleSubmit}/>
          </Card>
      );
    }
    else if (this.state.currentStep == 3) {
      return (
          <Card title="管理人信息" style={{marginTop: '20px'}}>
            <FormLiquidation onSubmit={this.handleSubmit}/>
          </Card>
      );
    }
  },
  render() {
    const caseSteps = [{
          title: (<a href="#" onClick={this.goStep(0)}>法院信息</a>)
        }, {
          title: (<a href="#" onClick={this.goStep(1)}>债务人信息</a>)
        }, {
          title: (<a href="#" onClick={this.goStep(2)}>案件信息</a>)
        }, {
          title: (<a href="#" onClick={this.goStep(3)}>管理人信息</a>)
        }].map((s, i) => <Step key={i} title={s.title}></Step>);
    return (
        <div>
          <Header user={this.props.user}/>
          <Row>
            <Col span={4}><SiderCompany /></Col>
            <Col span={20}>
              <Row style={{marginTop:'20px'}}>
                <Col span={22} offset={1}>
                  <Steps size="small" current={this.state.currentStep}>{caseSteps}</Steps>
                </Col>
              </Row>
              <Row>
                <Col span={22} offset={1}>
                  {this.getStepForm()}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
    );
  }
});
var userObj = {name: '管理员一', role: 2};
ReactDOM.render(<CompanyCase user={userObj}/>, document.getElementById('react-content'));
