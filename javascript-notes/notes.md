# Data Structure
### split()
The split() method is used to split a string into an array of substrings, and returns the new array.
Tip: If an empty string ("") is used as the separator, the string is split between each character.

### join()
Join the elements of an array into a string:
```Javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
Output: Banana,Orange,Apple,Mango
```
### push()
The push() method adds new items to the end of an array, and returns the new length.
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);
Output: Banana,Orange,Apple,Mango,Kiwi
```

### pop()
Remove the last element of an array:
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
Output: Banana,Orange,Apple
```

### splice()
The splice() method adds/removes items to/from an array, and returns the removed item(s).

array.splice(index,howmany,item1, ...,itemX)
index:Required, an integer that specifies at what position to add/remove items, Use negative values
to specify the position from the end of the array.

howmany: Required, The number of items to be removed. If set to 0, no items will be removed
item1,...,itemX: Optional, The new item(s) to be added to the array

```JavaScript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
Output fruits: Banana,Orange,Lemon,Kiwi,Apple,Mango
```

### unshift()
The unshift() method adds new items to the beginning of an array, and returns the new length
```JavaScript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
Lemon,Pineapple,Banana,Orange,Apple,Mango
```

### shift()
The shift() method removes the first item of an array, and returns that item.
```JavaScript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
Orange,Apple,Mango
```

### replace()
The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

## Sorting Elements
### reverse()
Simply reversing the elements of the array

### sort()
If sort() is called with no argument, then the array is sorted lexicographically, in dictionary order when each value is treated as a string.

```javascript
numbers.sort(function(a,b) {
    return a-b;
});
```
This code will return a negative number if b is bigger than a, a positive number if a is bigger than b, and 0 if they are equal.  This means that if a negative value is returned, it implies that a is smaller than b, which is further used by the sort function to arrange the elements.

var letters = ['R', 'O', 'F', 'L'];
letters.sort()
produced ['F', 'L', 'O', 'R']

1. if the function returns less than zero, sort a before b
2. if the function returns greater than zero, sort b before a
3. if the function returns zero, leave a and b unchanged with respect to each other

var numbers = [8,5];

numbers.sort(function(a, b)
{
    return a - b;
});

alert(numbers);    //produces [5,8]

var numbers = [4,3,5,9];

numbers.sort(function(a, b)
{
    return b - a;
});

alert(numbers);    //produces [9,5,4,3]

## Joining Multiple Arrays
### concat()
Joins multiple arrays and return a copy of the joined arrays.
```javascript
var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);
numbers = [-3,-2,-1,0,1,2,3]
```
## Iterator functions
Example:
```javascript
var isEven = function(x) {
    return (x % 2 == 0) ? true : false;
    // or just return (x % 2 == 0)
};

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
```
### every()
Iterates each element of the array until the return of the function is `false` and iteration will stop
```javascript
numbers.every(isEven)
```

### some()
Iterates each element of the array until the return of the function is `true` and iteration will stop
```javascript
numbers.some(isEven);
```

### forEach()
It will iterate each element whether its true or not.
```javascript
numbers.forEach(function(x) {
    console.log((x % 2 == 0));
    //will log true or false in each element of the array
});
```
### map()
```javascript
var myMap = numbers.map(isEven);
```
Stores result in a new array.
the myMap array will be [false, true, false, true, false]..etc

### filter()
Returns a new array with elements that the function returned `true` as follows:
```javascript
var evenNumbers = numbers.filter(isEven);
evenNumbers = [2, 4, 6, 8, 10, 12, 14]
//it returns all the elements that are multiples of 2
```

### reduce()
The reduce method receives a function with the following parameters:
"previousValue", "currentValue", "index", "array"
We can use this function to return a value that will be added to an accumulator, which will be returned after the reduce method stops executing.  We can sum up the values of the array.

```javascript
numbers.reduce(function(previous, current, index) {
    return previous + current;
});

//output will be 120
```


### Creating Multidimentional Arrays:
```javascript
var matrix3x3x3 = [];
for(i = 0; i<3; i++) {
  matrix3x3x3[i] = [];
  for(var j = 0; j<3; j++) {
    matrix3x3x3[i][j] = [];
    for(var z = 0; z<3; z++) {
      matrix3x3x3[i][j][z] = i+j+z;
    }
  }
}

for (var i=0; i<matrix3x3x3.length; i++) {
  for (var j=0; j<matrix3x3x3.length; j++){
    for (var z=0; z,matrix3x3x3.length; z++){
      console.log(matrix3x3x3[i][j][z]);
    }
  }
}
```
REGEX



sum
math.random
indexOf
listing objects
finding max, min
document.getElementById
innerHTML





bootstrap off grid system
