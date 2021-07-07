//クラスベースのオブジェクト指向でプログラミングしてみる
//アクセス修飾子privateは、クラス外には呼び出せない

//クラスには、変数とメソッドをまとめておける
class User{
  constructor(private _name:string){
  }
  public sayHi(): void{  //これがメソッド
    console.log("hi! i am " + this._name);  //クラス内の変数を呼ぶ時は this を使う
  }
//privateだけどクラス外で呼び出したい時はgetterを使う
  get name(){
    return this._name;
  }
};

var ami = new User("Ami");  //インスタンス化する
console.log(ami.name);  //privateだけどgetterを使ってるのでクラス外でも呼び出せる
ami.sayHi();            //メソッドsayHiはpublicなのでクラス外でも呼び出せる


//このままコンパイルするとエラーになるので、%tsc main.ts -t ES5 コマンドで実行する
//実行結果は下記
//Ami
//hi! i am Ami