const insertionSort = (arr) => {
	let i = 1;
	for (i; i < arr.length; i++) {
		let j = i - 1;
		// i = 4, arr[i] = 4 [1,2,9,76,4]
		let currentVal = arr[i];
		for (j; j > -1 && arr[j] > currentVal; j--) {
			//j=3, arr[j]=76 [1,2,9,76,4]
			arr[j + 1] = arr[j];
			//[1,2,9,76,76]
			//j=2, arr[j]=9 [1,2,9,76,76]
			//1,2,9,9,76
			//j=1, arr[j]=2 [1,2,9,9,76]
			//2 > 4? NO, then don't swap, but keep in mind that arr[j] is now 2, we don't want to replace 2 with 4, we want the next value to be replaced with 4
		}
		//j+1, because that is [1,2 this is j,9 this is j + 1 ,9,76], so the first 9 gets replaced with 4
		arr[j + 1] = currentVal;
	}
	return arr;
};

console.log(insertionSort([2, 1, 9, 76, 4]));
//1,2,9,76,4 - currentVal = 4
//1,2,9,76,4 -> 1,2,9,76,76 ->
//
//[1,2,9,76, 4]
