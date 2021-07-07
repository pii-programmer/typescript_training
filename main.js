//クラスベースのオブジェクト指向でプログラミングしてみる
//クラスには、変数とメソッドをまとめておける
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this.name); //クラス内の変数を呼ぶ時は this を使う
    };
    return User;
}());
;
var ami = new User("Ami"); //インスタンス化する
console.log(ami.name); //変数nameにもアクセスできるし
ami.sayHi(); //メソッドsayHiにもアクセスできる
