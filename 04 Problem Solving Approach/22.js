// PROBLEM SOLVING

/*

& UNDERSTAND THE PROBLEM
& EXPLORE CONCRETE EXAMPLES
& BREAK IT DOWN 
& SOLVE / SIMPLIFY
& LOOK BACK AND REFACTOR

*/

//* SOLVE / SIMPLIFY

function charCount(str) {
	//make object to return at the end
	const result = {};
	//loop over string for each character ...
	for (let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase();
		// if the char is a number/letter key in object, add one to count
		if (result[char] > 0) {
			result[char]++;
			// if the char is a number/letter and not in object, add it and set value to 1
		} else {
			result[char] = 1;
		}
	}
	// if char is something else (space, period, etc.) don't do anything

	//return the object at the end
	return result;
}

console.log(charCount("Hi there!"));
