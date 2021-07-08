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
var v3 = new MyData({ a: 40, b: 50 });
console.log(v3.getArray());
//実行結果は
//[ {a: 40, b: 50}, {a: 40, b: 50}, {a: 40, b: 50} ]
