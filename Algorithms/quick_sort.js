this.quickSort = function() {
  quick(array, 0, array.length - 1);
};

var quick = function(array, left, right) {
  var index; //1  help us separate the subarray with smaller and greater values so we can recursively call the function again

  if (array.length > 1) {
    index = partition(array, left, right);
  }
}
