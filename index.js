// add solution here
function theBeatlesPlay(musicians, instruments){
  var result = []
  for (let i = 0; i < musicians.length; i++){
    result.push( musicians[i] + " plays " + instruments[i])
  }
  return result;
}

function johnLennonFacts(facts){
  let i = 0;
  var result =[];
  while (i < facts.length){
    result.push(facts[i] + "!!!");
    i++;
  }
  return result;
}
function iLoveTheBeatles(num){
  let newarr = [];
  let i = 0;
  do{
    newarr.push("I love the Beatles!" + i);
    i++;
  }
  while (i <= num);
  return newarr;
}