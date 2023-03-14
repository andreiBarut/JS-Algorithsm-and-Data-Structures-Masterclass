//built in sort in JS

const arr = ["Steele", "Colt", "Data Structures", "Algorithms"].sort();

console.log(arr);

const nrArr = [6, 4, 15, 10].sort();

console.log(nrArr);

console.log(nrArr.sort((num1, num2) => num2 - num1)); //^ sort by descending order
console.log(nrArr.sort((num1, num2) => num2 - num1)); //^ sort by ascending order
console.log(arr.sort((str1, str2) => str1.length - str2.length)); //^ sort by string length (this is for the array of strings)
