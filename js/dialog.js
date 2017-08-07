var Vue = require('vue');

var dialog = new Vue({
    el: '#dialog',
    data: {
        title: '',
        message: ''
    },
    methods:{
        Display: function ($title, $message) {
            this.title = $title;
            this.message = $message;
        },
        Clear: function () {
            this.title = '';
            this.message = '';
        }
    }
});

exports.dialog = dialog;