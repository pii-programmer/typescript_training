//Interfaceの継承
//インターフェースは複数のインターフェースから継承できる

interface SpringResult{
  a:number;
}

interface FallResult{
  b:number;
}

interface FinalResult extends SpringResult, FallResult{
  final:number;
}

function getTotal(result: FinalResult){
  return result.a + result.b + result.final;
}

var result = {
  a: 40,
  b: 50,
  final: 90
}

console.log(getTotal(result));


//実行結果は
//180