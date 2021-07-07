//クラスベースのオブジェクト指向でプログラミングしてみる

//クラスには、変数とメソッドをまとめておける
class User{
  name:string;  //これが変数
  constructor(name:string){  //クラスをインスタンス化する時に必要になるメソッドconstructor
    this.name = name;
  }
  sayHi(): void{  //これがメソッド
    console.log("hi! i am " + this.name);  //クラス内の変数を呼ぶ時は this を使う
  }
};

var ami = new User("Ami");  //インスタンス化する
console.log(ami.name);  //変数nameにもアクセスできるし
ami.sayHi();            //メソッドsayHiにもアクセスできる



//実行結果は下記
//Ami
//hi! i am Ami