//^ BINARY SEARCH IS O(log n)
const findValue = (sortedArr, val) => {
	let left = 0;
	let right = sortedArr.length - 1;

	while (left < right) {
		let middle = Math.floor(right - left);
		if (sortedArr[middle] === val) {
			return middle;
		} else {
			if (sortedArr[middle] < val) {
				left++;
			}
			if (sortedArr[middle] > val) {
				right--;
			}
			if (sortedArr[middle === val]) {
				return middle;
			}
		}
	}
	return -1;
};

console.log(findValue([1, 2, 6, 8, 10], 9));
