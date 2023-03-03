/*

& UNDERSTAND THE PROBLEM
& EXPLORE CONCRETE EXAMPLES
& BREAK IT DOWN 
& SOLVE / SIMPLIFY
& LOOK BACK AND REFACTOR

*/

//* LOOK BACK AND REFACTOR

/*
Can you check the result? Make sure the code works
Can you derive the result differently? Is there another way which seems viable
How intuitive is my solution?
Can you use the result or method for some other problem? 
Can you improve the performance of your solution?
Can you think of other ways to refactor your code? 
How have other people solved this problem?
*/

// function charCount(str) {
// 	let obj = {};
// 	for (let i of str) {
// 		let char = i.toLowerCase();
// 		if ()
// 	}
// }

// charCount("hi there");

// A - 65
// Z - 90
// a - 97
// z - 122
// 0 - 48
// 9 - 57

const string = "andreiii123!@#$$";

const isAlphaNumeric = (char) => {
	let code = char.charCodeAt(0);
	if (
		(code > 47 && code < 58) || // alpha numeric codes between 47 and 58
		(code > 64 && code < 91) || // alpha numeric between A and Z
		(code > 96 && code < 123) // alpha numeric between a and z
	) {
		return true;
	} else {
		return false;
	}
};

const charCount = (str) => {
	const obj = {};
	for (let i in str) {
		if (isAlphaNumeric(str[i])) {
			let char = str[i];
			obj[char] = obj[char] + 1 || 1;
		}
	}
	return obj;
};

console.log(charCount(string));
