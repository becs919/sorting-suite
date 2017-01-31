// function bubble(array){
//   do {
//     var sorted = true;
//     array.forEach(function(value, index, totalArray){
//       if (value > totalArray[index + 1]) {
//         sorted = false;
//         array[index] = totalArray[index + 1];
//         array[index + 1] = value;
//       }
//     })
//
//   } while (!sorted);
//   return array;
// }

// var myArray = [2, 1, 3, 5, 4];

function bubbleSort(array) {
  // START WITH OUT OF ORDER ARRAY

  // LOOP THROUGH ARRAY
  for(var i = 1; i < array.length; i++) {
  // GET INDEX VALUES
    var k = array[i];
  // LOOP THROUGH INDEXS STARTING WITH 0, COMPARE TO CURRENT INDEX, IF MORE THAN CURRENT INDEX
    for(var j = i-1; j >= 0 && array[j] > k; j--){
  // THEN THE INDEX MOVE TO RIGHT ONE SPACE
       array[j+1] = array[j];
     };
  // IF NOT, LOOP TO THE NEXT INDEX BY INCREASING BY ONE
    array[j+1] = k;
  };

    return array;
    console.log(array);
};


bubbleSort([2, 1, 3, 5, 4]);


// ONLY COMAPRES AND MOVES 0 INDEX. NOT LOOPING THROUGH ALL OF ARRAY, PRACTICE
// function bubbleSort() {
//   var myArray = [2, 1, 3, 5, 4]
//
//   for(var i = 0; i < myArray.length; i++) {
//     if (myArray[0] > myArray[1]) {
//       myArray.splice(1,0,myArray.splice(0,1)[0]);
//       return myArray;
//     }
//     return myArray
//   }
// }


export default bubbleSort
