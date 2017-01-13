const add = function(a, b) {
  return a + b;
}

add(1, 2);

const add = (a, b) => {
  return a + b;
}

//if there is just one single expression, "implicait return" of the function
const add = (a, b) => a + b;

// if we have single argument, ommit params around it
const double = number => 2 * number;

numbers.map(number => 2 * number );

// with an issue: the this.teamName will cause error cause "this" is not referring to the object
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squa',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

//Fix using 'lexical fix' using fat arrow function
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squa',
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
