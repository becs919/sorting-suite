const bubbleSort = (array) => {
    // loop through array starting with the length -1 because once you go through once, the largest number will move to last spot so you don't have to check that one.
  //  decrement through array as it's checked since last once is largest, etc.
   for (var i = array.length - 1; i>= 0; i--){
     //  increment through array
     for(var j = 1; j<=i; j++){
      //  if previous index is more than current index
       if(array[j-1]>array[j]){
        //  temp = previous position temporary
           var temp = array[j-1];
          //  swapping previous position with current position
           array[j-1] = array[j];
          //assign current to temporary
           array[j] = temp;
        }
     }
   }
   return array;
};



bubbleSort([7, 4, 1, 3, 5]);

export default bubbleSort;
