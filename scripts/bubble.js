const bubbleSort = (array) => {
  debugger
   var len = array.length;
   for (var i = len - 1; i>= 0; i--){
    //  console.log('c', array[i]);
     for(var j = 1; j<=i; j++){
       if(array[j-1]>array[j]){
           var temp = array[j-1];
           array[j-1] = array[j];
           array[j] = temp;
          //  console.log('p', array[j]);
        }
     }
   }
   return array;
}



bubbleSort([7, 4, 1, 3, 5])

export default bubbleSort
