//関数のオーバーロード（引数や戻り値が異なる同じ名前の関数を宣言できる）
//そのためにシグネチャを作る

function add(a:number, b:number):number;  //これがシグネチャ
function add(a:string, b:string):string;

//処理
function add(a:any, b:any):any{
  if(typeof a === "string" && typeof b === "string"){
    return a + b;
  }
  return a + b;
}

//呼び出す
console.log(add(5,3));  //8
console.log(add("hello","world"));  //helloworld