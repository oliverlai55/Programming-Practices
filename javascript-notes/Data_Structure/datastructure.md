# Datastructure: Stacks and Queues

## Stack
A stack is an ordered collection of items that follows the LIFO (Last In First Out) principle.  The addition of new items or the removal of existing items takes place at the same end.

top: the end of the stack
base: the opposite side of the stack

Creating a stack:
Declare methods for the stack:
- push(element(s)): Adds a new item(s) to the top of the stack
- pop(): Removes the top item from the stack, also returns the removed element
- peek(): Returns the top element from the stack.  Stack is not modified, only returns the element
- isEmpty(): Returns true if the stack doesn't contain any elements, returns false if size of the stack is > 0
- clear(): Removes all elements of the stack
- size(): Returns the number of elements that the stack contains. like .length property of array.

```javascript
function Stack() {
  //
};

// this store the elements of the stack
let items = [];

// Pushing elements to the stack
this.push = function(element) {
  items.push(element)
};

// Popping elements from the stack
this.pop = function() {
  return items.pop();
};

// Peeking element from top of stack
this.peek = function() {
  return items[items.length-1];
};

// Verifying if stack is empty
this.isEmpty = function() {
  return items.length == 0;
};

// return number of elements
this.size = function() {
  return items.length;
};

// Empties the stack
this.clear = function() {
  items = [];
};

// Helper method
this.print = function() {
  console.log(items.toString());
};

let stack = new Stack();
console.log(stack.isEmpty()); //outputs true

stack.push(5);
stack.push(8);
console.log(stack.peek()); //outputs 8

stack.push(11):
console.log(stack.size()); //outputs 3
console.log(stack.isEmpty()); //outputs false

stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); //outputs 2
stack.print(); //outputs [5, 8]
```

### ES6 Syntax to create Stack class
```javascript
class Stack {
  constructor () {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
}
```
Cons: The ES6 classes are prototype based, this approach doesn't allow to declare private properties(variables) or methods

### ES6 classes with scoped Symbols
ES6 has a new primitive type: Symbol. It is immutable
```javascript
let _items = Symbol();

class Stack {
  constructor() {
    this[_items] = [];
  }
}
```

### ES6 classes with WeakMap
WeakMap can store a key/value pair, where the key is an object and the value can be any data type.
```javascript
let Stack = (function(){
  const items = new WeakMap();
  class Stack {
  constructor () {
    items.set(this, []);
  }

  push(element) {
    let s = items.get(this);
    s.push(element);
  }

  pop() {
    let s = items.get(this);
    let r = s.pop();
    return r;
  }
}
return Stack;
})();
```
### Convert Decimal to binary using stacks
```javascript
function divideBy2(decNumber) {
  var remStack = new Stack(),
  rem,
  binaryString = '';

  while(decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    //Javascript does not distinguish between integers from floating points, so need Math.floor to obtain only the integer
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }
  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  // if there there are elements inside remStack, pop it, turn it to string, and
  //it will go under binaryString

  return binaryString;
}
```

### The base converter algorithm
```javascript
function baseConverter(decNumber, base) {
  var remStack = new Stack(),
  rem,
  baseString = '';
  digits = "0123456789ABCDEF";

  while(decNumber > 0){
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while(!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}
```
