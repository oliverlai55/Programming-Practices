// JS is a compiled language
// Scope: where to look for things
// Scope is a compiled time process, programming goes through a compiled step
// there are 2 paths, the 1st path sets up lexical scope happens, not during 2nd

"use strict"

var foo = "bar";

function bar() {
  var foo = "baz";
}

function baz(foo) {
  foo = "bam";
  bam = "yay";
}

// 1st pass, we look at var declaration, 'formal declaration' put declaration in global scope
// line 8 and 9 are not formal declarations, so will not sort those into a 'scope'
// line 14, there is no 'bam' declared in the scope.  Lexical scope will go up on global scope to ask if there is 'bam', and they still won't find it.  Global scope will say can't find it, but we will create one for you at global scope at run time just because it can't find it.  THATS NOT GOOD

// then when we get to 'bam' global scope will prevent it from happening, throw a refernece error 'bam' is not defined. It is a not declared (wrong error message for undefined becuase it is defined, just not declared)
