//Selection Sort Introduction
const arr = [2, 4, 1, 6, 8, 7];
//expected output [1,2,4,6,7,8];

console.log("initial array :" + arr);

function selectionSort(inputArr) {
	let n = inputArr.length;
	for (let i = 0; i < n; i++) {
		// Finding the smallest number in the subarray
		let minIndex = i;
		for (let j = i + 1; j < n; j++) {
			if (inputArr[j] < inputArr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex != i) {
			// Swapping the elements
			let tmp = inputArr[i];
			inputArr[i] = inputArr[minIndex];
			inputArr[minIndex] = tmp;
		}
	}
	return inputArr;
}

console.log(selectionSort(arr));
