console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter
 being passed and return the largest word in the string. 
 If there are two or more words that are the same length,
  return the first word from the string with that length.
*/

const longestWord=(sen)=> {
  
  // YOUR CODE HERE
  const newArry=sen.split(" ")
  let longWord=newArry[0]
  for(let index=0 ; index<newArry.length;index++)
  {
    if(index===newArry.length-1){
return longWord
    } if(newArry[index].length>newArry[index+1].length){ 
      longWord=newArry[index]
     }else
     longWord=newArry[index+1]
  }
  

}

/* 
Examples:
longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
*/
