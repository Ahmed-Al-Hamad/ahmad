// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
/* replace(/[^\w]/g, '') */
function anagrams(stringA, stringB) {
  const objA=factObj(stringA.replace(/[^\w]/g, '').toLowerCase())
  const objB=factObj(stringB.replace(/[^\w]/g, '').toLowerCase())
  if(Object.keys(objA).length!==Object.keys(objB).length){
      return false;
  }
  for(let k in objA){
      if(objA[k]!==objB[k]){
         return false
      }
  }
  return true
}

function factObj(str){
    const obj={}
    for(let i=0; i<str.length;i++){
        obj[str[i]]=obj[i]+1||1
    }
    return obj
}
module.exports = anagrams;
