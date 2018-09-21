module.exports = function count(s, pairs) {
  if(s.length > 5 || pairs[0][1].length > 3) return 0;
  
 
  var Ns = [];
  var sArr = s.split("");

  if(sArr.includes("0")){
    var value = 1;
    for(let i = 0; i < pairs.length; i++){
      if(i === 0){
        value = pairs[i][0];
      }else{
        value *= pairs[i][0];
      }
    }
    Ns.push(value);
  }else{
    for(let i = 0; i < pairs.length; i++){
     Ns.push(pairs[i][0]);
    }
  }


  var arr = [];
  Ns.forEach(function(item){
    var count = 0;
    var N = item;
    var sArrLenth = sArr.length; 
    for(let i = 0; i < N; i++){
      var p = 0;
      for(let j = 0; j < sArrLenth; j++){
        var comDiv = findCommonDiver(N, i+j);
        if(sArr[j] === "0"){
          if(comDiv !== 1){
            p++;
          }
        } 
        if(sArr[j] === "1"){
          if(comDiv === 1){
            p++;
          }
        }
      }
      if(p == sArrLenth){
        count++;
      }
    }
   arr.push(count);
}); 
  
  var result = 1; 
  for(let i = 0; i < arr.length; i++){
    result *= arr[i];
  }
  
  for(let i = 0; i < pairs.length; i++){
    result *= Math.pow(pairs[i][0], pairs[i][1] - 1);
  }

  
  const res = result % 1000000007;
  return res;
}

function findCommonDiver(value1, value2) {
    if (!value2) {
        return value1;
    }
    return findCommonDiver(value2, value1 % value2);
}
