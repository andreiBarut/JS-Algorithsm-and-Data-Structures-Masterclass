const search = (sortedArr, val) => {
	for (let i in sortedArr) {
		if (sortedArr[i] === val) {
			return i;
		}
	}
};

console.log(search([1, 2, 3, 4, 5, 6], 6));
