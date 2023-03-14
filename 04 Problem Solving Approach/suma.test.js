function suma(num1, num2) {
	if (num1 == undefined || num2 == undefined) {
		return undefined;
	} else {
		return num1 + num2;
	}
}

suma(5, 2);
suma(10, 4);

test("add two numbers", () => {
	expect(suma(1, 2)).toBe(3);
	expect(suma(1)).toEqual(undefined);
	expect(suma(1, 2, 3, 4)).toEqual(3);
});
