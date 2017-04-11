var n;
var swapped;
var array = [1,8,6,49,8,6,4,876,1,9786,289,23,2678,1436,134566,76,2,4,3,6];

bubblesort(array);

function bubblesort(array) {
  var swapped;
  do {
    swapped = false;
    for (var i=0; i < array.length-1; i++) {
      if (array[i] > array[i+1]) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(array);
}
