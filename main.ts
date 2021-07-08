//外部モジュール
//外部モジュールには、1ファイルに1モジュールしか入れられない。

//NodeJS でよく使われる CommonJS形式でのコンパイル
//RequireJS などで使われる AMD形式でのコンパイル

//module UserModule{
//  export var name = "taguchi";
//}

// import User = require("./user_commonjs");  //requireには拡張子は不要
import User = require("./user_amd");         //requireには拡張子は不要

console.log(User.name);


//モジュールのオプションを指定してコンパイルする。% tsc main.ts -m commonjs コマンド。
//モジュールのオプションを指定してコンパイルする。% tsc main.ts -m amd コマンド。

//実行結果は
// user_commonjs.jsファイルが作られる。
// user_amd.jsファイルが作られる。