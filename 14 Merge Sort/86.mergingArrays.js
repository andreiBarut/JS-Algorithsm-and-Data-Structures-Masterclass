//the arrays are sorted, we return a combination of the two sorted array

const arr1 = [1, 10];
const arr2 = [2, 14, 99, 100];
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

// while (i < arr1.length) {
// 	arrFinal.push(arr1[i]);
// }
// while (j < arr1.length) {
// 	arrFinal.push(arr2[j]);
// }
console.log(merge(arr1, arr2));
