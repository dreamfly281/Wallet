// transaction operation //
var regTx = new Vue({
    el:'#regTx',
    data: {
        assetName: '',
        assetValue: ''
    },
    methods:{
        regTransaction: function () {
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "makeregtxn", "params": [this.assetName, parseFloat(this.assetValue)], "id": 0});
        }
    }
});

var issueTx = new Vue({
    el:'#issueTx',
    data: {
        assetid: '',
        amount: '',
        to:''
    },
    methods:{
        issueTransaction: function () {
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "makeissuetxn", "params": [this.assetid, parseFloat(this.amount), this.to], "id": 0});
        }
    }
});

var transferTx = new Vue({
    el:'#transferTx',
    data: {
        assetid: '',
        amount: '',
        to:''
    },
    methods:{
        transferTransaction: function () {
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "maketransfertxn", "params": [this.assetid, parseFloat(this.amount), this.to], "id": 0});
        }
    }
});

var broadcast = new Vue({
    el:'#broadcast',
    data: {
        rawTxn: ''
    },
    methods:{
        braadcastRawTxn:function () {
            sendRequest(UtxoServer, {"jsonrpc": "2.0", "method": "sendrawtransaction", "params": [this.rawTxn], "id": 0});
        }
    }
});
// transaction operation //