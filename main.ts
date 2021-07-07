//クラスベースのオブジェクト指向でプログラミングしてみる
//アクセス修飾子privateは、クラス外には呼び出せない

//クラスには、変数とメソッドをまとめておける
class User{
  constructor(private _name:string){
  }
  public sayHi(): void{  //これがメソッド
    console.log("hi! i am " + this._name);  //クラス内の変数を呼ぶ時は this を使う
  }
};

var ami = new User("Ami");  //インスタンス化する
console.log(ami._name);  //変数_nameはprivateなのでクラス外には呼び出せない
ami.sayHi();            //メソッドsayHiはpublicなのでクラス外でも呼び出せる



//実行結果は下記
//error