var Vue = require('vue');
var rpc = require('./rpc');

var secret = new Vue({
    el: '#secret',
    methods: {
        showKeys: function () {
            // since there's only one address in wallet, it's just a placeholder now.
            rpc.sendRequest(WorkerServer, {"jsonrpc": "2.0", "method": "getwalletkey", "params": [this.address], "id": 0});
        }
    }
});

exports.secret = secret;