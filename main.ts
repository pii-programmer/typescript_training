//Genericsに制約を付ける

//このプロパティを持つ型だけにしてね、という制約を付けるには、まずインターフェースを使う。
interface Result{
  a:number;
  b:number;
}

//Tは何でも良いが、aとbのプロパティを持ったものじゃないと実行できないという制約を作る。
class MyData<T extends Result>{
  constructor (public value:T){}
  getArray(): T[]{
    return [this.value, this.value, this.value];
  }
}

var v3 = new MyData<Result>({a: 40, b: 50});
console.log(v3.getArray());

//実行結果は
//[ {a: 40, b: 50}, {a: 40, b: 50}, {a: 40, b: 50} ]