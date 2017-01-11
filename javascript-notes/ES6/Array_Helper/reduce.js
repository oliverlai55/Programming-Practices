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
