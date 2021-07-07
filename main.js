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
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 3] = "Blue";
    Signal[Signal["Yellow"] = 4] = "Yellow";
})(Signal || (Signal = {}));
var result;
//処理は例えばこのようにかく
if (result === Signal.Yellow) {
    //処理
}
console.log(Signal[4]); //Blue
