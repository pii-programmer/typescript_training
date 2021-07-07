//Interfaceとは渡ってくるオブジェクトの型に名前を付けること

function getTotal(result: {a:number, b:number}){  //resultという変数に渡ってくるオブジェクトに型付けをする
  return result.a + result.b;
}

var result = {
  a: 40,
  b: 50
}

console.log(getTotal(result));