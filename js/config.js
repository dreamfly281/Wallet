var WorkerServer = 'http://127.0.0.1:10999';
var config = new Vue({
    el: '#settings',
    data: {
        UtxoServer: 'http://13.124.13.184:10337',
        servers: [
            { name: 'aws (13.124.13.184:10337)', address: 'http://13.124.13.184:10337' },
            { name: 'localhost:10337', address: 'http://127.0.0.1:10337' },
            { name: 'google cloud (35.189.182.223:10337)', address: 'http://35.189.182.223:10337' }
        ]
    }
});