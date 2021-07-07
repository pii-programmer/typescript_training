//クラスを継承する

class User{
  constructor(private _name:string){  //Userクラスの変数name
  }
  public sayHi(): void{  //これがメソッド
    console.log("hi! i am " + this._name);  //クラス内の変数を呼ぶ時は this を使う
  }
}

//クラスの継承の仕方
class AdminUser extends User{  //これでUserクラスの変数やメソッドを保持しつつ、新しいクラスを作る
//新しいAdminUserクラスが、Userクラスを継承した。この{}内に変数やメソッドをまとめられる
  private _age:number;                     //AdminUserクラスの変数ageを宣言
  constructor(_name:string, _age:number){  //インスタンス化する時に呼び出す変数はnameとage
    super (_name);                         //superで親クラスの_nameを呼べる
    this._age = _age;                      //クラス内の_ageを呼ぶのでthis
  }
//ここにメソッドをオーバーライドします
  public sayHi(): void{
    console.log("my age: " + this._age);  //クラス内の変数を呼ぶ時は this を使う
    super .sayHi();                       //親クラスのsayHiメソッドを呼んでいる
  }
}

var bob = new AdminUser("Bob", 23);
bob.sayHi();


//実行結果は下記
//my age: 23
//hi! i am Bob