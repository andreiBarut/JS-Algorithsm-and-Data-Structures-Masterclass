// PROBLEM SOLVING

/*

& UNDERSTAND THE PROBLEM
& EXPLORE CONCRETE EXAMPLES
& BREAK IT DOWN 
& SOLVE / SIMPLIFY
& LOOK BACK AND REFACTOR

*/

//* BREAK IT DOWN

/*

Write out the steps that I need to take

*/

//^ write a funciton which takes in a string and returns counts of each character in the string.

function charCount(str) {
	//make object to return at the end
	const lettersFreq = {};
	const skippableChars = [",", ".", "!", "?", " ", "#", "$", "%", "^", "&", "*"];
	//loop over string for each character ...
	// if the char is a number/letter key in object, add one to count
	// if the char is a number/letter and not in object, add it and set value to 1
	// if char is something else (space, period, etc.) don't do anything
	str
		.toLowerCase()
		.split("")
		.map((element) => {
			if (skippableChars.includes(element)) {
				return;
			}
			lettersFreq[element] = lettersFreq[element] + 1 || 1;
		});
	//return the object at the end
	return lettersFreq;
}
