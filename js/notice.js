Vue.component('wallet-notice', {
    props: ['type', 'message', 'show'],
    template: '#alert'
});

var notice = new Vue({
    el: '#notice',
    data: function () {
        return {
            type: '',
            message:'',
            show: false
        }
    }
});

function PromptUser($type, $message) {
    notice.type = $type;
    notice.message = $message;
    notice.show = true;
}