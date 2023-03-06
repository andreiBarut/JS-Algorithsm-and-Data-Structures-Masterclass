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

// console.log(validAnagram("rat", "car"));

test("check if second word is an anagram of the first word", () => {
	expect(validAnagram("anagram", "nagaram")).toBe(true);
	expect(validAnagram("rat", "car")).toBe(false);
	expect(validAnagram("awesome", "awesom")).toBe(false);
	expect(validAnagram("qwerty", "qeywrt")).toBe(true);
	expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
});
