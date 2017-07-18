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

        assetButton: 'Show Assets',

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
                    }
                }, blockTime);
        },
        searchAssets: function () {
            sendRequest(config.UtxoServer, {"jsonrpc": "2.0", "method": "searchassets", "params": [this.address], "id": 0});
            this.showAsset = !this.showAsset;
            if (this.showAsset == true) {
                this.assetButton = 'Hide Assets';
            } else {
                this.assetButton = 'Show Assets';
            }
        },
        showDetailedTxn: function (txid) {
            sendRequest(config.UtxoServer, {"jsonrpc": "2.0", "method": "getrawtransaction", "params": [txid], "id": 0});
        }
    }
});
