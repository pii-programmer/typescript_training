//クラス
//静的メンバ
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.count++;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this.name); //クラス内の変数を呼ぶ時は this を使う
    };
    User.count = 0; //静的メンバのインスタンスを数える
    return User;
}());
var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count);
//実行結果は下記
//2
