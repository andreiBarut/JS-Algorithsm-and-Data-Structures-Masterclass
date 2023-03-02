// write a function that calculates the sum of all numberrs from 1 upt to (and including) some number n

// const calcSumUpTo = (n) => {
// 	let finalSum = 0;
// 	for (let i = 1; i <= n; i++) {
// 		finalSum += i;
// 	}
// 	return finalSum;
// };

// console.log(calcSumUpTo(7));

// second solution

// const calcSumUpTo2 = (n) => {
// 	return (n * (n + 1)) / 2;
// };

// console.log(calcSumUpTo2(8));

function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += 1;
	}
	return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t1 - t2) / 1000} seconds`);

function addUpTo2(n) {
	return (n * (n + 1)) / 2;
}

let t3 = performance.now();
addUpTo2(1000000000);
let t4 = performance.now();
console.log(`Time elapsed ${(t3 - t4) / 1000} seconds`);

//& problem here is that different machines will record different times, also SAME machines will record different times, based on the machine. It's still reliable, but the measurements can change. They may not be precise enough.
