
function fib(n){

  const result = [0,1];

  for (let i = 2; i<=n; i++){
    const a = result[i-1];
    const b = result[i-2];

    result.push(a+b)
  }
  return result
}

function fibTwo(n){
  if(n<2){
    return n
  }

  return fibTwo(n-1) + fibTwo(n-2);
}

function fibo(n) {
  if(n <= 1){
      return n
  }
  return fibo(n - 1) + fibo(n - 2)
}
console.log(fibo(10))


