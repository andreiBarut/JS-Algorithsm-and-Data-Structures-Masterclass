const sum = (num1, num2) => {
	if (num1 === undefined || num2 === undefined) {
		return undefined;
	} else if (typeof num1 != "number" || typeof num2 != "number") {
		return "please input a number";
	} else {
		return num1 + num2;
	}
};

test("add two numbers", () => {
	expect(sum(1, 2)).toBe(3);
	expect(sum(1)).toBe(undefined);
	expect(sum(2, 3, 3)).toBe(5);
	expect(sum(2, "Andrew")).toBe("please input a number");
});

const wordCount = (str) => {
	const lettersFreqObj = {};
	if (str === undefined) {
		return undefined;
	} else if (typeof str !== "string") {
		return "please input a valid string";
	}
	str
		.toLowerCase()
		.split("")
		.map((element) => {
			lettersFreqObj[element] = lettersFreqObj[element] + 1 || 1;
		});
	return lettersFreqObj;
};

test("letter frequency of a string", () => {
	objOutput = { a: 4, n: 1, g: 1, r: 1, m: 1 };
	expect(wordCount("anagrama")).toEqual(objOutput);
	expect(wordCount()).toBe(undefined);
	expect(wordCount(123)).toBe("please input a valid string");
});
