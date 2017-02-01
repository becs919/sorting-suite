
// var myArray = [2, 1, 3, 5, 4];

function bubbleSort(array) {
  // START WITH OUT OF ORDER ARRAY
  // LOOP THROUGH LENGTH OF ARRAY STARTING WITH INDEX 1 = NEXT VALUE
  for(var i = 1; i < array.length; i++) {
  // ASSIGN INDEX VALUE TO K
    var k = array[i];
  // LOOP THROUGH INDEXS STARTING WITH 0 = CURRENT VALUE.
  // COMPARING CURRENT VALUE TO NEXT VALUE
    for(var j = i-1; j >= 0 && array[j] > k; j--){
  // IF CURRENT IS MORE THAN NEXT, J MOVES TO THE RIGHT ONE SPOT
       array[j+1] = array[j];
     };
  // IF NOT, LOOP TO THE NEXT INDEX BY INCREASING BY ONE
    array[j+1] = k;
  };
  // IF SORTED, RETURN SORTED ARRAY
    return array;
    console.log(array);
};

bubbleSort([2, 1, 3, 5, 4]);


export default bubbleSort




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
