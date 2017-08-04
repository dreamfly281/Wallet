var regTx = new Vue({
    el:'#regTx',
    data: {
        assetName: '',
        assetAmount: ''
    },
    computed: {
        illegalAssetName: function () {
            return !VerifyAssetName(this.assetName);
        },
        illegalAssetAmount: function () {
            return !VerifyAssetAmount(this.assetAmount);
        },
        illegalParameter: function () {
            return (this.illegalAssetName || this.illegalAssetAmount)
        }
    },
    methods:{
        regTransaction: function () {
            if (this.illegalParameter) {
                state.Show('alert-danger', 'invalid transaction information');
                return;
            }
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "makeregtxn", "params": [this.assetName, parseFloat(this.assetAmount)], "id": 0});
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
    computed: {
        illegalAssetID: function () {
            return !VerifyAssetID(this.assetid);
        },
        illegalAssetAmount: function () {
            return !VerifyAssetAmount(this.amount);
        },
        illegalAssetReceiver: function () {
            return !VerifyAssetReceiver(this.to);
        },
        illegalParameter: function () {
            return (this.illegalAssetID || this.illegalAssetAmount || this.illegalAssetReceiver);
        }
    },
    methods:{
        issueTransaction: function () {
            if (this.illegalParameter) {
                state.Show('alert-danger', 'invalid transaction information');
                return;
            }
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
    computed: {
        illegalAssetID: function () {
            return !VerifyAssetID(this.assetid);
        },
        illegalAssetAmount: function () {
            return !VerifyAssetAmount(this.amount);
        },
        illegalAssetReceiver: function () {
            return !VerifyAssetReceiver(this.to);
        },
        illegalParameter: function () {
            return (this.illegalAssetID || this.illegalAssetAmount || this.illegalAssetReceiver);
        }
    },
    methods:{
        transferTransaction: function () {
            if (this.illegalParameter) {
                state.Show('alert-danger', 'invalid transaction information');
                return;
            }
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "maketransfertxn", "params": [this.assetid, parseFloat(this.amount), this.to], "id": 0});
        }
    }
});

var broadcastTx = new Vue({
    el:'#broadcastTx',
    data: {
        rawTxn: ''
    },
    methods:{
        broadcastRawTxn:function () {
            sendRequest(ChainServer, {"jsonrpc": "2.0", "method": "sendrawtransaction", "params": [this.rawTxn], "id": 0});
        }
    }
});