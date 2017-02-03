const split = (array) => {
  if (array.length < 2) {
    return array
  } else {
    var middle = Math.floor(array.length/2)
    var left = array.slice(0,middle)
    var right = array.slice(middle);
    return merge(split(left),split(right));
  }
}

const merge = (left, right) => {
  var completed = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      completed.push(left.shift())
    } else if (left[0] > right[0]) {
      completed.push(right.shift())
    }

  }
  return completed.concat(left).concat(right)
}


export default split
