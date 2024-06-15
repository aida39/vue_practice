const vm = new Vue({
    el: '#app',
    data() {
        return {
            fontSize: {
                'font-size': '20px',
                'color': null,
            }
        }
    },
    methods: {
        changeFontSize() {
            // ハイフンを含む場合、ドット記法で直接アクセスすることはできない
            this.fontSize['font-size'] = '50px';
        },
        changeColor() {
            // ドット記法で表記が可能、this.fontSize.color
            this.fontSize['color'] = 'red';
        },
        resetStyle() {
            this.fontSize = {
                'font-size': '20px',
                'color': null,
            };
        }
    }
});