console.log('Problem Solving Q:24 ');

/* bubbleSort */

/*  
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:
  • If the first element is greater than the second element, it swaps the two.
  • It then compares the second to the third, and the third to the fourth, and so on.
    - In this way, the largest values 'bubble' to the end of the array.
  • Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
*/

function bubbleSort(arr) {
  // YOUR CODE HERE
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      var a = arr[i]
      var b = arr[i + 1]
      arr[i] = b
      arr[i + 1] = a
    }
  }
  return arr;
}

/* 
Examples:
bubbleSort() // =>
bubbleSort() // =>
bubbleSort() // =>
*/