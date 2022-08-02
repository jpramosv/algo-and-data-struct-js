function buildCharMap(str){
  
  let charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
    
    if(charMap[char]){
      charMap[char]++
    }else{
      charMap[char] = 1;
    }
  }

  console.log(charMap)
  
  return charMap;
  
}

function anagram(stringA, stringB){

  let strA = buildCharMap(stringA)
  let strB = buildCharMap(stringB)

  if(Object.keys(strA).length !== Object.keys(strB).length){
          return false;
  }

  for(let char in strA){

    if(strA[char]!==strB[char]){
      return false;
    }
  }

  return true;

}

console.log(anagram('joao   ', 'a joo'))

