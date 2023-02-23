// write a function that calculates the sum of all numberrs from 1 upt to (and including) some number n

const calcSumUpTo = (n) => {
	let finalSum = 0;
	for (let i = 1; i <= n; i++) {
		finalSum += i;
	}
	return finalSum;
};

console.log(calcSumUpTo(7));

// second solution

// const calcSumUpTo2 = (n) => {
// 	return (n * (n + 1)) / 2;
// };

// console.log(calcSumUpTo2(8));
