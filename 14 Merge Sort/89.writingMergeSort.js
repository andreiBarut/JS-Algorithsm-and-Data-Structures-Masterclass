const merge = (arr1, arr2) => {
	let i = 0;
	let j = 0;
	let arrFinal = [];
	while (i < arr1.length || j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			arrFinal.push(arr1[i]);
			i++;
		} else if (!(arr1[i] < arr2[j])) {
			arrFinal.push(arr2[j]);
			j++;
		}
	}
	return arrFinal;
};

let mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	//mergeSort();
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
};

console.log(mergeSort([10, 24, 76, 73]));
