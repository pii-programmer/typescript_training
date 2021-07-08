//Moduleはコード管理。大規模開発にてコードを整理したい時に使える。コードを部品化したり、変数やメソッドの衝突を避けるといった整理が、モジュールを作ることで行える。
var UserModule;
(function (UserModule) {
    UserModule.name = "taguchi"; //変数nameを管理する
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = '111-1111'; //変数zipを管理する
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
//モジュールの中の変数を表示するときは、モジュール名にドット.を付ける。
console.log(UserModule.name);
console.log(UserModule.AddressModule.zip); //入れ子のモジュールは、ドット.で繋げるだけ。
//実行結果は
//taguchi
//111-1111
