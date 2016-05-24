import '../common/lib';
import React from 'react';
import FormVote from '../component/FormVote';
import { Row, Col, Modal, Form, DatePicker, TimePicker, Button, Icon, Upload, Table, Input,TreeSelect } from 'antd';


let ModalVote = React.createClass({
  handleSubmit() {
    this.refs.formVote.validateFields(['voteStartDate', 'voteEndDate','voteStartTime', 'voteEndTime', 'upload'], (errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log(values);
      this.props.onCancel();
    });
  },
  handleCancel() {
    this.props.onCancel();
  },

  render() {
    return (
        <div>
          <Modal visible={this.props.visible}
                 title="安排投票" onOk={this.handleSubmit} onCancel={this.handleCancel}>
            <FormVote persons={this.props.persons} ref="formVote" isModal="true"></FormVote>
          </Modal>
        </div>
    );
  }
});
ModalVote = Form.create()(ModalVote);
export default ModalVote;
