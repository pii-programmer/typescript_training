//Genericsに制約を付ける

//このプロパティを持つ型だけにしてね、という制約を付けるには、まずインターフェースを使う。
interface Result{
  a:number;
  b:number;
}

//別のインターフェースがあったとしても実行できる
interface FinalResult{
  a:number;
  b:number;
  c:string;
}

//Tは何でも良いが、aとbのプロパティを持ったものじゃないと実行できないという制約を作る。
class MyData<T extends Result>{
  constructor (public value:T){}
  getArray(): T[]{
    return [this.value, this.value, this.value];
  }
}

//呼び出しの時に型を指定すれば、インターフェースが複数あっても大丈夫。今回はFinalResultの制約を使っている。
var v4 = new MyData<FinalResult>({a: 40, b: 50, c:"Hello"});
console.log(v4.getArray());

//実行結果は
//[ {a: 40, b: 50, c:'Hello'}, {a: 40, b: 50, c:'Hello'}, {a: 40, b: 50, c:'Hello'} ]