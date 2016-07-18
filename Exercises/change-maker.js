//Create a change maker that takes in an amount and returns how many dollars, quarters, dimes, nickels, and pennies are required to equal the amount

var dollarCount = 0;
var quarterCount = 0;
var dimeCount = 0;
var nickelCount = 0;
var pennyCount = 0;
var tempAmount;

var changeMaker = function(amount) {
  tempAmount = amount;
  amount = amount * 100;

  dollarCount = Math.floor(amount / 100)
  amount = amount % 100;

  quarterCount =  Math.floor(amount / 25);
  amount = amount % 25;

  dimeCount = Math.floor(amount / 10);
  amount % 10;

  nickelCount = Math.floor(amount / 5);
  amount % 5;

  pennyCount = Math.floor(amount / 1);
  amount % 1;

  return tempAmount + " will give you " + dollarCount + " dollar bills " + ", " + quarterCount + " quarters, " + dimeCount + " dimes, " + nickelCount + " nickels, " + "and " + pennyCount + " pennies";
}

//Test
changeMaker(825.03);
