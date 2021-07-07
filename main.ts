//クラスベースのオブジェクト指向でプログラミングしてみる
//アクセス修飾子privateは、クラス外には呼び出せない

//クラスには、変数とメソッドをまとめておける
class User{
  constructor(private _name:string){
  }
  public sayHi(): void{  //これがメソッド
    console.log("hi! i am " + this._name);  //クラス内の変数を呼ぶ時は this を使う
  }

  get name(){
    return this._name;
  }
//privateだけどクラス外で変数nameを更新する時はsetterを使う
  set name(newValue: string){
    this._name = newValue;
  }
};

var ami = new User("Ami");  //インスタンス化する
console.log(ami.name);
ami.name = "AMI";       //"AMI"をnewValueに引き渡す
console.log(ami.name);  //setterされた変数nameを呼び出す
ami.sayHi();            //メソッドsayHiはpublicなのでクラス外でも呼び出せる


//このままコンパイルするとエラーになるので、%tsc main.ts -t ES5 コマンドで実行する
//実行結果は下記
//Ami
//AMI
//hi! i am Ami