console.log('Problem Solving Q:18 ');

/*  factorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(n) {
  // YOUR CODE HERE
  if(n==1 || n==0){
    return 1
  }
  let result=1;
  for(let i=1;i<=n;i++){
     result*=i;
  }
  return result
}

/* 
Examples:
factorial(1) // => 1
factorial(3) // => 6
factorial(4) // => 24
*/