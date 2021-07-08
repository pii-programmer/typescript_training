//Generics：抽象化されたデータ型
//関数だけでなく、クラスやインターフェースにもGenericsを行える
//具体例：
var MyData = /** @class */ (function () {
    function MyData(value) {
        this.value = value;
    }
    MyData.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData;
}());
var v1 = new MyData("Hello"); //インスタンスを生成
console.log(v1.getArray());
var v2 = new MyData(3); //インスタンスを生成
console.log(v2.getArray());
//実行結果は
//[ 'Hello', 'Hello', 'Hello' ]
//[ 3, 3, 3 ]
