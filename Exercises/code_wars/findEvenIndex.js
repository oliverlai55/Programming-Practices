// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
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

	let leftSum, rightSum, index;

	leftSum = arr[0];
	rightSum =
		arr.reduce((a, b) => {
			return a + b;
		}) - leftSum;
	console.log(leftSum, rightSum);

	for (index = 0; index < arr.length - 1; index++) {
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

i = 0;
leftSum = 1;
rightSum = 15;

i = 1;
leftSum = 1;
rightSum = 13;

i = 2;
leftSum = 3;
rightSum = 10;
