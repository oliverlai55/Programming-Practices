funciton addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
}


// Rest Operator
//Capture all arguments into a single array
funciton addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
}

addNumber([1,2,3,4,5]);


const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

defaultColors.concat(userFavoriteColors);

//Using Spread
//Create new array, reference existing array, using spread operator
// Can add additional info in array
[ 'green', 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ];


function validateShoppingList(...items) {
  if (item.indexOf('milk') < 0) {
    return [ 'milk', ...items ];
  }

  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');


const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};
