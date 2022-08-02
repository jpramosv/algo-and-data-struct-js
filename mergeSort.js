
function mergeSort(arr){

  if(arr.length===1){
    return arr;
  }
    
  const center = Math.floor(arr.length/2);
  const left = arr.slice(0,center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
  
  
}


function merge(left, right){

  const result = [];

  while(left.length && right.length){    
    
    if(left[0]<right[0]){
      result.push(left.shift());
    }
    else{
      result.push(right.shift());
    }

  }
  return [...result,...left,...right]

}

console.log(mergeSort([15,66,70,-11,1,22,33,102,122]))

