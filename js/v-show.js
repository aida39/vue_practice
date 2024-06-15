const vm = new Vue({
    el: '#app',
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        counter() {
            this.count++;
        }
    }
});