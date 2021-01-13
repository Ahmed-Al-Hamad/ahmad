console.log('Problem Solving Q:16 ');

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(arr) {
  // YOUR CODE HERE
   const obj={}
   for(let i=0;i<arr.length;i++){
     obj[arr[i]]=1+(obj[arr[i]]||0)
   }
    for(key in obj){
      if(obj[key]%2===0){
        return key
      }
    }
}

/* 
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8 
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
*/