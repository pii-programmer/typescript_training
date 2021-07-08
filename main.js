//Generics：抽象化されたデータ型
//具体例：
//関数を定義する。関数の処理内に、ある変数に3つの値が入った配列を返す、という処理を書く。
function getStringArray(value) {
    return [value, value, value];
}
//ではstringだけでなくnumberにも同じ処理をしたい場合、下記のように書けるが、
function getNumberArray(value) {
    return [value, value, value];
}
//これを複数やっていたらキリがない。
//そこで、Genericsを行う。
function getArray(value) {
    return [value, value, value];
}
console.log(getArray(3)); //<T> = <number> Typeはnumber型です。(3)は引数です。
console.log(getArray("Hello")); //<T> = <string> Typeはstring型です。("Hello")は引数です。
//実行結果は
//[ 3, 3, 3 ]
//[ 'Hello', 'Hello', 'Hello' ]
