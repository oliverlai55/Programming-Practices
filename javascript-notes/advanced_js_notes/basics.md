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
refs/remotes/origin/master
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

What are the different types in JS?

Boolean
Number
String
Null
Undefined
Object

type of null is 'object'

Dynamically vs Statically typed language?
- the type changes dynamically without having to set prior to declaring the variable
- Dynamic is faster, but could only run into problems when you run the program, during execution, a lot silent issues
- Statically, during compilation, there will be errors, uncover problems early on.  Memory control can be more tightly controlled

Null vs Undefined?
```javascript
var a;
// Undefined, no value, uninitialized
// used by JS engine to inform you that it is unknown property or undefined

var a = null;
// Programmer can set value of variable to null.  JS engine will NOT set null for you.
```
- null == undefined will be 'true'

Difference between == and === ?
- === checks for both types and value equality, == just value
- type corercion, tries to change the type of value dynamically

What is NaN and how can we check for it?
- typeof NaN is number

```javascript
NaN == 1
// false

NaN == false
// false

NaN == NaN
// false

isNaN(NaN)
// true

isNaN(1)
// false

isNaN('1')
// false

isNaN('A')
//true

isNaN('A')
// trying to coerce to
isNaN(Number('A'))
// true

var a = NaN
a !== a;
// true

a = 1
a !== a
// false
```
- if a variable is not equal to itself, then that when it will be NaN
