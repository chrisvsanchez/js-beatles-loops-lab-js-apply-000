// add solution here
function theBeatlesPlay(musicians, instruments){
  var result = []
  for (let i = 0; i < musicians.length; i++){
    result.push( musicians[i] + " plays " + instruments[i])
  }
  return result;
}

function johnLennonPlay(facts){
  let i = 0;
  var result =[];
  while (i < facts.length){
    result.push(facts[i] + "!!!");
    i++;
  }
  return result;
}