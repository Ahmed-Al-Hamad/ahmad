console.log('Problem Solving Q:15 ');

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function commonCharacters(str1,str2) {
  // YOUR CODE HERE
  let arr1=str1.split(" ").split("")
  let arr2=str2.split(" ").split("")
  let array=[]
  for(let i=0;i<arr1.length;i++){
    if(arr2.includes(arr1[i])){
            array.push(arr1[i])
    }
  }
  return array.join("")
}

/* 
Examples:
commonCharacters('abc', 'abc') // => 'abc'
commonCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
commonCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/