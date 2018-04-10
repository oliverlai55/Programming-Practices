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

  while (i <= j) { // 11
    while (array[i] < pivot) { // 12 Until we find an element that is greater than pivot, shift left pointer
      i++
    }
    while (array[j] > pivot) { // 13 until we find element with less than pivot
      j--;
    }
    if (i <= j) { // 14 compare whether the left pointer index is larger than the right pointer index.  Is left item greater than the right item??
      swap(array, i, j); // 15 Swap both poiters, then repeat process 11
      i++;
      j--;
    }
  }
  return i; //  Return index of the left pointer that will be used to create the subarrays in line 3
};

var swap = function(array, index1, index2) {
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;

  [array[index1], array[index2]] = [array[index2], array[index2]];
};
