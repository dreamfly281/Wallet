Vue.component('wallet-state', {
    props: ['type', 'message', 'show'],
    template: '#alert'
});

var state = new Vue({
    el: '#state',
    data: function () {
        return {
            type: '',
            message:'',
            show: false
        }
    },
    methods: {
        Show: function ($type, $message) {
            this.type = $type;
            this.message = $message;
            this.show = true;
        }
    }
});