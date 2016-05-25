/**
 * Created by gyz on 16/5/19.
 */
module.exports = {
    currencies: [{_id: "5731d29ea8dba6fc21a1cc05", code: "CNY", name: "人民币"},
        {_id: "5731d29ea8dba6fc21a1cc06", code: "USD/CNY", name: "美元", rate: 6.5216},
        {_id: "5731d29ea8dba6fc21a1cc07", code: "EUR/CNY", name: "欧元", rate: 7.3778},
        {_id: "5731d29ea8dba6fc21a1cc08", code: "100JPY/CNY", name: "日元", rate: 5.9832},
        {_id: "5731d29ea8dba6fc21a1cc09", code: "HKD/CNY", name: "港币", rate: 0.84013},
        {_id: "5731d29ea8dba6fc21a1cc0a", code: "GBP/CNY", name: "英镑", rate: 9.4248},
        {_id: "5731d29ea8dba6fc21a1cc0b", code: "AUD/CNY", name: "澳元", rate: 4.7667},
        {_id: "5731d29ea8dba6fc21a1cc0c", code: "NZD/CNY", name: "新西兰元", rate: 4.4408},
        {_id: "5731d29ea8dba6fc21a1cc0d", code: "SGD/CNY", name: "新加坡元", rate: 4.7572},
        {_id: "5731d29ea8dba6fc21a1cc0e", code: "CHF/CNY", name: "瑞士法郎", rate: 6.6534},
        {_id: "5731d29ea8dba6fc21a1cc0f", code: "CAD/CNY", name: "加元", rate: 5.0469},
        {_id: "5731d29ea8dba6fc21a1cc10", code: "CNY/MYR", name: "林吉特", rate: 0.61461},
        {_id: "5731d29ea8dba6fc21a1cc11", code: "CNY/RUB", name: "卢布", rate: 9.9293}],
    companies: [{
        _id: "12345678",
        cid: "12345678",
        name: "AAA",
        type: 1,
        code: 12345678,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-28",
        voteStart: "2016-05-29 18:54",
        voteEnd: "2016-05-29 18:56",
        claims: [{
            _id: "111",
            name: "中国移动",
            representative: "赵六",
            phone_representative: "1388888888",
            phone: "13888888888",
            fax: "13888888888",
            address3: [110000, 110100, 110101],
            address: "东川路800号",
            reason: "商业借贷",
            file: "/processv1.pdf",
            rule: false,
            claim_type: 3,
            currency: "5731d29ea8dba6fc21a1cc05",
            principal: 10000,
            claim_information: "无",
            attachments: [{name: "processv1.pdf", style: 2, file: "/processv1.pdf"}],
            display: "债权申请书1",
            generatedFile: "/processv1.pdf",
            state: 1
        }, {
            _id: "112",
            name: "中国联通",
            representative: "赵六",
            phone_representative: "1388888888",
            phone: "13888888888",
            fax: "13888888888",
            address3: [110000, 110100, 110101],
            address: "东川路800号",
            reason: "商业借贷",
            file: "/processv1.pdf",
            guarantee: {name: "人保财险", money: 12.3456, style: 2},
            judge: {money: 45.68676, file: "/processv1.pdf"},
            rule: false,
            claim_type: 1,
            currency: "5731d29ea8dba6fc21a1cc05",
            principal: 10000,
            interest: {calculate: 2, start: "2015-01-01"},
            claim_information: "无",
            attachments: [{name: "processv1.pdf", style: 2, file: "/processv1.pdf"}, {
                name: "processv2.pdf",
                file: "/processv1.pdf",
                style: 3
            }],
            display: "债权申请书2",
            generatedFile: "/processv1.pdf",
            state: 2
        }, {
            _id: "113",
            name: "中国电信",
            representative: "赵六",
            phone_representative: "1388888888",
            phone: "13888888888",
            fax: "13888888888",
            address3: [110000, 110100, 110101],
            address: "东川路800号",
            reason: "商业借贷",
            file: "/processv1.pdf",
            guarantee: {name: "人保财险", money: 12.3456, style: 2},
            judge: {money: 45.68676, file: "/processv1.pdf"},
            rule: false,
            claim_type: 2,
            currency: "5731d29ea8dba6fc21a1cc05",
            principal: 10000,
            interest: {calculate: 2, start: "2015-01-01"},
            total: 11000,
            claim_information: "无",
            attachments: [{name: "processv1.pdf", style: 1, file: "/processv1.pdf"}, {
                name: "processv2.pdf",
                file: "/processv1.pdf",
                style: 3
            }],
            display: "债权申请书3",
            generatedFile: "/processv1.pdf",
            state: 3,
            verifyAccountant: "已审核",
            verifyCourt: "已审核",
            verifyCourtFile: "/processv1.pdf",
            verifyCompany: "已审核",
            verifyLiquidation: "已审核",
            verifyLiquidationFile: "/processv1.pdf",
            verifyTotal: 10500,
            verifyGuarantee: 1,
            verifyJudge: false,
            verifyClaim_type: 1
        }],
        files: [{
            _id: "201",
            name: "指南",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "202",
            name: "政策",
            time: "2016-01-02",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "203",
            name: "债权生成条例",
            time: "2016-01-02",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "204",
            name: "债权申报办法",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "205",
            name: "文件上传指南",
            time: "2015-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "206",
            name: "文件上传指南2",
            time: "2015-02-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "207",
            name: "文件上传指南3",
            time: "2015-03-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "208",
            name: "债权申报办法2",
            time: "2016-02-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "209",
            name: "债权申报办法3",
            time: "2016-03-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "210",
            name: "请勿嗯好风口浪尖安师大",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "211",
            name: "安师大合家快乐",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "212",
            name: "讲噶合适的考虑",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "213",
            name: "哦去热河发财",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "214",
            name: "月球无法回答铃声快剪第三方",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "215",
            name: "求稳分段函数卡里",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "216",
            name: "轻微衣服的苏哈",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "217",
            name: "护额缺爱撒",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "218",
            name: "去完饿发大水好滴",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }, {
            _id: "219",
            name: "哦小瀑布好是",
            time: "2016-01-01",
            href: "/companyCaseList.html",
            attachments: [{name: "附件1", href: "/processv1.pdf"}, {name: "附件2", href: "/processv1.pdf"}]
        }],
        questions: [{
            _id: "301",
            question: "如何操作",
            questionTime: "2016-01-01 15:00",
            answer: "就这样",
            answerTime: "2016-02-01 17:00"
        }, {
            _id: "302",
            question: "如何进行",
            questionTime: "2016-01-01 17:00"
        }, {
            _id: "303",
            question: "如何开始",
            questionTime: "2015-12-31 15:00",
            answer: "就这样",
            answerTime: "2016-01-01 17:00"
        }],
        vote: []
    }, {
        _id: "12345679",
        cid: "12345679",
        name: "BBB",
        type: 1,
        code: 12345679,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-21",
        voteStart: "2016-05-22 18:54",
        voteEnd: "2016-05-22 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345680",
        cid: "12345680",
        name: "CCC",
        type: 1,
        code: 12345680,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-22",
        voteStart: "2016-05-23 18:54",
        voteEnd: "2016-05-23 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345681",
        cid: "12345681",
        name: "DDD",
        type: 1,
        code: 12345681,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-23",
        voteStart: "2016-05-24 18:54",
        voteEnd: "2016-05-24 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345682",
        cid: "12345682",
        name: "EEE",
        type: 1,
        code: 12345682,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-24",
        voteStart: "2016-05-25 18:54",
        voteEnd: "2016-05-25 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345683",
        cid: "12345683",
        name: "FFF",
        type: 1,
        code: 12345683,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-17",
        voteStart: "2016-05-19 18:54",
        voteEnd: "2016-06-25 18:56",
        files: [],
        questions: [],
        vote: [{
            _id: "401",
            name: "决议1",
            file: "/processv1.pdf",
            agree: 11,
            disagree: 2,
            agreeMoney: 6500000,
            disagreeMoney: 50000
        }, {
            _id: "402",
            name: "决议2",
            file: "/processv1.pdf",
            agree: 10,
            disagree: 3,
            agreeMoney: 6000000,
            disagreeMoney: 550000
        }, {
            _id: "403",
            name: "决议3",
            file: "/processv1.pdf",
            disagree: 11,
            agree: 2,
            disagreeMoney: 6500000,
            agreeMoney: 50000
        }, {
            _id: "404",
            name: "决议4",
            file: "/processv1.pdf",
            disagree: 10,
            agree: 3,
            disagreeMoney: 600000,
            agreeMoney: 550000
        }]
    }, {
        _id: "12345684",
        cid: "12345684",
        name: "GGG",
        type: 1,
        code: 12345684,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-17",
        voteStart: "2016-05-19 18:54",
        voteEnd: "2016-06-25 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345685",
        cid: "12345685",
        name: "HHH",
        type: 1,
        code: 12345685,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-17",
        voteStart: "2016-05-19 18:54",
        voteEnd: "2016-06-25 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345686",
        cid: "12345686",
        name: "III",
        type: 1,
        code: 12345686,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-17",
        voteStart: "2016-05-19 18:54",
        voteEnd: "2016-06-25 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345687",
        cid: "12345687",
        name: "JJJ",
        type: 1,
        code: 12345687,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-17",
        voteStart: "2016-05-19 18:54",
        voteEnd: "2016-06-25 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345688",
        cid: "12345688",
        name: "KKK",
        type: 1,
        code: 12345688,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-17",
        voteStart: "2016-06-25 18:54",
        voteEnd: "2016-06-30 18:56",
        files: [],
        questions: [],
        vote: [{
            _id: "401",
            name: "决议1",
            file: "/processv1.pdf"
        }, {
            _id: "402",
            name: "决议2",
            file: "/processv1.pdf"
        }, {
            _id: "403",
            name: "决议3",
            file: "/processv1.pdf"
        }, {
            _id: "404",
            name: "决议4",
            file: "/processv1.pdf"
        }]
    }, {
        _id: "12345689",
        cid: "12345689",
        name: "LLL",
        type: 1,
        code: 12345689,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-17",
        voteStart: "2016-06-25 18:54",
        voteEnd: "2016-06-30 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345690",
        cid: "12345690",
        name: "MMM",
        type: 1,
        code: 12345690,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-17",
        voteStart: "2016-05-18 18:54",
        voteEnd: "2016-05-18 18:56",
        files: [],
        questions: [],
        vote: [{
            _id: "401",
            name: "决议1",
            file: "/processv1.pdf",
            agree: 11,
            disagree: 2,
            agreeMoney: 6500000,
            disagreeMoney: 50000
        }, {
            _id: "402",
            name: "决议2",
            file: "/processv1.pdf",
            agree: 10,
            disagree: 3,
            agreeMoney: 6000000,
            disagreeMoney: 550000
        }, {
            _id: "403",
            name: "决议3",
            file: "/processv1.pdf",
            disagree: 11,
            agree: 2,
            disagreeMoney: 6500000,
            agreeMoney: 50000
        }, {
            _id: "404",
            name: "决议4",
            file: "/processv1.pdf",
            disagree: 10,
            agree: 3,
            disagreeMoney: 600000,
            agreeMoney: 550000
        }]
    }, {
        _id: "12345691",
        cid: "12345691",
        name: "NNN",
        type: 1,
        code: 12345691,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-17",
        voteStart: "2016-05-18 18:54",
        voteEnd: "2016-05-18 18:56",
        files: [],
        questions: [],
        vote: [{
            _id: "401",
            name: "决议1",
            file: "/processv1.pdf",
            agree: 11,
            disagree: 2,
            agreeMoney: 6500000,
            disagreeMoney: 50000
        }, {
            _id: "402",
            name: "决议2",
            file: "/processv1.pdf",
            agree: 10,
            disagree: 3,
            agreeMoney: 6000000,
            disagreeMoney: 550000
        }, {
            _id: "403",
            name: "决议3",
            file: "/processv1.pdf",
            disagree: 11,
            agree: 2,
            disagreeMoney: 6500000,
            agreeMoney: 50000
        }, {
            _id: "404",
            name: "决议4",
            file: "/processv1.pdf",
            disagree: 10,
            agree: 3,
            disagreeMoney: 600000,
            agreeMoney: 550000
        }],
        spotFile: "/processv1.pdf",
        claims: [{
            _id: "116",
            name: "中国移动",
            representative: "赵六",
            phone_representative: "1388888888",
            phone: "13888888888",
            fax: "13888888888",
            address3: [110000, 110100, 110101],
            address: "东川路800号",
            reason: "商业借贷",
            file: "/processv1.pdf",
            guarantee: {name: "人保财险", money: 12.3456, style: 2},
            judge: {money: 45.68676, file: "/processv1.pdf"},
            rule: false,
            claim_type: 1,
            currency: "5731d29ea8dba6fc21a1cc05",
            principal: 10000,
            interest: {calculate: 2, start: "2015-01-01"},
            total: 12000,
            claim_information: "无",
            attachments: [{name: "processv1.pdf", file: "/processv1.pdf", style: 3}, {
                name: "processv2.pdf",
                file: "/processv1.pdf",
                style: 1
            }],
            display: "债权申请书6",
            state: 3,
            generatedFile: "/processv1.pdf",
            verifyAccountant: "已审核",
            verifyCourt: "已审核",
            verifyCourtFile: "/processv1.pdf",
            verifyCompany: "已审核",
            verifyLiquidation: "已审核",
            verifyLiquidationFile: "/processv1.pdf",
            verifyTotal: 12000,
            verifyGuarantee: 1,
            verifyJudge: false,
            verifyClaim_type: 1,
            distribution: {money: 1200, time: "2016-09-01", confirm: "2016-11-05"}
        }, {
            _id: "117",
            name: "中国移动",
            representative: "赵六",
            phone_representative: "1388888888",
            phone: "13888888888",
            fax: "13888888888",
            address3: [110000, 110100, 110101],
            address: "东川路800号",
            reason: "商业借贷",
            file: "/processv1.pdf",
            guarantee: {name: "人保财险", money: 12.3456, style: 2},
            judge: {money: 45.68676, file: "/processv1.pdf"},
            rule: false,
            claim_type: 1,
            currency: "5731d29ea8dba6fc21a1cc05",
            principal: 10000,
            interest: {calculate: 2, start: "2015-01-01"},
            total: 15000,
            claim_information: "无",
            attachments: [{name: "processv1.pdf", file: "/processv1.pdf"}, {
                name: "processv2.pdf",
                file: "/processv1.pdf"
            }],
            display: "债权申请书7",
            state: 3,
            generatedFile: "/processv1.pdf",
            verifyAccountant: "已审核",
            verifyCourt: "已审核",
            verifyCourtFile: "/processv1.pdf",
            verifyCompany: "已审核",
            verifyLiquidation: "已审核",
            verifyLiquidationFile: "/processv1.pdf",
            verifyTotal: 14000,
            verifyGuarantee: 1,
            verifyJudge: false,
            verifyClaim_type: 1,
            distribution: {money: 1400, time: "2016-09-01", confirm: "2016-11-07", response: 1}
        }]
    }, {
        _id: "12345692",
        cid: "12345692",
        name: "OOO",
        type: 1,
        code: 12345692,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-17",
        voteStart: "2016-05-18 18:54",
        voteEnd: "2016-05-18 18:56",
        files: [],
        questions: [],
        vote: [{
            _id: "401",
            name: "决议1",
            file: "/processv1.pdf",
            agree: 11,
            disagree: 2,
            agreeMoney: 6500000,
            disagreeMoney: 50000
        }, {
            _id: "402",
            name: "决议2",
            file: "/processv1.pdf",
            agree: 10,
            disagree: 3,
            agreeMoney: 6000000,
            disagreeMoney: 550000
        }, {
            _id: "403",
            name: "决议3",
            file: "/processv1.pdf",
            disagree: 11,
            agree: 2,
            disagreeMoney: 6500000,
            agreeMoney: 50000
        }, {
            _id: "404",
            name: "决议4",
            file: "/processv1.pdf",
            disagree: 10,
            agree: 3,
            disagreeMoney: 600000,
            agreeMoney: 550000
        }],
        spotFile: "/processv1.pdf",
        closed: true,
        claims: [{
            _id: "114",
            name: "中国移动",
            representative: "赵六",
            phone_representative: "1388888888",
            phone: "13888888888",
            fax: "13888888888",
            address3: [110000, 110100, 110101],
            address: "东川路800号",
            reason: "商业借贷",
            file: "/processv1.pdf",
            guarantee: {name: "人保财险", money: 12.3456, style: 2},
            judge: {money: 45.68676, file: "/processv1.pdf"},
            rule: false,
            claim_type: 1,
            currency: "5731d29ea8dba6fc21a1cc05",
            principal: 10000,
            interest: {calculate: 2, start: "2015-01-01"},
            total: 22000,
            claim_information: "无",
            attachments: [{name: "processv1.pdf", file: "/processv1.pdf"}, {
                name: "processv2.pdf",
                file: "/processv1.pdf"
            }],
            display: "债权申请书4",
            state: 3,
            generatedFile: "/processv1.pdf",
            verifyAccountant: "已审核",
            verifyCourt: "已审核",
            verifyCourtFile: "/processv1.pdf",
            verifyCompany: "已审核",
            verifyLiquidation: "已审核",
            verifyLiquidationFile: "/processv1.pdf",
            verifyTotal: 20000,
            verifyGuarantee: 1,
            verifyJudge: false,
            verifyClaim_type: 1,
            distribution: {money: 1100, time: "2016-10-01", confirm: "2016-10-05"}
        }, {
            _id: "115",
            name: "中国移动",
            representative: "赵六",
            phone_representative: "1388888888",
            phone: "13888888888",
            fax: "13888888888",
            address3: [110000, 110100, 110101],
            address: "东川路800号",
            reason: "商业借贷",
            file: "/processv1.pdf",
            guarantee: {name: "人保财险", money: 12.3456, style: 2},
            judge: {money: 45.68676, file: "/processv1.pdf"},
            rule: false,
            claim_type: 1,
            currency: "5731d29ea8dba6fc21a1cc05",
            principal: 10000,
            interest: {calculate: 2, start: "2015-01-01"},
            total: 20000,
            claim_information: "无",
            attachments: [{name: "processv1.pdf", file: "/processv1.pdf"}, {
                name: "processv2.pdf",
                file: "/processv1.pdf"
            }],
            display: "债权申请书5",
            state: 3,
            generatedFile: "/processv1.pdf",
            verifyAccountant: "已审核",
            verifyCourt: "已审核",
            verifyCourtFile: "/processv1.pdf",
            verifyCompany: "已审核",
            verifyLiquidation: "已审核",
            verifyLiquidationFile: "/processv1.pdf",
            verifyTotal: 20000,
            verifyGuarantee: 1,
            verifyJudge: false,
            verifyClaim_type: 1,
            distribution: {money: 1000, time: "2016-10-02", confirm: "2016-10-04", response: 1}
        }]
    }, {
        _id: "12345693",
        cid: "12345693",
        name: "PPP",
        type: 1,
        code: 12345693,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-24",
        voteStart: "2016-05-25 18:54",
        voteEnd: "2016-05-25 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345694",
        cid: "12345694",
        name: "QQQ",
        type: 1,
        code: 12345694,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-24",
        voteStart: "2016-05-25 18:54",
        voteEnd: "2016-05-25 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345695",
        cid: "12345695",
        name: "RRR",
        type: 1,
        code: 12345695,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-24",
        voteStart: "2016-05-25 18:54",
        voteEnd: "2016-05-25 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345696",
        cid: "12345696",
        name: "SSS",
        type: 1,
        code: 12345696,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-24",
        voteStart: "2016-05-25 18:54",
        voteEnd: "2016-05-25 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345697",
        cid: "12345697",
        name: "TTT",
        type: 1,
        code: 12345697,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-24",
        voteStart: "2016-05-25 18:54",
        voteEnd: "2016-05-25 18:56",
        files: [],
        questions: [],
        vote: []
    }, {
        _id: "12345698",
        cid: "12345698",
        name: "UUU",
        type: 1,
        code: 12345698,
        representative: "李四",
        cfo: "",
        address: "上海市市辖区闵行区东川路800号",
        create: "2016-01-01",
        settlement: "2016-01-01",
        courtName: "上海市市辖区闵行区人民法院",
        judge: {name: "王五", phone: "13888888888"},
        collegiates: [{name: "王五", phone: "13888888888"}, {name: "王五", phone: "13888888888"}, {
            name: "王五",
            phone: "13888888888"
        }],
        note: {name: "王五", phone: "13888888888"},
        expire: "2016-05-24",
        voteStart: "2016-05-25 18:54",
        voteEnd: "2016-05-25 18:56",
        files: [],
        questions: [],
        vote: []
    }],
    creditor: {name: "张三", role: 1},
    accountant: {name: "李四", role: 7},
    persons: [{
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
    }],

    voteResult: [{
        id: 1,
        name: '公示1',
        yPerson: 5,
        yMoney: 100,
        nPerson: 1,
        nMoney: 50,
        result: 1
    }, {
        id: 2,
        name: '公示2',
        yPerson: 5,
        yMoney: 100,
        nPerson: 10,
        nMoney: 500,
        result: 2
    }, {
        id: 3,
        name: '公示3',
        yPerson: 5,
        yMoney: 10,
        nPerson: 15,
        nMoney: 150,
        result: 2
    }, {
        id: 4,
        name: '公示4',
        yPerson: 15,
        yMoney: 200,
        nPerson: 10,
        nMoney: 150,
        result: 1
    }],
    forms: [{
        id: 1,
        creditor: '张三',
        date: '2016-01-02',
        status: 1
    }, {
        id: 2,
        creditor: '张三',
        date: '2016-01-03',
        status: 2
    }, {
        id: 3,
        creditor: '李四',
        date: '2016-01-03',
        status: 3
    }, {
        id: 4,
        creditor: '王五',
        date: '2016-01-04',
        status: 4
    }, {
        id: 5,
        creditor: '赵六',
        date: '2016-01-05',
        status: 5
    }],
    qas: [{
        id: 1,
        creditor: '张三',
        question: '怎样创建债权申请表?',
        date: '2016-01-02'
    }, {
        id: 2,
        creditor: '李四',
        question: '我要查看债权申请表?',
        date: '2016-01-03'
    }, {
        id: 3,
        creditor: '张三',
        question: '为什么债权申请表还没审核?',
        date: '2016-01-04'
    }],
    dispatches: [{_id: "501", name: "文件1", file: "/processv1.pdf", company: {_id: "111", name: "中国移动"}}, {
        _id: "502",
        name: "文件2",
        file: "/processv1.pdf",
        company: {_id: "112", name: "中国电信"},
        response: {style: 1, text: "同意"}
    }, {_id: "503", name: "文件3", file: "/processv1.pdf", company: {_id: "111", name: "中国移动"}}, {
        _id: "504",
        name: "文件4",
        file: "/processv1.pdf",
        company: {_id: "112", name: "中国电信"}
    }, {_id: "505", name: "文件5", file: "/processv1.pdf", company: {_id: "111", name: "中国移动"}}, {
        _id: "506",
        name: "文件6",
        file: "/processv1.pdf",
        company: {_id: "112", name: "中国电信"}
    }, {_id: "507", name: "文件7", file: "/processv1.pdf", company: {_id: "111", name: "中国移动"}}, {
        _id: "508",
        name: "文件8",
        file: "/processv1.pdf",
        company: {_id: "112", name: "中国电信"}
    }, {_id: "509", name: "文件9", file: "/processv1.pdf", company: {_id: "111", name: "中国移动"}}, {
        _id: "510",
        name: "文件10",
        file: "/processv1.pdf",
        company: {_id: "112", name: "中国电信"}
    }, {_id: "511", name: "文件11", file: "/processv1.pdf", company: {_id: "111", name: "中国移动"}}, {
        _id: "512",
        name: "文件12",
        file: "/processv1.pdf",
        company: {_id: "112", name: "中国电信"}
    }, {_id: "513", name: "文件13", file: "/processv1.pdf", company: {_id: "111", name: "中国移动"}}],
    homepage_ad: [
        {_id: "ad1", pic: "/pics/IMG_3529.jpg"},
        {_id: "ad2", pic: "/pics/IMG_3577.jpg"},
        {_id: "ad4", pic: "/pics/IMG_3595.jpg"},
        {_id: "ad3", pic: "/pics/IMG_3598.jpg"},
        {_id: "ad5", pic: "/pics/IMG_3601.jpg"}
    ],
    news: [
        {
            _id: "news1",
            title: "访问量统计工具 Hit Kounter v0.2",
            date: "2016-04-24",
            text: ["Hit Kounter 是一个简单的访问量统计工具。据我从数据库里的数据目测，现在已经拥有了 9 位用户！不过我要对这九位用户说声抱歉啦。",
                "Hit Kounter 原本部署于 SAE 上，而近期 SAE 针对使用 MySQL 的应用开始收费。本项目只是一个本人使用业余时间开发的小工具；它本身包含的功能也很精简，并不适合使用付费服务。所以我已经将 Hit Kounter 服务迁移至 LeanCloud 上。原本部署在 SAE 上的服务预计在 五一假期 后下线，对已经使用 Hit Kounter 的一些用户，我再次表达我的歉意！",
                "由于此次改版改动比较大，我是 fork 了一份代码出来进行修改的；改版后的 Hit Kounter 在 Github 上仓库地址是 zry656565/Hit-Kounter-LC，区别于原来的 Hit Kounter PHP 版：zry656565/Hit-Kounter"],
            imgs: []
        }, {
            _id: "news2",
            title: "Kinect 数据录制与回放",
            date: "2016-03-21",
            text: ["最近在实验室用深度相机做一些三维重建的研究，主要的实验场景在宝山区的仓库。学校到仓库的来回车程大概有三四个小时，如果每次都要到实际场景中来测试算法，这真是着实令人头疼。所以我想着，如果能用 Kinect 把仓库中的场景录制下来，回来直接用录好的数据来测试算法，那不就不用来回跑了吗？接下来就来讲讲如何完成这件事。",
                "录制数据相对来说比较简单，我们只需要借助 Kinect for Windows SDK 自带的 Kinect Studio 就可以达成这一目的。",
                "你可以依照下图的三个小步骤来录制你想要的场景数据；等录制完毕以后，你可以在 C:\\Users\\${你的用户名}\\Documents\\Kinect Studio\\Repository 下找到你录制好的 xef 文件，比如我刚刚录制的 20160317_111153_00.xef",
                "实现回放的原理： 我们在正常使用 Kinect 的过程中，每当 Kinect 采集到一帧画面，就会触发一下 FrameArrived 事件。而我们写的程序总是会通过一个 FrameReader 来响应每一帧画面所触发的事件。所以只要通过读取 xef 文件中的数据，模拟触发 FrameArrived 事件；从而做到几乎不修改原本的代码，就能在原来程序中回放录制的场景。",
                "正常来说，xef 文件只能在 Kinect Studio 中播放出来。不过 Kinect 开发小组的成员 Carmine 在 MSDN 上发布了一些能够读取 xef 的示例代码。接下来我就来讲解一下具体的步骤：",
                "接下来，你需要编写一些代码来调用回放的功能。以官方的例子 DepthBasics-WPF 为例，首先你需要定义一个新的类，并在这个类中定义一个静态方法，如下所示：",
                "最后，你需要在现有的代码中使用 PlaybackHelper.PlaybackClip 方法来帮助你回放之前的数据。此处的示例代码在检测不到 Kinect 设备时会 启用一个新线程 来回放指定的数据，并指定循环回放 10 次，你可以根据需要进行修改。",
                "完成了以上这些以后，拔掉你的 Kinect 并重启你的程序。如果程序依然能够很顺利的执行，那么恭喜你，你成功啦！"],
            imgs: []
        }, {
            _id: "news3",
            title: "为你的博客添加访问量统计",
            date: "2016-02-27",
            text: ["相信很多程序员朋友们都拥有了自己的技术博客。像 Hexo, Jekyll 这样的静态网站生成器甚是好用，而对于相对动态的内容，比如评论框，也有诸如多说和 Disqus 的工具可以使用。",
                "但是针对博客的访问量统计，却没有什么可用的工具。很多同学在我的博客中留言问我，我的博文中显示的访问量是怎么做到的？我曾经尝试依靠百度统计是不是能解决这个问题，然而我失败了。于是我自己用 PHP 写了一个很简单的服务来完成这件事，经过一次重构，我把它命名为 Hit Kounter。"],
            imgs: []
        }, {
            _id: "news4",
            title: "懒人必备的移动端定宽网页适配方案",
            date: "2015-12-08",
            text: ["如今移动设备的分辨率纷繁复杂。以前仅仅是安卓机拥有各种各样的适配问题，如今 iPhone 也拥有了三种主流的分辨率，而未来的 iPhone 7 可能又会玩出什么新花样。如何以不变应万变，用简简单单的几行代码就能支持种类繁多的屏幕分辨率呢？今天就给大家介绍一种懒人必备的移动端定宽网页适配方法。",
                "有过移动端开发经验的同学是不是对上面这句代码非常熟悉？它可能最常见的响应式设计的 viewport 设置之一，而我今天介绍的这种方法也是利用了 meta 标签设置 viewport 来支持大部分的移动端屏幕分辨率。"],
            imgs: []
        }, {
            _id: "news5",
            title: "记一次作死 —— 被 Leetcode 封禁",
            date: "2015-11-26",
            text: ["从昨天凌晨四点起，我的 Leetcode 账号就无法提交任何代码了，于是我意识到我的账号大概是被封了……",
                "我和我的同学 @xidui 正在维护一个项目 xidui/algorithm-training。其实就是收录一些算法题的解答，目前主要对象就是 Leetcode。我前几天正好做到 #17 Letter Combinations of a Phone Number。题目也蛮简单的，我写好以后提交了一下，发现跑出来的结果是 152 ms —— “哇哦，你打败了 2.44% 的提交”。好差！！我瞬间满脸黑线。而之前提到的项目中正好有另一个同学写的关于这一题的解答，我赶紧去参考了一下，感觉空间复杂度比我小很多，但时间复杂度应该差不多呀，然后注释中有这么一句：",
                "不信邪的我把这位同学的代码复制过来提交了一下，得到的结果是 —— 160ms…“哇哦，你打败了 2.44% 的提交哦！” ╮(╯_╰)╭",
                "看了看 Discuss 里的解法，感觉复杂度似乎也差不多，于是我决定研 (Zuo) 究 (Si) 一下 Leetcode OJ 服务的稳定性如何。",
                "打开 Chrome 的开发者工具，发现只有 submit 和 check 两种 ajax 请求，response 内容大概是这样的：",
                "所以只要先模拟一个 submit 的 POST 请求，拿到 submission_id 后，再用这个 id 模拟 check 的 GET 请求，直到拿到最终的结果。",
                "我直接把之前发送的两个 ajax 请求用 Curl 的形式保存下来：（感谢 Chrome ╰(￣▽￣)╮)",
                "然后我写了个 Nodejs 的小程序，每隔一分钟调用上面保存的两个脚本来进行一次提交，并把当次的执行速度保存到 Mongodb 中。代码我就不贴啦，有兴趣的话可以到 zry656565/Leetcode-Benchmark 看看。",
                "这个程序大概是在十一点左右的时候开始运行的。本以为一分钟一次的频率并不高，结果第二天起来一看，从凌晨四点多开始就没有数据了，自此我这个账号就提交不了代码了。。",
                "当然啦，采集到了 300 多条数据也不能白费了，画个图出来看看吧。任意一个节点所提交的程序片段都是同一个，大概最终的结果是这样的：",
                "(⊙o⊙)…本来想着是不是能找到某个 Leetcode 的服务器稍微稳定一点的时刻，不过似乎并不存在这样的时刻呢。呵呵，然并卵。不过好消息是，在事件发生的二十四小时以后，我发现我的账号解禁了，哈哈哈哈。"],
            imgs: [{place: 0, src: "/pics/IMG_3529.jpg"}, {place: 0, src: "/pics/IMG_3577.jpg"}, {
                place: 2,
                src: "/pics/IMG_3595.jpg"
            }, {place: 11, src: "/pics/IMG_3601.jpg"}]
        }, {
            _id: "news6",
            title: "Webhook 实践 —— 自动部署",
            date: "2015-10-25",
            text: ["Webhook，也就是人们常说的钩子，是一个很有用的工具。你可以通过定制 Webhook 来监测你在 Github.com 上的各种事件，最常见的莫过于 push 事件。如果你设置了一个监测 push 事件的 Webhook，那么每当你的这个项目有了任何提交，这个 Webhook 都会被触发，这时 Github 就会发送一个 HTTP POST 请求到你配置好的地址。",
                "如此一来，你就可以通过这种方式去自动完成一些重复性工作；比如，你可以用 Webhook 来自动触发一些持续集成（CI）工具的运作，比如 Travis CI；又或者是通过 Webhook 去部署你的线上服务器。",
                "Github 开发者平台的文档中对 Webhook 的所能做的事是这样描述的：",
                "我目前正好面临了这样一个问题 —— 麻烦的人肉部署。也许有人看过我之前的一篇博文《解决 Github Pages 禁止百度爬虫的方法与可行性分析》。为了解决文章中的这个问题，我最后建立了一个只服务于百度爬虫的一个备份服务器。但是随之而来的问题是，每次我的博客有些更新，都不得不 ssh 到那台服务器上把代码 pull 下来。如此做了两三次以后，我觉得我不能再这么堕落下去，于是还是决定尝试一下 Webhook。",
                "于是我要完成的事情便是完成一个能够将我最新版本的博客，随时同步到备份服务器的 Webhook。简单分析一下我需要什么：",
                "什么叫外网可访问的主机？像阿里云的试用版就不行，它不提供外网 IP。而我使用的是 DigitalOcean 的云主机，主要的作用是架梯子，现在也顺便用来做备份服务器。当然你们也可以用类似 SAE 的服务，虽然没有 IP，但有独立的外网访问地址。",
                "为了响应 Webhook 所发出的请求，从而做一些我们想做的事情，我们得先实现一个响应服务器。本文采用 Node 来实现一个原型，你当然也可以用 PHP，python 等，全凭个人喜好啦。代码很短，就直接陈列在下方了：",
                "如果还需要实现更多，更复杂的功能，直接在 commands 数组中添加便是。此处我的博客根目录 html 与部署服务器根目录同属一个目录，所以配置常量 PATH = '../html'。只要启动了服务器，那么 Webhook 就可以通过类似于 http://104.236.xxx.xxx:9988/deploy/ 的路径来部署我的博客备份啦。",
                "我以为服务器部署到这儿就完了，其实并没有，我遇到了一些麻烦。",
                "我在实际使用的时候发现，我的 Node 服务器时不时会自动停掉，具体原因我暂时还没有弄清楚。不过似乎很多人都遇到了这样的困扰，要解决这个问题，forever 是个不错的选择。借助 forever 这个库，它可以保证 Node 持续运行下去，一旦服务器挂了，它都会重启服务器。",
                "我在 DigitalOcean 上的服务器安装的是 Ubuntu 系统，而 Ubuntu 中原本就有一个叫 node 的包。为了避免冲突，在 Ubuntu 上安装或使用 Node 得用 nodejs 这个名字。而 forever 默认是使用 node 作为执行脚本的程序名。所以为了处理 Ubuntu 存在的这种特殊情况，在启动 forever 时得另外添加一个参数：",
                "如果像是本文这种最简易的应用，Webhook 的配置是十分简单的。首先进入你的 repo 主页，通过点击页面上的按钮 [settings] -> [Webhooks & service] 进入 Webhooks 配置主页面。也可以通过下面这个链接直接进入配置页面：",
                "此处只需要配置 Webhook 所发出的 POST 请求发往何处即可，于是我们就配置我们所需要的路径： http://104.236.xxx.xxx:9988/deploy/。这个地址指向的就是那个能够响应 Webhook 所发出请求的服务器。",
                "配置好 Webhook 后，Github 会发送一个 ping 来测试这个地址。如果成功了，那么这个 Webhook 前就会加上一个绿色的勾；如果你得到的是一个红色的叉，那就好好检查一下哪儿出问题了吧！"],
            imgs: []
        }, {
            _id: "news7",
            title: "用 CSS 实现三角形与平行四边形",
            date: "2015-08-16",
            text: ["最近在逛某个技术网站的时候，感觉文章关键词上的样式好酷炫啊。于是我将那种写法照搬到了我的博客中，也许最近逛过我博客的小伙伴已经发现了它出现在哪儿了——分页的样式。来张截图：",
                "你在首页的底部也可以看到这样一个分页栏；是不是看上去还不错？下面就来看看这是如何实现的吧~",
                "第一种方法是借助border属性 hack 出三角形，然后通过一个矩形拼接两个三角形最终制造出一个平行四边形。为什么使用border可以产生三角形呢？先来看看一张图片：",
                "看了图中的三个小图形的变化过程，你应该已经清楚了一半。其实 hack 出三角形只需要两个条件，第一，元素本身的长宽为0；其次，将不需要的部分通过 border-color 来设置隐藏。通过类似的方法，你还可以创造出梯形，上图中的三个图形的代码如下。（另附 CodePen 示例）",
                "接下来就要考虑如何拼接出一个平行四边形了。在border法中，它由三部分组成，分别是左三角形、矩形、右三角形。如果每次绘制平行四边形都要创建三个元素显然过于麻烦了，所以在这里:before和:after伪元素是个不错的选择。下面我们实现一下这样的效果：",
                "为了将三角形与矩形无缝拼接到一起，多处属性要保持一致，所以使用类似 Less, Sass, Stylus 等 CSS 预处理器来写这段代码会更容易维护，下面给出 Scss 版本的代码。",
                "需要注意的是，如果通过 $height、$width 设置的三角形斜率太小或太大都有可能造成渲染出锯齿，所以使用起来要多多测试一下不同的宽高所得到的视觉效果如何。",
                "使用transform来实现平行四边形的方法是我在逛去啊的时候看到的，效果大概是这个样子：",
                "看到之后觉得好神奇啊，原来还可以只有平行四边形的外轮廓。（因为方法一只能创造填充效果的平行四边形）实现起来非常简单，主要是借助了transform: skew(...)，下面就来看看源码吧。",
                "别着急嘛，我们的确是把整个 div 进行了歪曲，导致中间的文字也是倾斜的，而这显然不是我们所要的效果。所以我们需要加一个内层元素，并对内层元素做一次逆向的歪曲，从而得到我们想要的效果：",
                "第一种方法使用 border 属性 hack 出三角形，并通过对三个元素进行拼接最终实现了平行四边形；而第二种方法则通过 transform: skew 来得到平行四边形。总体来说，第二种方法相对于第一种代码量小得多，而且也很好理解。唯一的不足是无法构造像本站的分页中所使用的梯形。希望本文对各位有所帮助。"],
            imgs: []
        }, {
            _id: "news8",
            title: "给迷茫的自学者指一条路",
            date: "2015-07-16",
            text: ["不管是从零开始接触编程，还是从大学踏入社会，一个人踏入一个全新的领域时总是会产生迷茫的感觉。这篇文章的目的不在于教授自学者们学习的方法，而仅仅是把我自己的一些学习和总结的方法分享出来以供参考，希望对你们有所帮助。",
                "我会以四个角度给你们介绍四个工具，XMind、Trello、Pocket 和 Evernote；我相信这些工具大家也大多耳熟能详，而我会讲述我是如何使用这些工具，以及这些工具是如何相辅相成的。可能因为我接触前端领域的知识较多，例子中也会以前端为主，但知识和方法都是相通的，所以这应该也不会成为什么大问题。"],
            imgs: []
        }, {
            _id: "news9",
            title: "解决 Github Pages 禁止百度爬虫的方法与可行性分析",
            date: "2015-06-08",
            text: ["我写技术博客有两个原因：一是总结自己近日的研究成果，二是将这些成果分享给大家。所以就我个人来说，还是比较希望写出来的文章有更多的人能够看到的。我最近注意到我的博客的流量大多来自于谷歌，而几乎没有来源于百度的。而本文就旨在提出这个问题，并尝试着去解决这个问题。当然，换一个云主机服务提供商能够很直接明了地解决这个问题，但这不是本文的重点，暂且不提。",
                "就这个问题，我联系了 Github Support 部门，对方给我的答复是这样的：",
                "简单地来说，就是百度爬虫爬得太猛烈，已经对很多 Github 用户造成了可用性的问题了，而禁用百度爬虫这一举措可能会一直持续下去。（不知道跟之前的 Great Cannon有没有关系）",
                "因此，只能自己动手丰衣足食了，下面来讨论一下解决这个问题的方式。",
                "我在知乎提了这样一个问题：如何解决百度爬虫无法爬取搭建在Github上的个人博客的问题？，并且 Stackoverflow 上也有类似的问题：github blocks Baidu spider, how can I make it work again。两位知乎答主和Stackoverflow的评论都比较推荐使用 CDN 来解决这个问题。",
                "那我们首先来了解一下 CDN 的原理。",
                "CDN 的全称是 Content Delivery Network，即内容分发网络，一般用于分发静态内容，比如图片、视频、CSS、JS文件。",
                "如果不使用 CDN，那所有用户的请求都会直接导向单一的源服务器(Origin Server)。而如果启用了 CDN 服务，那么 CDN 服务提供商会分配给你若干个节点，这里以上图为例，比如分配给你的服务器 3 个东海岸的节点和 3 个西海岸的节点。",
                "此时用户就不会直接向源服务器发送请求，而是向边缘服务器(Edge Server)发送请求。再看下面这张示意图，当你第一次访问资源 foo.png 时，边缘服务器没有 foo.png 的缓存。所以会由它向源服务器发送请求，并获取到 foo.png。下一次所有经过这个节点的请求，因为存在缓存的缘故，都不用再次向源服务器发送请求，而是由边缘服务器直接返回该文件的缓存即可。这样一来就可以大大降低时延，也减小了源服务器的压力。",
                "那 CDN 服务是如何决定你从哪个边缘服务器获取资源的呢？其实就是在发送 DNS 请求的时候，将你要访问的域名映射到最近的节点的 IP 上。具体判定哪个是最近的节点，最简单的策略就是根据 IP，但各个 CDN 的服务提供商的策略可能各不相同，这里就不展开讨论了。",
                "CDN 确实能够解决不少问题，但它本身也存在一定的局限性。其中最重要的一点是：决不能用 CDN 来缓存动态内容。",
                "来看一个例子，假设服务器端有这样一个PHP文件 hello.php：",
                "如果 CDN 缓存了这个文件就会造成很糟糕的后果。比如 Jerry 先访问了 hello.php 页面，得到了 Hello, Jerry 的内容。此时这个内容已经被缓存到了节点 A，而 Tom 同学也是离节点 A 最近，那么 Tom 同学访问 hello.php 时，就会直接得到缓存内容：Hello, Jerry。这个时候 Tom 同学的内心一定是崩溃的。",
                "你还应该避免使用 CDN 的情况有：根据 user-agent 来选择返回移动版还是桌面版页面。UA 判断这对解决我们的问题很重要，下文会提及。当然，部署在 Github Pages 上的网站都是静态站点，所有用户进来看到的内容一般是相同的。所以通过 CDN 来对全站进行缓存没有什么问题。",
                "Github是通过 UA 来判定百度爬虫并返回 403 Forbidden 的。而百度爬虫的 UA 一般是这样的：",
                "那么使用 CDN 来解决这个问题的关键就在于，让百度爬虫不要直接向 Github 的服务器发送请求，而是通过 CDN 边缘服务器的缓存来抓取网站的内容。边缘服务器本身是不会关心 UA 的，所以问题就迎刃而解了。",
                "可是问题真有这么简单吗？",
                "来看一下，我使用百度站长工具来进行抓取诊断的测试结果：",
                "结果是只有偶尔能够抓取成功，结果很让人失望吧？让我们来分析以下原因，首先罗列我目前可知的一些情况：",
                "好了，细心的同学应该已经发现问题所在了，百度爬虫大部分的请求被导到了 209.9.130.6 节点，但是这个节点上没有页面的缓存！！如果百度爬虫是某个页面的第一个访问者，CDN 的边缘服务器会用百度爬虫的 UA 去请求 Github 的服务器，得到的结果自然是被拒绝了。",
                "最终我们得到了通过 CDN 来解决这个问题的必要条件：你的博客必须有巨大的访问量！这样才能保证 CDN 的每一个边缘服务器上都有任何一个页面的缓存。我觉得除非像React主页这样的网站，不然要达到这个要求几乎不可能的。",
                "最后，一句话总结：CDN 这一解决方案并不靠谱。",
                "当然，不死心的我还是做了件奇怪的事……首先我在找到了所有 BaiduSpider 的 IP，然后想要伪装成这些 IP 来请求内容，以此想在所有百度爬虫可能爬取的边缘服务器上都建立缓存。",
                "然而并没有卵用……",
                "通过 Dnspod 的智能 DNS 服务可以变相解决这个问题，大概的设置如下图所示，只要为你所有的主机记录重复添加 A 记录，把线路类型设置为百度，并将记录值指向你自己的云主机即可。",
                "你说什么？？等下！！自己的云主机？？没错，其实这种方式就是专门为百度的爬虫增开了一个小窗口，使得它可以在你自己的服务器上爬取内容，而不是直接去爬取 Github Pages的内容。你需要自己搭个服务器，并将你的静态网站架在上面，具体怎么做就不在这篇文章中赘述啦。有兴趣的同学可以自己尝试，或者发邮件咨询我也是可以的哦。",
                "如果没有自己的服务器，而且又想要解决这个问题的同学，推荐大家看 Dozer 的一篇文章：利用 CDN 解决百度爬虫被 Github Pages 拒绝的问题",
                "如果大家自己搭了服务器，可以参考一下我上个月写的这篇：Webhook 实践 —— 自动部署"],
            imgs: []
        }, {
            _id: "news10",
            title: "深入剖析 JavaScript 的深复制",
            date: "2015-05-27",
            text: ["一年前我曾写过一篇 Javascript 中的一种深复制实现，当时写这篇文章的时候还比较稚嫩，有很多地方没有考虑仔细。为了不误人子弟，我决定结合 Underscore、lodash 和 jQuery 这些主流的第三方库来重新谈一谈这个问题。"],
            imgs: []
        }, {
            _id: "news11",
            title: "论 CSS 中的逻辑",
            date: "2015-05-21",
            text: ["在过去的很长一段时间中，我们都说 CSS 是不带有任何逻辑的，意思是在 CSS 中没有控制流，也没有某种类似于其他编程语言的方式来组织 CSS。CSS 天生缺乏逻辑性的问题导致了预处理器的出现。然而业界却对 CSS 预处理器褒贬不一，支持预处理器的人认为这弥补了 CSS 缺失的特性；而反对预处理器的人则认为 CSS 的设计初衷就不应该带有逻辑性，他们认为根本不应该引入预处理器这个概念。",
                "然而，一种独特的思考方法最近突然蹦入了我的脑袋。它让我感到 CSS 确实拥有逻辑性！很少有人真正那么想过，这大概也是我们一直认为 CSS 的逻辑性匮乏的最大原因吧。",
                "在这个复合选择器由主体部分是 span，而条件部分是 IF (inside .btn) AND IF (on a) AND IF (inside .login-box) AND IF (inside .sidebar) AND IF (on div)。",
                "也就是说，一个选择器的每一部分都是一个 if 语句，需要在解析选择器时被满足（或者不满足）。有了这种微妙的而又全新的认识，如今我们回头再看看自己曾经写出的 CSS 代码，我们将会意识到选择器写的好或者坏，会对效率产生直接的影响。我们真的会写出下面这段逻辑吗？（伪代码）：",
                "也许不会。这看上去太不直接，也太啰嗦了。我们也许只需要这么写：",
                "每当为选择器添加一层限制，其实我们也就是添加了额外的一个 if 语句。这会导致圈复杂度问题(Cyclomatic Complexity)。",
                "从圈复杂度的角度来思考 CSS 的解析过程，我们可以看到浏览器在渲染样式之前需要做许多的决定。我们写的选择器中的 if 语句越多，这个选择器的圈复杂度就越高，这也意味着我们写的选择器越糟糕，为了使得这一条选择器规则满足，就有需要匹配更多的条件。同时，我们写的选择器也会缺乏清晰度和复用性，因为引入了过多不必要的 if 语句会导致不准确的匹配(false positive)。",
                "相比于将 span 嵌套于 .btn 内部并写一大堆限制条件，更好地做法应该是创建一个新的类 .btn-text 来描述这个 span。这样做更加直截了当，同时也更为简洁和健壮（越多的 @if 语句导致选择器规则越不容易被满足）。",
                "值得注意的是浏览器解析你写的选择器的方式：从右向左。如果你在写你的选择器时，第一个想到的问题是：“这是一个 span 元素吗？” 那你通常就会把选择器写的过于冗繁。你应该从另一个角度思考，写出清晰准确的选择器规则，彻底摒弃那些冗余的条件语句。",
                "请不要写过于宽泛的规则，导致你写的选择器在匹配开始时就选中大量的 DOM 元素——然后不得不逐步通过更多的条件语句来删减匹配的对象。从选择器的规则解析的一开始就匹配尽量少的元素才是一种更棒的方法。",
                "圈复杂度对于 CSS 来说可能是一种比较高阶的原则，但如果我们通过它来考量那些蕴含在我们写的选择器中的逻辑性，那我们也许就能写出更加优秀的代码。"],
            imgs: []
        }
    ]
};