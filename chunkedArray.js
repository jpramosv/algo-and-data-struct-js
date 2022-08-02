
function chucked(arr, size){
  let chunked = [];

  for(let element of arr){
    const last = chunked[chunked.length-1]

    if(!last || last.length===size){
      chunked.push([element])
    }
    else 
      last.push(element)
  }

  return console.log(chunked)

}

chucked([1,2,3,5,6,7,8], 3)