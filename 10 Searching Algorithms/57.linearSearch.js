const linearSearch = (arr, val) => {
	for (let i in arr) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
};

console.log(linearSearch([1, 2, 3, 3], 3));
