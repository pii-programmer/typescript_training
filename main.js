//引数に初期値を与える
function add(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
//bの引数に何も入っていない場合は初期値の10になる
console.log(add(5)); //15
