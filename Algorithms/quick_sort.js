this.quickSort = function() {
  quick(array, 0, array.length - 1);
};

var quick = function(array, left, right) {
  var index; //1  help us separate the subarray with smaller and greater values so we can recursively call the function again

  if (array.length > 1) {
    index = partition(array, left, right); //3 obtain the index value as the return value of partition function

    if (left < index - 1) { //4 if a subarray with smaller elements exists, repeat process for the subarray
      quick (array, left, index - 1);
    }

    if (index < right) {
      quick (array, index, right);
    }
  }
};

var partition = function(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)] // select middle item as pivot
  var i = left, j = right

  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return 1;
};
