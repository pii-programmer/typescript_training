//クラスベースのオブジェクト指向でプログラミングしてみる
//アクセス修飾子privateは、クラス外には呼び出せない
//クラスには、変数とメソッドをまとめておける
var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this._name); //クラス内の変数を呼ぶ時は this を使う
    };
    return User;
}());
;
var ami = new User("Ami"); //インスタンス化する
console.log(ami._name); //変数_nameはprivateなのでクラス外には呼び出せない
ami.sayHi(); //メソッドsayHiはpublicなのでクラス外でも呼び出せる
//実行結果は下記
//error
