console.log('Problem Solving Q: 3 ');

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter
 being passed and return the string in reversed order. 
 For example: if the input string is "Hello World and Coders" 
 then your program should return the string sredoC dna dlroW olleH.
*/

const firstReverse=(str)=> {
  // YOUR CODE HERE
  let arryWord=str.split(" ").reverse()
  let char='';
 for(let i=0;i<arryWord.length-1;++i){
    let word=arryWord[i]
  for(let index=0;index<word.length;index++){
    
    char+=" "+word.split("").reverse().join("")
    
  }
 

}
  return char
}

/* 
Examples:
firstReverse('I Love Code'); // => 'edoC evoL I'
firstReverse('Hello World'); // => 'dlroW olleH'
firstReverse('How are you?'); // => '?uoy era woH'
*/

