function sum(num1, num2) {
	return num1 + num2;
}

test("adding two numbers", () => {
	expect(sum(6, 27)).toBe(33);
});
