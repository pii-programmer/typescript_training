module ReferenceModule{                 //これがモジュール名
  export var name = "taguchi";            //変数nameを管理する
  export module AddressModule{            //モジュールは入れ子にもできる。このように。
    export var zip = '111-1111';          //変数zipを管理する
  }
}