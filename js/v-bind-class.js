const vm = new Vue({
    el: '#app',
    data() {
        return {
            error: 'error-message'
        }
    },
    methods: {
        changeStyle() {
            this.error = 'normal-message';
        }
    }
});