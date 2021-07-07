//bの引数が入ってくるか分からない時は
function add(a, b) {
    if (b) { //もしbが存在すればという意味
        return a + b;
    }
    else {
        return a + a;
    }
}
//aしか引数がない場合 a + a になる
console.log(add(5)); //10
