var dialog = new Vue({
    el: '#dialog',
    data: {
        title: '',
        message: ''
    }
});

function DisplayDialog($title, $message) {
    dialog.title = $title;
    dialog.message = $message;
}