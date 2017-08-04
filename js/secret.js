var secret = new Vue({
    el: '#secret',
    methods: {
        showKeys: function () {
            // since there's only one address in wallet, it's just a placeholder now.
            sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "getwalletkey", "params": [this.address], "id": 0});
        }
    }
});