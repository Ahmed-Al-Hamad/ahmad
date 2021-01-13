console.log('Problem Solving Q:17 ');

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

function firstNonRepeatedCharacter(str) {
  // YOUR CODE HERE
  const obj={}
  let newArr=str.split("")
    for(let i=0;i<newArr.length;i++){
      obj[newArr[i]]=1+(obj[newArr[i]]||0)
    }
    for(k in obj){
      if(obj[k]===1){
        return k
      }
    }
}

/* 
Examples:
firstNonRepeatedCharacter('ABCDBIRDUP') // => 'A'
firstNonRepeatedCharacter('ALABAMA') // => 'L'
firstNonRepeatedCharacter('Uber for horses') // => 'U'
*/