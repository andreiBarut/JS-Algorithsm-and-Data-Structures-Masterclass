// NAIVE STRING SEARCH

const findMatch = (str, match) => {
	//wowomgzgo, omg
	//
	let matches = 0;

	// let index = 0;
	for (let i in str) {
		//o === str[4]
		for (let j in match) {
			if (match[j] !== str[i + j]) break;
			if (j === short.length - 1) matches++;
		}
	}
	return matches;
};

console.log(findMatch("wowomgzgo", "omg"));

//!APPARENTLY THIS SOLUTION DOES NOT WORK
