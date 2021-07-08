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
//モジュール名を短縮する。入れ子になった複数のモジュールをドット.で繋げていると長くなるので。
var addr = UserModule.AddressModule;
console.log(addr.zip);
//実行結果は
//taguchi
//111-1111
