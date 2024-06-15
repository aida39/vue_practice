const vm = new Vue({
    el: '#app',
    data() {
        return {
            text: '',
        }
    },
    filters: {
        upperfilter: function (value) {
            return value.toUpperCase();
        },
        double: function (value) {
            return value * 2;
        },
    }
});