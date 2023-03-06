//ANAGRAM frequency counter

//^ Given two stings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//& UNDERSTAND THE PROBELM ? two words, the second word has the same letters as the first word. The order of the letters can be the same, or different; we can form the first word from the letters of the second word, the letters and the frequency of the letters has to be the same

//& CONCRETE EXAMPLES
/*

validAnagram(" "," ") // true
validAnagram("anagram", "nagaram") // true
validAnagram("rat", "car") // false
validAnagram("awesome", "awesom") // false
validAnagram("qwerty", "qeywrt") // true
validAnagram("texttwisttime", "timetwisttext") // true

? we can use these inputs in a test
*/

//& BREAK IT DOWN

/*

const validAnagram = (str1, str2) => {
    let freqCounter1 = {};
    let freqCounter 2 = {};
    ? we will use objects to store the frequencies
    for (let i of str1) {
        freqCounter1[i] = freqCounter1[i] + 1 || 1;
    }
    for (let i of str2) {
        freqCounter2[i] = freqCounter2[i] + 1 || 1;
    }
    console.log(freqCounter1);
    console.log(freqCounter2);
    ? we need to compare the two objects to see if the keys have the same values
    for (let key in freqCounter1) {
        ? if the key from freqCounter1 has the same value as the key from freqCounter2 -> return true
        if (freqCounter1[key] === freqCounter2[key]) {
            return `the second string ${str2} is an anagram of the first string ${str1}`;
        } else {
            return `the second string is not an anagram of the first string`;
        }
    }
}

*/

const validAnagram = (str1, str2) => {
	let freqCounter1 = {};
	let freqCounter2 = {};
	//? we will use objects to store the frequencies
	for (let i of str1) {
		freqCounter1[i] = freqCounter1[i] + 1 || 1;
	}
	for (let i of str2) {
		freqCounter2[i] = freqCounter2[i] + 1 || 1;
	}
	console.log(freqCounter1);
	console.log(freqCounter2);
	//? we need to compare the two objects to see if the keys have the same values
	for (let key in freqCounter1) {
		//? if the key from freqCounter1 has the same value as the key from freqCounter2 -> return true
		if (!(key in freqCounter2)) {
			return false;
		}
		if (!(freqCounter1[key] === freqCounter2[key])) {
			return false;
		}
	}
	return true;
};

console.log(validAnagram("awesome", "awesom"));
