//class User {
//  
//}
//console.log("hello world");


//Signalという型を列挙型で定義する
//enum Signal{
//  Red = 0,
//  Blue = 1,
//  Yellow = 2
//}

//数を省略してかくと
enum Signal{
  Red,
  Blue = 3,
  Yellow
}


var result: Signal;

//処理は例えばこのようにかく
if (result === Signal.Yellow){
  //処理
}

console.log(Signal[4]); //Yellow