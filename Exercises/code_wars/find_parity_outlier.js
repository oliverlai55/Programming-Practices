// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//  loop through arr
// have two diff counter, one for even, one for odd,
// if one counter is more than 1, then return the number with counter = 1
// if the number is odd, return 'the only odd number'
// if the number is even, return 'the only even number'

function findOutlier(integers){
  let evenCounter = 0, oddCounter = 0;
  let evenArr = [], oddArr = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenArr.push(integers[i]);
      evenCounter++;
    }
    if (integers[i] % 2 !== 0){
      oddArr.push(integers[i]);
      oddCounter++;
    }
  }
  if (evenCounter > 1) return oddArr[0];
  if (oddCounter > 1) return evenArr[0];
}

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
