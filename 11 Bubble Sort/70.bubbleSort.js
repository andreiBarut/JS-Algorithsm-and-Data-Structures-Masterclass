const arr = [2, 4, 1, 6, 8, 7];
//expected output [1,2,4,6,7,8];
console.log("initial array: ", arr);

const myBubbleSort = (arr) => {
	//[2,4,6,1,8,7]
	let swap = false;
	for (let i = 0; i < arr.length; i++) {
		// console.log(arr);
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swap = true; // this is so that we reduce the inner loop if the next value is in correct order, if set is false, then we break out of the outer loop
			}
		}
		if (!swap) {
			break;
		}
	}
	return arr;
};

// const swap = (arr, num1, num2) => {
// 	let temp = arr[num2];
// 	arr[num1] = arr[num2];
// 	arr[num2] = temp;
// };

console.log("sorted array: ", myBubbleSort(arr));
