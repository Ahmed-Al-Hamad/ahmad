console.log('Problem Solving Q: 21');

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
  // YOUR CODE HERE
    const obj ={}
    let strUnique=''
    for(let i=0; i<str.length;i++){
        obj[str[i]]=1+(obj[str[i]]||0)
    }
    for(k in obj){
      if(obj[k]==1){
        strUnique+=obj[k]
      }
    }
    return strUnique
}

/* 
Examples:
onlyUnique('hello there') // => 'o tr'
onlyUnique('xyz') // => 'xyz'
onlyUnique('iiii') // => ''
*/