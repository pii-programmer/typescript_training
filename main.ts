//Generics：抽象化されたデータ型
//関数だけでなく、クラスやインターフェースにもGenericsを行える

//具体例：
class MyData<T>{
  constructor (public value:T){}
  getArray(): T[]{
    return [this.value, this.value, this.value];
  }
}

var v1 = new MyData<string>("Hello");  //インスタンスを生成
console.log(v1.getArray());
var v2 = new MyData<number>(3);  //インスタンスを生成
console.log(v2.getArray());

//実行結果は
//[ 'Hello', 'Hello', 'Hello' ]
//[ 3, 3, 3 ]