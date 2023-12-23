function arrange(sentence) {
	let lengthObj = {};
	let arr = sentence.split(" ");

	for (let i in arr) {
		lengthObj[arr[i]] = arr[i].length;
	}
	let values = Object.values(lengthObj);
	console.log(values);
}

arrange("I love to code");
