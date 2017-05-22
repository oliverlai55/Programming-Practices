What does Use Strict?

use "use strict"

- Allows codes to run in use strict operating context, better for debugging. It will throw errors
- Stops you from using words that are used in future versions of JS
- Can't delete arguments of functions
- The ability to use eval for safely, will not print everything in console

```javascript
"use strict"

var theVal = 0;

thVal = 1

if (theVal > 0) {
  console.log("hello");
}
```

Does JS pass by value or reference?
Pass primitive types by value

```javascript
var a;
function foo(a) {
 a = 2;
}

foo(a);
console.log(a);
```
- passes a copy of a, not the actual a var, which is why it will output 1

Pass Object by reference
- Points to something else, not a copy of the value

```javascript
var a = {};
function foo(a) {
  a.moo = false;
}

foo(a);
console.log(a);
```
