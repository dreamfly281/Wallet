var isOpen = false;
var WorkerServer = 'http://127.0.0.1:10999';
var UtxoServer = 'http://35.189.182.223:10337';
// var UtxoServer = 'http://127.0.0.1:10337';

function sendRequest(url, jsonObj) {
    var data = JSON.stringify(jsonObj);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
    xhr.onreadystatechange = function () {
        //FIXME: else
        if (xhr.readyState === 4 && xhr.status === 200) {
            var resp = JSON.parse(xhr.responseText);
            responseHandler(jsonObj.method, resp)
        }
    };
}

function responseHandler(method, resp) {
    switch(method){
        case "openwallet":
            OpenWalletResponse(resp);
            break;
        case "createwallet":
            CreateWalletResponse(resp);
            break;
        case "searchassets":
            SearchAssetsResponse(resp);
            break;
        case "makeregtxn":
        case "makeissuetxn":
        case "maketransfertxn":
            MakeTxnResponse(resp);
            break;
        case "sendrawtransaction":
            SendRawTxnResponse(resp);
            break;
        default:
            InvaildMethod();
    }
}

function OpenWalletResponse(resp) {
    if (resp.result != false) {
        openWallet.address = resp.result;
        openWallet.walletOpen = true;
        header.walletOpen = true;
    } else {
        alert("Password Wrong!")
    }
}

function CreateWalletResponse(resp) {
    if (resp.result == true) {
        alert("New wallet is created for you")
    } else {
        alert("Failed to create wallet")
    }
}

function SearchAssetsResponse(resp) {
    openWallet.assets=[];
    for (var key in resp.result) {
        var temp = {
            type: key,
            value: resp.result[key]
        };
        openWallet.assets.push(temp);
    }
}

function MakeTxnResponse(resp) {
    broadcast.rawTxn = resp.result
}

function SendRawTxnResponse(resp) {
    alert("txid: " + resp.result)
}

function InvaildMethod(resp) {
    alert("Invaild JSON method")
}

var header = new Vue({
   el: '#header',
   data:{
       walletOpen: isOpen
   }
});

// wallet operation //
var createWallet = new Vue({
    el: '#createWallet',
    data: {
        path: '',
        password1: '',
        password2: ''
    },
    methods: {
        validateBeforeSubmit: function () {
            //TODO: regx verify password
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "createwallet", "params": ["/tmp/", this.password2], "id": 0});
        }
    }
});

var openWallet = new Vue({
    el:'#openWallet',
    data:{
        walletOpen: isOpen,
        path: '',
        walletPassword: '',
        showAsset: false,       // will not show asset by default
        showTxn: false,       // will not show transactions  by default

        address: '',             // asset address
        assets: [],             // type and value
        assetButton: 'Show Assets',
        txnButton: 'Show Transactions',
        transactions: ''
    },
    methods:{
        openWalletFile: function () {
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "openwallet", "params": ["/tmp/", this.walletPassword], "id": 0});
        },
        searchAssets: function () {
            sendRequest(UtxoServer, {"jsonrpc": "2.0", "method": "searchassets", "params": [this.address], "id": 0});
            this.showAsset = !this.showAsset;
            if (this.showAsset == true) {
                this.assetButton = 'Hide Assets';
            } else {
                this.assetButton = 'Show Assets';
            }
        },
        showTransactions:function () {
            sendRequest(UtxoServer, {"jsonrpc": "2.0", "method": "searchtransactions", "params": [this.address], "id": 0});
            this.showTxn = !this.showTxn;
            if (this.showTxn == true) {
                this.txnButton = 'Hide Transactions';
            } else {
                this.txnButton = 'Show Transactions';
            }
        }
    }
});
// wallet operation //


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
