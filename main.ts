//Interfaceの継承
//finalがオプションだった場合final?としてfinalがあった場合なかった場合でif文をかく

interface SpringResult{
  a:number;
}

interface FallResult{
  b:number;
}

interface FinalResult extends SpringResult, FallResult{
  final?:number;
}

function getTotal(result: FinalResult){
  if(result.final){
    return result.a + result.b + result.final;  //オプションfinalがあれば全ての和
  }else{
    return result.a + result.b;                 //オプションがfinalがなければa+bの和
  }
  
}

var result = {
  a: 40,
  b: 50
}

console.log(getTotal(result));


//実行結果は
//90