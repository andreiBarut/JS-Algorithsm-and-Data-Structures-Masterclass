const arr = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7];

//^ THIS is O(n);

// const countUniqueValues = (sortedArr) => {
// 	const newSet = new Set(sortedArr);
// 	return Array.from(newSet);
// };

// console.log(countUniqueValues(arr));

//^another soltion

//[1,1,1,2,3,3,4,4,5,6]

//should ouptut this [1,2,3,4,5,6,4,4,5,6]

const countUniqueValues2 = (sortedArr) => {
	if (sortedArr.length === 0) return 0;
	let p1 = 0;
	let p2 = 1;
	let count = 1;
	while (p2 < sortedArr.length) {
		if (sortedArr[p1] === sortedArr[p2]) {
			p2++;
		} else {
			p1++;
			count++;
			sortedArr[p1] = sortedArr[p2];
			p2++;
		}
	}
	console.log(sortedArr);
	return sortedArr.slice(0, count);
};

console.log(countUniqueValues2(arr));
