//Counting operations

function addUpTo(n) {
	return (n * (n + 1)) / 2;
}

//& how many operations are there?

// we have the multiplication *
//then addition +
// then division /

//THIS adds up to a total of 3 operations, which would get simplified as O(1) notation I presume.

function addUpToLonger(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

//& how many operations are in the second function?

// we have the total variable assignment (1)
//we have the i variable assignemnt (1)
// then we have the i incrementation operation (this is incremented as many times as n) so a lot
// then we have the total variable incrementation, which is incremented again, as many times as n
// then we have another assignemtn n times, which is total = total + 1

//THIS adds up to a total of O(5n + 2 assignments more or less), but it gets simplified to O(n)
