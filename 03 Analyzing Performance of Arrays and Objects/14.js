//OBJECTS in terms of Big O

let instructor = {
	firstName: "Kelly",
	isInstructor: true,
	favouriteNumbers: [1, 2, 3, 4],
}; // example of object literal

// delete instructor.favouriteNumbers; //! this is how we delete a property in an object

console.log(instructor);
//* OBJECTS ARE EXCELENT when we don't need ordering

// Insertion O(1)
// Removal O(1)
// Searching O(n)
// Access O(1)

//* O(n) object methods

console.log(Object.entries(instructor));
console.log(Object.keys(instructor));
console.log(Object.values(instructor));

//? WHY? because as the number of properties grows, the number of operations grows as well

console.log(instructor.hasOwnProperty("James")); // this is only one operation, no matter what
