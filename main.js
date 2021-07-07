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
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        //privateだけどクラス外で変数nameを更新する時はsetterを使う
        set: function (newValue) {
            this._name = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
;
var ami = new User("Ami"); //インスタンス化する
console.log(ami.name);
ami.name = "AMI"; //"AMI"をnewValueに引き渡す
console.log(ami.name); //setterされた変数nameを呼び出す
ami.sayHi(); //メソッドsayHiはpublicなのでクラス外でも呼び出せる
//このままコンパイルするとエラーになるので、%tsc main.ts -t ES5 コマンドで実行する
//実行結果は下記
//Ami
//AMI
//hi! i am Ami
