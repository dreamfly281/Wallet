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
           openWallet.walletOpen = false;
           window.clearInterval(openWallet.timer);
       }
    }
});

var createWallet = new Vue({
    el: '#createWallet',
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

var openWallet = new Vue({
    el:'#openWallet',
    data:{
        walletOpen: false,
        walletPassword: '',

        showAsset: false,       // will not show asset by default

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
                if (openWallet.address === '') {
                    state.Show('alert-danger', 'RPC error');
                } else {
                    sendRequest(config.UtxoServer, {"jsonrpc": "2.0", "method": "searchtransactions", "params": [openWallet.address], "id": 0});
                    sendRequest(config.UtxoServer, {"jsonrpc": "2.0", "method": "searchassets", "params": [openWallet.address], "id": 0});
                }
            }, blockTime);
        },
        showDetailedTxn: function (txid) {
            sendRequest(config.UtxoServer, {"jsonrpc": "2.0", "method": "getrawtransaction", "params": [txid], "id": 0});
        },
        showKeys: function () {
            // since there's only one address in wallet, it's just a placeholder now.
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "getwalletkey", "params": [this.address], "id": 0});
        }
    }
});

var recoverWallet = new Vue({
    el: '#recoverWallet',
    data: {
        privateKey: '',
        password1: '',
        password2: ''
    },
    methods: {
        recover: function () {
            //TODO: regx verify password
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "recoverwallet", "params": [this.privateKey, this.password2], "id": 0});
            this.privateKey = this.password1 = this.password2 = '';
        }
    }
});
