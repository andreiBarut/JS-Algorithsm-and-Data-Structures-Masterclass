//^ BINARY SEARCH IS O(log n)
const findValue = (sortedArr, val) => {
	let left = 0;
	let right = sortedArr.length - 1;

	while (left < right) {
		let middle = Math.floor((left + right) / 2);
		if (sortedArr[middle] === val) {
			return middle;
		} else {
			if (sortedArr[middle] < val) {
				left++;
			}
			if (sortedArr[middle] > val) {
				right--;
			}
			if (sortedArr[middle] === val) {
				return middle;
			}
		}
	}
	return -1;
};

console.log(findValue([1, 2, 6, 8, 10], 1));

//middle = Math.floor(4-0) = 4
//if arr[4] === val ? 10 is not equal to 1
//so we go check is arr[middle] < val? no
//then is arr[middle] > val ? yes; right--;
//if arr
