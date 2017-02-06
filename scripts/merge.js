const split = (array) => {
  console.log(array);
  // if array is less than 2 return array
  if (array.length < 2) {
    return array;

  } else {
    // if array is longer than two
    // split into 2 -- left and right
    var middle = Math.floor(array.length/2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    // keep splitting until less than 2
    // then run merge function
    return merge(split(left), split(right));
    // recursion ^^^^^       ^^^^^
  }
};

const merge = (left, right) => {
  // create empty array
  var completed = [];

  // while left array has length and right array had length
  while (left.length && right.length) {

    // if left index 0 is less than right index 0
    if (left[0] < right[0]) {

      // them push left index 0 into completed array (while removing it from left array)
      completed.push(left.shift());

    // else if left index 0 is greater than right index 0
    } else if (left[0] > right[0]) {

      // push right index 0 into completed array (while removing it from right array)
      completed.push(right.shift());
    }
  }

  return completed.concat(left).concat(right);
};

split([7, 4, 1, 3, 5]);

export default split;
