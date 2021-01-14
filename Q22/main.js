console.log('Problem Solving Q: 22');

/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(str) {
  // YOUR CODE HERE
  const obj ={}
  const arr=[]
  for(let i=0;i<str.length;i++){
    obj[str[i]]=1+(obj[ster[i]]||0)
  }
  for(k in obj){
    arr= [[k,obj[k]]]
  }
  return arr
}

/* 
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/