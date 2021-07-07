//class User {
//  
//}
//console.log("hello world");
//Signalという型を列挙型で定義する
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 1] = "Blue";
    Signal[Signal["Yellow"] = 2] = "Yellow";
})(Signal || (Signal = {}));
var result;
//処理は例えばこのようにかく
if (result === Signal.Yellow) {
    //処理
}
console.log(Signal[2]); //Yellow
