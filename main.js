//外部モジュール
//外部モジュールには、1ファイルに1モジュールしか入れられない。
define(["require", "exports", "./user_amd"], function (require, exports, User) {
    "use strict";
    exports.__esModule = true;
    console.log(User.name);
});
//モジュールのオプションを指定してコンパイルする。% tsc main.ts -m commonjs コマンド。
//モジュールのオプションを指定してコンパイルする。% tsc main.ts -m amd コマンド。
//実行結果は
// user_commonjs.jsファイルが作られる。
// user_amd.jsファイルが作られる。
