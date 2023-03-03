// PROBLEM SOLVING

/*

& UNDERSTAND THE PROBLEM
& EXPLORE CONCRETE EXAMPLES
& BREAK IT DOWN 
& SOLVE / SIMPLIFY
& LOOK BACK AND REFACTOR

*/

//* EXPLORE CONCRETE EXAMPLES

//^ write a funciton which takes in a string and returns counts of each character in the string.

/*

concrete example : "anagrama", we would need perhaps a map object with each character as a key, and that character frequency as a value
so worCount("anagrama") -> {a:4, n:1, g:1, r:1, m: 1}

*/

const str = "AnagramA@";

const wordCount = (str) => {
	const lettersFreq = {};
	const skippableChars = [",", ".", "!", "?", " ", "#", "$", "%", "^", "&", "*"];
	str
		.toLowerCase()
		.split("")
		.map((element) => {
			if (skippableChars.includes(element)) {
				return;
			}
			lettersFreq[element] = lettersFreq[element] + 1 || 1;
		});
	return lettersFreq;
};

console.log(wordCount(str));
