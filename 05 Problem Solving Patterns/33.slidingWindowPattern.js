//^my solution O(n^2);

const maxSubarraySum = (arr, n) => {
	let finalSum = 0;
	for (let i = 0; i < arr.length - n + 1; i++) {
		let tempSum;
		tempSum = arr.slice(i, n);
		// console.log(tempSum);
		n++;
		tempSum = tempSum.reduce((a, b) => a + b);
		// console.log(tempSum);
		if (tempSum > finalSum) {
			// console.log(finalSum);
			finalSum = tempSum;
		}
	}
	return finalSum;
};
console.log(maxSubarraySum([1, 15, 105, 20, 2, 302], 2));

const maxSubarraySum2 = (arr, num) => {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) {
		return null;
	}
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	// num = 2
	// [1,2,3,4,5]
	// maxSum = 1+2 = 3
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		//3 = 3 - arr[2-2] + arr[2];
		// 3 = 3 - 1 + 3;
		// 3 = 5
		//tempSum = 5
		//2nd loop_________
		//5 = 5 - arr[3-2] + 4
		//5 = 5 - 2 + 4 = 7
		//tempSum = 7
		//3rd loop_________
		//7= 7 - arr[4-2] + 5
		//7 = 7 - 3 + 5
		//tempSum = 9
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
};

console.log(maxSubarraySum2([1, 2, 3, 4, 5], 2));
