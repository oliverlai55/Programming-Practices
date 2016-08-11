#### Coding Questions:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';

It is 1020;
```

*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7

add(2, 5);

function add(a, b) {
  return a + b;
}

add(2, 5);

add(2)(5);
function add(a) {
  return function(b) {
    return a + b;
  }
}
add(2)(5);
```

*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
It will be the same sentence but will start from the end of the string.
```

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );


```

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";

(function() {
  var bar = " World";
  alert(foo + bar);
})();

alert(foo + bar);

1. "Hello World"
2. "bar is not defined"
```

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);

.push is mutable, answer is 2
```

*Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```
