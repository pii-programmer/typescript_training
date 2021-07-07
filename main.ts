//クラス
//静的メンバ

class User{
  name: string;
  constructor(name:string){  //インスタンス化される変数name
    this.name = name;
    User.count++;
  }
  sayHi(): void{       //これがメソッド
    console.log("hi! i am " + this.name);  //クラス内の変数を呼ぶ時は this を使う
  }
  static count: number = 0;                 //静的メンバのインスタンスを数える
}

var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count);

//実行結果は下記
//2