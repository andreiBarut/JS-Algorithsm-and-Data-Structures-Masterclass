const same2 = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}
	const objFirst = {};
	const objSecond = {};
	// let increment = 0; //! we don't need this one in the optimized solution
	for (let i in arr1) {
		let value = arr1[i];
		objFirst[value] = objFirst[value] + 1 || 1;
	}
	for (let i in arr2) {
		let value = arr2[i];
		objSecond[value] = objSecond[value] + 1 || 1;
	}
	console.log(objFirst);
	console.log(objSecond);

	for (let key in objFirst) {
		if (!(key ** 2 in objSecond)) {
			return false;
		}
		if (objSecond[key ** 2] !== objFirst[key]) {
			return false;
		}
	}
	return true;
};

test("test if the second arrays contains values which are the square values of the first arrays, the frequency of the characters has to be equal, the length of the arrays has to be equal", () => {
	expect(same2([1, 2, 3], [1, 4, 9])).toEqual(true);
	expect(same2([1, 2, 3], [1, 4, 4])).toEqual(false);
	expect(same2([1, 2, 3], [1, 4, 4, 6, 7])).toEqual(false);
	expect(same2([1, 2, 3], [])).toEqual(false);
});
