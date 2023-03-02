function sumAndProduct(n) {
	let totalSum = 0;
	for (let i = 1; i <= n; i++) {
		totalSum += i;
	}
	let totalProd = 1;
	for (let j = 1; j <= n; j++) {
		totalProd *= j;
	}
	return `totalSum is ${totalSum}, totalProduct is ${totalProd}`;
}

console.log(sumAndProduct(10));

//this is still O(n)

function printAllPairs(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}

console.log(printAllPairs(5));

//? this is n number of operation inside an n number of operations, this will be O(n**2), as in n at the power of 2
