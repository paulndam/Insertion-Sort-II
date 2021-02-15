// Insertion Sort

// Pseudocode

function insertionSort(array) {
  // start by selecting the second element in the array

  for (var i = 1; i < array.length; i++) {
    var currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      // compare it to the one before it and it you have to swap them, then swap them
      // continue to the next element and if its not in order, iterate through the sorted portion/part(the left side) to place the element in the correct place
      array[j + 1] = array[j];
    }
    // repeat until the array is sorted and return the array
    array[j + 1] = currentVal;
  }

  return array;
}



console.log(insertionSort([2, 1, 9, 65, 7, 45, 60, 34]));
