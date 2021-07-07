//Interfaceとは渡ってくるオブジェクトの型に名前を付けること

//resultという変数に渡ってくるオブジェクトが多い場合は先にまとめる。ここではResultというインターフェースにまとめた
interface Result{
  a:number;
  b:number;
}

function getTotal(result: Result){
  return result.a + result.b;
}

var result = {
  a: 40,
  b: 50
}

console.log(getTotal(result));


//実行結果は
//90