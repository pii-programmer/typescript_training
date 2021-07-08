//Moduleはコード管理。大規模開発にてコードを整理したい時に使える。コードを部品化したり、変数やメソッドの衝突を避けるといった整理が、モジュールを作ることで行える。

module UserModule{                 //これがモジュール名
  export var name = "taguchi";            //変数nameを管理する
  export module AddressModule{            //モジュールは入れ子にもできる。このように。
    export var zip = '111-1111';          //変数zipを管理する
  }
}

//モジュールの中の変数を表示するときは、モジュール名にドット.を付ける。
console.log(UserModule.name);

//モジュール名を短縮する。入れ子になった複数のモジュールをドット.で繋げていると長くなるので。
import addr = UserModule.AddressModule;
console.log(addr.zip);

//実行結果は
//taguchi
//111-1111