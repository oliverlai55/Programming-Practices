// closure is when a function  "rembmbers" its lexical scope even when the function is executed outside that lexical scope.
// example 1
function foo() {
  var bar = "bar";

  function baz() {
    console.log(bar);
  }

  bam(baz);
}

function bam(baz) {
  baz(); //"bar"
}

foo();

// example 2
function foo() {
  var bar = "bar";

  return function() {
    console.log(bar);
  };
}

function bam() {
  foo()(); //"bar"
}

bam();

// example 3
function foo() {
  var bar = "bar";

  setTimeout(function() {
    console.log(bar);
  }, 1000);
}

foo();

// example 4: shared scope
function foo() {
  var bar = 0;

  setTimeout(function() {
    console.log(bar++);
  }, 100);

  setTimeout(function() {
    console.log(bar++);
  }, 200)
}

foo(); //0 1
// when one updates, the other is updating at the same time


// Example 5: Nested scope
function foo() {
  var bar = 0;

  setTimeout(function() {
    var baz = 1;
    console.log(bar++);

    setTimeout(function() {
      console.log(bar + baz);
    }, 200);
  }, 100);
}

foo(); // 0 2

// Example 6: Loops
for (var i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(('i: ' + i));
  }, i*1000);
}
