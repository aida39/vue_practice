// 花占い
new Vue({
  el: "#app",
  data: {
    count: Math.ceil(Math.random() * 10),
    isLike: "好き",
  },
  computed: {
    isLikeStyle() {
      return this.count === 0
        ? {
            color: "red",
            fontSize: "30px",
          }
        : {};
    },
  },

  methods: {
    flower() {
      if (this.count === 0) {
        alert("花びらがなくなりました");
      } else {
        this.count--;
        this.isLike = this.isLike === "好き" ? "嫌い" : "好き";
      }
    },
  },
});
