console.log('Problem Solving Q: 10');

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of 
occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(str) {
  // YOUR CODE HERE
  const arrChar=str.split('')
  let maxKey=0
  const obj={}
  for(let i=0;i<arrChar.length;i++){
      obj[arrChar[i]]=1+(obj[arrChar[i]]||0)
  }
  for(key in obj){
    if(obj[key]>maxKey){
      maxKey=obj[key]
    }
  }
  return maxKey
}

/* 
Examples:
answer1('hello world') // => 3
answer1('hello world lol') // => 5
answer1('hello world lol woooow') // => 7
answer1('hello world lol wow www.com') // => 6
*/
