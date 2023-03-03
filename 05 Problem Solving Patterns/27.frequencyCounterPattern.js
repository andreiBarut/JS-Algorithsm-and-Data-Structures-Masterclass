//Frequency Counter Pattern

// The pattern uses objects or sets to collect values/ frequencies of values. We do it this way so we can avoid nested loops which would give O(n^2)

//^ Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value square in the second array. The frequency of values must be the same.

//* MY SOLUTION - O(n^2)

// const same = (arr1, arr2) => {
// 	//create two objects which hold the keys and their respective frequencies
// 	let isBool = false;
// 	const objFirst = {};
// 	const objSecond = {};
// 	let increment = 0;
// 	for (let i in arr1) {
// 		let value = arr1[i];
// 		objFirst[value] = objFirst[value] + 1 || 1;
// 	}
// 	for (let i in arr2) {
// 		let value = arr2[i];
// 		objSecond[value] = objSecond[value] + 1 || 1;
// 	}
// 	Object.values(objSecond).map((element) => {
// 		if (element > 1 || Object.values(objFirst) !== Object.values(objSecond)) {
// 			isBool = false;
// 		}
// 	});
// 	Object.values(objFirst).map((element) => {
// 		if (element > 1 || Object.values(objFirst) !== Object.values(objSecond)) {
// 			isBool = false;
// 		}
// 	});
// 	Object.keys(objFirst).map((element) => {
// 		Object.keys(objSecond).map((elementSecond) => {
// 			if (elementSecond == element * element) {
// 				increment++;
// 				if (increment === arr1.length && arr1.length === arr2.length) {
// 					isBool = true;
// 				}
// 			}
// 		});
// 	});
// 	return isBool;
// };

// console.log(same([1, 3, 2, 4], [16, 1, 4, 9]));

//* OPTIMIZED SOLUTION O(n)

const same2 = (arr1, arr2) => {
	//create two objects which hold the keys and their respective frequencies
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
			//this is to check if the value of the key ^ 2 from the second object is the same as the value of the key from the first object, the key is the same (it's the key which is obtained by going through a loop through the first object) -> in other words, if the frequency of the corresponding key ^ 2 from the second object is the same frequency as the one from the same key from the first object.
			return false;
		}
	}
	return true;
};

console.log(same2([1, 2, 3, 2], [4, 4, 9, 1]));
// console.log(same2([1, 2, 3, 2], [4, 124145, 9, 1, 12421]));

const obj = { 1: 15, 2: 15, 16: 72 };
// console.log("_________________");
// for (let i in obj) {
// 	console.log(obj[i]);
// }
const obj2 = { firstName: "Andrei", age: 24 };

if ("age" in obj2) {
	console.log(true, "hi");
}

console.log("age" in obj2);
