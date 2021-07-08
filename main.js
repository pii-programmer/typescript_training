//Genericsに制約を付ける
//Tは何でも良いが、aとbのプロパティを持ったものじゃないと実行できないという制約を作る。
var MyData = /** @class */ (function () {
    function MyData(value) {
        this.value = value;
    }
    MyData.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData;
}());
//呼び出しの時に型を指定すれば、インターフェースが複数あっても大丈夫。今回はFinalResultの制約を使っている。
var v4 = new MyData({ a: 40, b: 50, c: "Hello" });
console.log(v4.getArray());
//実行結果は
//[ {a: 40, b: 50, c:"Hello"}, {a: 40, b: 50, c:"Hello"}, {a: 40, b: 50, c:"Hello"} ]
