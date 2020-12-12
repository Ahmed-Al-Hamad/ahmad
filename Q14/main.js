console.log('Problem Solving Q:14 ');

/* ArrayMiddle */

/*  
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
  // YOUR CODE HERE
  let middle=0
  let center=0
   if (arr.length%2!==0){
      middle=arr.length/2
      center=parseInt(middle)
      return arr[center];
   }
   middle=arr.length/2
   center=arr[middle-1]+arr[middle]
   return center/2
}

/* 
Examples:
ArrayMiddle([200,5,100]) // => 5
ArrayMiddle([2,3,2,3,2]) // => 2
ArrayMiddle([2,3]) // => 2.5
*/