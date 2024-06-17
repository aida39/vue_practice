const vm = new Vue({
  el: "#app",
  data() {
    return {
      // 配列
      items: ["apple", "banana", "orange", "grape"],
      // オブジェクト
      user: {
        name: "生徒A",
        sex: "男",
        id: "46cfb9ae-89d7-2790-0caa-7e578005ffd6",
      },
      // 配列の中のオブジェクト
      likes: [
        {
          food: "りんご",
          hobby: "読書",
          color: "赤",
        },
        {
          food: "餃子",
          hobby: "麻雀",
          color: "緑",
        },
        {
          food: "フォアグラ",
          hobby: "ダンス",
          color: "ゴールド",
        },
      ],
    };
  },
});
