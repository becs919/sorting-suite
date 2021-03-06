const insertionSort = (array) => {
  // loop through array by incrementing starting with index of 1
  for (let i = 1; i < array.length; i++) {

    // get value based on index position
    let current = array[i];

    // compare current to next
    for (var j = i - 1; array[j] > current; j--) {

      // if current is greater than next, switch with next
      array[j + 1] = array[j];
    }

    // if not, current moves to next position and next moves
    // loop through until sorted
    array[j + 1] = current;
  }

  // once sorted, return array
  return array;
};

insertionSort([4, 1, 5, 3, 2]);

export default insertionSort;
