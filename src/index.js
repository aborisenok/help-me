module.exports = function count(s, pairs) {

  if(s.length > 3 || pairs.length > 8) return 0;

  var N = 1;
  var sArr = s.split("");
  

  for(let i = 0; i < pairs.length; i++){
    N *= (Math.pow(pairs[i][0], pairs[i][1]))
  }

  var count = 0;
  for(let i = 0; i < N; i++){
    var p = 0;
    for(let j = 0; j < sArr.length; j++){
      if(sArr[j] === "0"){
        if(findCommonDiver(N, i+j) !== 1){
          p++;
        }
      } 
      if(sArr[j] === "1"){
        if(findCommonDiver(N, i+j) === 1){
          p++;
        }
      }
    }
    if(p == sArr.length) count++;
      
  }
  
  const res = count % 1000000007;
  return res;
}

function findCommonDiver(value1, value2) {
    if (!value2) {
        return value1;
    }
    return findCommonDiver(value2, value1 % value2);
}
