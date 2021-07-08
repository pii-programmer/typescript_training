//インターフェースとクラスを組み合わせる
//Interface -> Class

//これがインターフェースの定義
interface GameUser{
  score: number;                  //scoreという変数
  showScore(): void;              //showScoreというメソッド
}

//これがクラスの定義
class User implements GameUser {  //implements == クラスUserは、インターフェースGameUserの変数とメソッドを必ず持つこと。
  name: string;
  score :number = 0;                         //変数scoreに初期値を設定してあげる
  constructor(name: string) {
      this.name = name;
  }
  sayHi(): void {
      console.log("hi! i am " + this.name);
  }
  showScore(): void {
      console.log("score " + this.score);    //メソッドshowScoreの処理内容を設定している
  }
}