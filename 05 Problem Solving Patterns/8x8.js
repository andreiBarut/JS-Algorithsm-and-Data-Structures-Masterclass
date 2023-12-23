function getAnagrams(s) {
	let firstHalf = s.slice(0, s.length / 2);
	let secondHalf = s.slice(s.length / 2);
	let freqObj1 = {};
	let freqObj2 = {};
	for (let i in firstHalf) {
		freqObj1[firstHalf[i]] = freqObj1[firstHalf[i]] + 1 || 1;
	}
	for (let j in secondHalf) {
		freqObj2[secondHalf[j]] = freqObj2[secondHalf[j]] + 1 || 1;
	}
	console.log(secondHalf);
	console.log(freqObj1);
	console.log("freqObj2", freqObj2);
	for (let key in freqObj1) {
		if (!(key in freqObj2)) {
			return false;
		}
		if (!(freqObj1[key] === freqObj2[key])) {
			return false;
		}
	}
	for (let key in freqObj1) {
		freqObj1[freqObj1[key]] = 15;
		console.log(freqObj1);
	}
	return true;
}

console.log(getAnagrams("12361236"));
