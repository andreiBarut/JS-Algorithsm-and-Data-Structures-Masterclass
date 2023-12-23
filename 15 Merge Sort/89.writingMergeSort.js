const merge = (arr1, arr2) => {
	let i = 0;
	let j = 0;
	let arrFinal = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			arrFinal.push(arr1[i]);
			i++;
		} else if (!(arr1[i] < arr2[j])) {
			arrFinal.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		arrFinal.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		arrFinal.push(arr2[j]);
		j++;
	}
	return arrFinal;
};

// console.log(merge([1, 2, 3], [7, 10, 12]));

// let array = [10, 24, 76, 73, 72, 1, 9, 99];

let mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
};

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9, 99]));

//^ WORKS! The Time complexity is O(n log n);
//? WHY? It is log n for splitting, because if we have 32 elements we have to do exactly five splits. AND, O(n) for comparisons, because if we have 8 elements, there are the same amount of comparisons done each time

// console.log(mergeSort([10, 24, 76, 73]));

//[10, 24, 76, 73, 72, 1, 9]

//mid = 7/2 = 3.5 = 3
// left = 0,3 -> [10,24,76]
//left = 0,1 -> [10]

//right = [24,76]
//mid = 1
//left = [24]
//right = [76]
//merge(24,76) -> [24,76]
//merge([10], [24,76]) -> [10,24,76]

// right = 3,arr.length -> [73,72,1,9]
//[72,73], [1,9]
//[1,9,72,73]

//merge([10,24,76],[1,9,72,73])
//[1,9,10,24,72,73,76]

// [
// 	[1, 2, 3],
// 	[2, 4, 5],
// ];
// n=2
// m =3
function createLists(n, m) {
	let list = [];
	for (let i = 0; i < m; i++) {
		let subList = [];
		for (let j = 0; j < n; j++) {
			subList.push(j);
		}
		list.push(subList);
	}
	return list;
}

console.log(createLists(2, 3));

//* ANOTHER EXAPLANATION

// [1,2,3,4,5,6,7,8]
// [1,2,3,4] [5,6,7,8] - 1
// [1,2] [3,4] [5,6] [7,8] - 2
// [1] [2] [3] [4] [5] [6] [7] [8] - 3

// 3 <-> 8 ?
// log(8) (base 2) = 3
// ====> O(nlog(n))

//[17, 5, -3, 21]
//[17, 5], [-3, 21]
//[17] , [5], [-3], [21]

//merge([17],[5]) -> [5, 16]
//merge... -> [-3,21]
//merge... -> [-3,5,16,21]

//merge sort does not care if the array is already sorted or not. It will do the splits, and the comparisons no matter what. The comparisons give a time complexity of O(n) because we have a while loop which grows proportionately with the number of array elements.

// ->>>> O(nlog(n))
