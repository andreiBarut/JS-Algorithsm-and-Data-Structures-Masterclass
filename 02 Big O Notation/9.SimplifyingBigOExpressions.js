function logAtLeas5t(n) {
	for (let i = 1; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}

//for this one, we always search for the max between 5 and a given number of n. So we will always print 5 numbers minimum, and n numbers if n exceeds 5.
//THIS adds up to a big O of n -> O(n)

function logAtMost5(n) {
	for (let i = 1; i <= Math.min(5, n); i++) {
		console.log(i);
	}
}

//in this case, we will print the minimum between 5 and n. If n is less than five, then we print n numbers. If n is more than five, we ALWAYS print five nunmbers.
//THIS adds up to a big O of 1 (simplified), so O(1)
