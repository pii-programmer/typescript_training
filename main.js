//Interfaceとは渡ってくるオブジェクトの型に名前を付けること
function getTotal(result) {
    return result.a + result.b;
}
var result = {
    a: 40,
    b: 50
};
console.log(getTotal(result));
