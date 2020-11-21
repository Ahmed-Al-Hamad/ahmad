console.log('Problem Solving Q: 7');

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

const SumOddNumber=(arr)=> {
  // YOUR CODE HERE
  let sumOdd=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
         sumOdd+=arr[i]
    }
}
return sumOdd
}

/* 
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/
