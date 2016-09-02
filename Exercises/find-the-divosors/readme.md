### Description
Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).

Example:
``` javascript
divisors(12); //should return [2,3,4,6]
divisors(25); //should return [5]
divisors(13); //should return "13 is prime"
```

#### Solution:
``` javascript
function divisors(integer) {
  for(var i=2; i<integer; i++) {
    if(integer % i == 0) {
      return findDivisors(integer);
    }
  }
  return integer + ' is prime';
}

function findDivisors(integer) {
  var array = [];
  for(var i=0; i<=integer; i++) {
    if (i!==1 && i!==integer && integer%i===0) {
      array.push(i);
    }
  }
  return array;
}
```
