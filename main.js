//インターフェースとクラスを組み合わせる
//Interface -> Class
//これがクラスの定義
var User = /** @class */ (function () {
    function User(name) {
        this.score = 0; //変数scoreに初期値を設定してあげる
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    User.prototype.showScore = function () {
        console.log("score " + this.score); //メソッドshowScoreの処理内容を設定している
    };
    return User;
}());
