//Big O of Arrays

let names = ["Michael", "Melissa", "Andrea"];
let surnames = ["Johnson", "Cooper"];
names.push("Bob"); //^ O(1)
names.pop(); //^ O(1)
names.shift("Alexander"); //^ O(n)
names.unshift(); //^ O(n)
// console.log(names.concat(surnames)); //^ O(n) //* CONCAT does not modify the original array
// console.log(names.slice(0, 2)); //^ O(n) //* SLICE does NOT modify the original array
// console.log(names.splice(0, 1)); //^ O(n) //* SPLICE DOES modify the original array

names.sort(); //^ O(n * logN) this is because we have to compare values between them and then shift values according to our sorting criteria, this means also shifting the indexes

names.forEach((index, value) => {
	//^ O(n) because for each element we will do an operation, so if operations grow with the number of elements within an array
	console.log(index, value);
});

const filterRes = names.filter((word) => word.charAt(0) === "M"); //^ O(n) because we have to go through each element and see if the character at index 0 of that string is equal to M in this case
console.log("filtered", filterRes);

const numbers = [1, 2, 3, 4];

console.log(
	"reduced",
	numbers.reduce((a, b) => a + b),
	numbers.reduceRight((a, b) => a - b) //^ O(n) because we have to do an operation between each elements from left to right, or from right to left in the second case
);

console.log(names.map((element) => element + 1)); //^ O(n) because we have to go through each element and modify it according to our criteria

console.log(names);
