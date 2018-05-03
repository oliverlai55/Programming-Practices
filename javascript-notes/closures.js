// Source: https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44
// Ex 1:
function numberGenerator() {
	// Local 'free' variable that ends up within the closure
	var num = 1;
	function checkNumber() {
		console.log(num);
	}
	num++;
	return checkNumber;
}

var number = numberGenerator();
number(); // 2

// Ex 2:
function sayHello() {
	var say = function() {
		console.log(hello);
	};
	// Local variable that ends up within the closure
	var hello = 'Hello, world';
	return say;
}

var sayHelloClosure = sayHello();
sayHelloClosure(); // 'Hello, world!'

// for-loop Example:
var result = [];

for (var i = 0; i < 5; i++) {
	result[i] = function() {
		console.log(i);
	};
}

result[0](); // 5, expected 0
result[1](); // 5, expected 1
result[2](); // 5, expected 2
result[3](); // 5, expected 3
result[4](); // 5, expected 4

// Solution
var result = [];

for (var i = 0; i < 5; i++) {
	result[i] = (function inner(x) {
		// additional enclosing context
		return function() {
			console.log(x);
		};
	})(i);
}

result[0](); // 0, expected 0
result[1](); // 1, expected 1
result[2](); // 2, expected 2
result[3](); // 3, expected 3
result[4](); // 4, expected 4

// Another, rather clever approach is to use let instead of var, since let is block-scoped and so a new identifier binding is created for each iteration in the for-loop
