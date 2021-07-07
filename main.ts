//class User {
//  
//}
//console.log("hello world");


//Signalという型を列挙型で定義する
enum Signal{
  Red = 0,
  Blue = 1,
  Yellow = 2
}

var result: Signal;

//処理は例えばこのようにかく
if (result === Signal.Yellow){
  //処理
}

console.log(Signal[2]); //Yellow