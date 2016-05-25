import moment from 'moment';
const Common={
  getUserRole: function(role){
    if(role==1) return '债权人';
    else if(role==2) return '管理人';
    else if(role==3) return '工作人员';
    else if(role==4) return '法院';
    else if(role==5) return '平台管理员';
    else if(role==6) return '公司';
    else return '会计';
  },
  getCurrentStatus: function(company) {
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
  },
  getCaseStatus: function(s) {
    var status=this.getCurrentStatus(s);
    if(status==1) return '案件审核中';
    else if(status==2) return '债权申报中';
    else if(status==3) return '债权申请截止';
    else if(status==4) return '投票中';
    else if(status==5) return '投票截止';
  },
  getCaseType: function(type) {
    if(type==1) return '破产清算';
    else if(type==2) return '强制清算';
    else if(type==3) return '破产重整';
    else return '自行清算';
  }
};
Common.roles=['债权人','管理人','工作人员','法院','平台管理员','公司','会计'];
Common.caseStatus=['案件审核中','债权申报中','债权申请截止','投票中','投票截止'];
Common.caseTypes = ["破产清算", "强制清算", "破产重整", "自行清算"];
module.exports = Common;