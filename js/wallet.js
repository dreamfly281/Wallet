var config = require('./config');

var WorkerServer = config.worker;
var ChainServer = config.blockchain;

var header = new Vue({
   el: '#header',
   data:{
       walletOpen: false
   },
    methods:{
       logout: function(){
           if (this.walletOpen == true) {
               sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "closewallet", "params": [], "id": 0});
           }
           this.walletOpen = false;
           open.walletOpen = false;
           window.clearInterval(open.timer);
       }
    }
});

var create = new Vue({
    el: '#create',
    data: {
        password1: '',
        password2: ''
    },
    methods: {
        validateBeforeSubmit: function () {
            //TODO: regx verify password
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "createwallet", "params": [this.password2], "id": 0});
            this.password1 = this.password2 = '';
            return true;
        }
    }
});

var open = new Vue({
    el:'#open',
    data:{
        walletOpen: false,
        walletPassword: '',

        showAsset: true,       // will not show asset by default

        address: '',            // account address
        assets: [],             // asset ID and value
        transactions: [],       // transaction ID and type

        timer: ''               // timer for polling transactions
    },
    methods:{
        openWalletFile: function () {
            const blockTime = 6100;
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "openwallet", "params": [this.walletPassword], "id": 0});
            this.walletPassword = '';
            this.timer = setInterval(function () {
                //TODO: use this.address instead
                sendRequest(ChainServer, {"jsonrpc": "2.0", "method": "searchtransactions", "params": [open.address], "id": 0});
                sendRequest(ChainServer, {"jsonrpc": "2.0", "method": "searchassets", "params": [open.address], "id": 0});
            }, blockTime);
        },
        showDetailedTxn: function (txid) {
            sendRequest(ChainServer, {"jsonrpc": "2.0", "method": "getrawtransaction", "params": [txid], "id": 0});
        }
    }
});

var recover = new Vue({
    el: '#recover',
    data: {
        privateKey: '',
        password1: '',
        password2: ''
    },
    computed: {
        illegalPrivateKey: function () {
            return !VerifyPrivateKey(this.privateKey);
        }
    },
    methods: {
        recover: function () {
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "recoverwallet", "params": [this.privateKey, this.password2], "id": 0});
            this.privateKey = this.password1 = this.password2 = '';
        }
    }
});
