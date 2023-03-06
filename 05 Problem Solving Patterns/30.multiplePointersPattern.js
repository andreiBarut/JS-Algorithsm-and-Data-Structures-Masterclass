//^ Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that include sboth values that sum to zero or undefined if a pair does not exist

/* 
&CONCRETE EXAMPLES
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZeri([1,2,3]) // undefined
*/

/*
&BREAK IT DOWN
const sumZero = (sortedArr) => {
    ?check somehow that one value has its negative correspondent : -> if 3 && -3 exist, then return [3,-3]
    
}
*/

const sumZero = (sortedArr) => {
	let left = 0;
	let right = sortedArr.length - 1;
	while (left < right) {
		// because left and right represent the pointers. the left pointer is the left index, and the right pointer is the right index. If the indexes/ pointers are equal, then we are comparing the same element from the array with itself, which does not make sense.
		let sum = sortedArr[left] + sortedArr[right];
		if (sum === 0) {
			// if the sum is 0, then we return the array
			return [sortedArr[left], sortedArr[right]];
		} else if (sum > 0) {
			// if sum is bigger than 0, then it means that the right element is bigger than the negative of the left element, maybe like -2 + 3 > 0, this means that we have to go to down one index from the right, and compare again to see.
			right--; // if sum > 0, then we go down one index from the right and do the sum between left element and right element again
		} else {
			// if sum < 0, this means that the element from the left is smaller than its positive counterpart from the right, therefore we increment the left index with one and compare it again
			left++; // is sum > 0, this means that the element from the left is bigger than its positive current right pointer.
		}
	}
};

const sumZero2 = (sortedArr) => {
	let pointer1 = 0;
	let pointer2 = pointer1 + 1;
	while (pointer2 < sortedArr.length) {
		let sum = sortedArr[pointer1] + sortedArr[pointer2];
		if (sum === 0) {
			return [sortedArr[pointer1], sortedArr[pointer2]];
		} else {
			pointer2++;
		}
	}
};

console.log(sumZero2([-1, 0, 1, 1, 1, 2]));
