function charCount(str) {
	if (typeof str != "string") {
		return undefined;
	} else if (str === undefined) {
		return undefined;
	}
	//make object to return at the end
	const lettersFreq = {};
	const skippableChars = [
		",",
		".",
		"!",
		"?",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")",
	];
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

test("char frequency", () => {
	objOutput = { a: 4, n: 1, g: 1, r: 1, m: 1 };
	expect(charCount("anaGramA!@")).toEqual(objOutput);
	expect(charCount("anaGramA!@@%$(*%#&*(%")).toEqual(objOutput);
	expect(charCount()).toBe(undefined);
	expect(charCount(null)).toBe(undefined);
	expect(charCount(140298)).toBe(undefined);
});
