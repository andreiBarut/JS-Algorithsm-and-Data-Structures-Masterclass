// NAIVE STRING SEARCH

const arr = ["a", "b", "c", "d", "b", "b"];
let count = 0;
for (let i in arr) {
	if (arr[i] === "b") {
		count++;
	}
}

// console.log(count);

// let string = "himan";
// console.log(string.includes("him"));

const findString = (longString, shortString) => {
	let count = 0;
	for (let i in longString) {
		for (let j = i + 1; j < shortString.length; j++) {
			if (shortString[j] !== longString[i]) {
				break;
			} else {
				if ((j = shortString.length - 1)) {
					count++;
				}
				continue;
			}
		}
	}
	return count;
};

console.log(findString("wowomgzomgomg", "omg"));
//!APPARENTLY THIS SOLUTION DOES NOT WORK
