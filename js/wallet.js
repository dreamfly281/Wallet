var isOpen = false;

var header = new Vue({
   el: '#header',
   data:{
       walletOpen: isOpen
   },
    methods:{
       logout: function(){
           sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "closewallet", "params": [], "id": 0});
           this.walletOpen = false;
           openWallet.walletOpen = false;
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
        walletOpen: isOpen,
        walletPassword: '',

        showAsset: false,       // will not show asset by default
        showTxn: false,         // will not show transactions  by default

        address: '',            // account address
        assets: [],             // asset ID and value
        transactions: [],       // transaction ID and type

        assetButton: 'Show Assets'
    },
    methods:{
        openWalletFile: function () {
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "openwallet", "params": [this.walletPassword], "id": 0});
            this.walletPassword = ''
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
        showTransactions:function () {
            sendRequest(config.UtxoServer, {"jsonrpc": "2.0", "method": "searchtransactions", "params": [this.address], "id": 0});
        }
    }
});
