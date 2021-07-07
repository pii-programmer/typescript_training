//関数のオーバーロード（引数や戻り値が異なる同じ名前の関数を宣言できる）
//そのためにシグネチャを作る
//処理
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    return a + b;
}
//呼び出す
console.log(add(5, 3)); //8
console.log(add("hello", "world")); //helloworld
