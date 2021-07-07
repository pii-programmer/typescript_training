//Interfaceとは渡ってくるオブジェクトの型に名前を付けること
//構造的部分型
function getTotal(result) {
    return result.a + result.b;
}
var result = {
    a: 40,
    b: 50,
    c: "Hello" //ここに何らかのプロパティが入っていたとしても、resultがaとbを持っていれば、Result型とみなされる。これが構造的部分型
};
console.log(getTotal(result));
//実行結果は
//90
