var numbers = [ 10, 20, 30 ];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
   sum += numbers[i];
}


numbers.reduce(function(sum, number) {
   return sum + number;
}, 0);

// the initial value can change do whatever you desire


var primaryColors = [
   { color: 'red' },
   { color: 'yellow' },
   { color: 'blue' }
];

primaryColors.reduce(function(previous, primaryColor) {
   previous.push(primaryColor.color);

   return previous;
}, []);

//Example to use in Interview
function balancedParens(string) {
   //turning string into array
   return !string.split('').reduce(function(previous, char) {
      if (previous < 0) { return previous; }
      if (char === "(") { return ++previous; }
      if (char === ")") { return --previous; }
      return previous;
   }, 0);
}

balancedParens("(((")


// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
// Hint: Don't forget to return the accumulator object (the first argument to the iterator function)

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    if (desk.type === 'sitting') { ++previous.sitting; }
    if (desk.type === 'standing') { ++previous.standing; }

    return previous;
}, { sitting: 0, standing: 0 });
