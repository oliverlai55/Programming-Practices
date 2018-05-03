// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
function findEvenIndex(arr) {
	//Code goes here!
	// leftSum = calculate current leftSum
	// rightSum = calculate current rightSum
	// index = current index in array
	// while loop or recursion??
	// Loop through array, leftsum = first index sum , rightSum = the rest of the array items' sum
	// when leftSum = rightSum, return index
	// if array is empty, return 0
	// if everything else fails, return -1

	// 	if (!arr) return 0;

	// maybe another function that JUST sum the array given?

	let leftSum, rightSum, index;

	leftSum = arr[0];
	rightSum =
		arr.reduce((a, b) => {
			return a + b;
		}) - leftSum;
	console.log(leftSum, rightSum);

	for (index = 1; index < arr.length; index++) {
		if ((index = 1)) {
			leftSum = 1;
			rightSum = rightSum - arr[index];
		}

		if (leftSum == rightSum) {
			return index;
		}

		leftSum += arr[index];
		rightSum = rightSum - arr[index];
		console.log('leftSum', leftSum);
		console.log('rightSum', rightSum);
	}

	if ((index = arr.length - 1 && leftSum != rightSum)) return -1;
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
// write down in pad the current state of  leftSum, rightSum and index;
// i think after index 0, rightSum = rightSum - arr[index]

i = 0;
leftSum = 1;
rightSum = 15;

i = 1;
leftSum = 1;
rightSum = 13;

i = 2;
leftSum = 3;
rightSum = 10;
