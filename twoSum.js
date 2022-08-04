function two(arr,n){

  for(let i = 0; i<arr.length; i++){

    if((arr[i]+arr[i+1])===n){
      return ([arr[i], arr[i+1]])
    }
  }
  return console.log("nao existe")

}

two([4, 1, 2, -2, 11, 15, 1, -1, -6, -4],9)