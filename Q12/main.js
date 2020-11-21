console.log('Problem Solving Q: 12');

/* Reverse Each Word */

/*  
Write a function that reverses the characters of 
every word of a sentence. Input sentences contain
 only English letter and space characters.
*/

function reverseEachWord(sen) {
    // YOUR CODE HERE
    let arryWord=str.split(" ")
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
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/
