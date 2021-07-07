//アクセス修飾子protectedは、親クラスに定義することで、継承クラスからもアクセスできるようになる。
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this._name); //クラス内の変数を呼ぶ時は this を使う
    };
    return User;
}());
//クラスの継承の仕方
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(_name, _age) {
        var _this = _super.call(this, _name) || this;
        _this._age = _age; //クラス内の_ageを呼ぶのでthis
        return _this;
    }
    //ここにメソッドをオーバーライドします
    AdminUser.prototype.sayHi = function () {
        console.log("my age: " + this._age); //クラス内の変数を呼ぶ時は this を使う
        console.log("my name: " + this._name); //protectedにしたので、AdminUserクラスでも_nameを呼ぶことができる
        _super.prototype.sayHi.call(this); //親クラスのsayHiメソッドを呼んでいる
    };
    return AdminUser;
}(User));
var bob = new AdminUser("Bob", 23);
bob.sayHi();
//実行結果は下記
//my age: 23
//my name: Bob
//hi! i am Bob
