var ReferenceModule;
(function (ReferenceModule) {
    ReferenceModule.name = "taguchi"; //変数nameを管理する
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = '111-1111'; //変数zipを管理する
    })(AddressModule = ReferenceModule.AddressModule || (ReferenceModule.AddressModule = {}));
})(ReferenceModule || (ReferenceModule = {}));
//Moduleはコード管理。大規模開発にてコードを整理したい時に使える。コードを部品化したり、変数やメソッドの衝突を避けるといった整理が、モジュールを作ることで行える。
//別ファイルのモジュールを呼び出すためにこう書く。スラッシュ3本///忘れずに。
/// <reference path="./reference.ts" />
//別ファイルのモジュールの変数も呼び出せる
console.log(ReferenceModule.name);
//コンパイルする時は、jsファイルが複数作られてしまうので、% tsc main.ts --out all.js コマンドを使おう。
//実行結果は
//taguchi
