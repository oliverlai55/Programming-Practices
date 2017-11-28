// JS is a compiled language
// Scope: where to look for things
// Scope is a compiled time process, programming goes through a compiled step
// there are 2 paths, the 1st path sets up lexical scope happens, not during 2nd

var foo = "bar";

function bar() {
  var foo = "baz";
}

function baz(foo) {
  foo = "bam";
  bam = "yay";
}

// 1st pass, we look at var declaration, 'formal declaration' put declaration in global scope
