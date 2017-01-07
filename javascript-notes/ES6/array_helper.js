var colors = [ 'red', 'blue', 'green' ];

//Using For Loop traditionally
for (var i=0; i<colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function(color) {
  console.log(color);
});

//Iterator Function
// It does something, and returns, take in the 2nd element, runs into iterator function


// Create an array of numbers
var numbers = [1,2,3,4,5];

// Create a variable to hold the sum
var sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
  sum += number;
});

// print the sum variable
console.log(sum);
