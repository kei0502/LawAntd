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
            address1: 110000,
            address2: 110100,
            address3: 110101,
            address: "东川路800号",
            reason: "商业借贷",
            rule: false,
            claim_type: 3,
            currency: "5731d29ea8dba6fc21a1cc05",
            principal: 10000,
            claim_information: "无",
            attachments: [],
            display: "债权申请书1",
            state: 1
        }]
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
        voteEnd: "2016-05-22 18:56"
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
        voteEnd: "2016-05-23 18:56"
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
        voteEnd: "2016-05-24 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteStart: "2016-05-25 18:54",
        voteEnd: "2016-05-30 18:56"
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
        voteStart: "2016-05-25 18:54",
        voteEnd: "2016-05-30 18:56"
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
        voteEnd: "2016-05-18 18:56"
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
        voteEnd: "2016-05-18 18:56"
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
        voteEnd: "2016-05-18 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteEnd: "2016-05-25 18:56"
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
        voteEnd: "2016-05-25 18:56"
    }],
    creditor: {name: "张三", role: 1},
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
};