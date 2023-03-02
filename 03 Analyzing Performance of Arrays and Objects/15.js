//When arrays are slow

let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

//* ARRAYS are excellent when we need order

//for instance, when we need insertion or removal.

//let's say we want to push an item to the array, at the end basically, this is O(1)

names.push("Raj"); // it just adds an item after the last element of the array, this is one operation.

//BUT, if we want to add an item at the beginning of the array, this is O(n)

//the same goes for the removing from the beginning.

//? WHY? because we have to shift the indexes to the left for each element. The prior first element, in our case "Michael", will no longer have the index of 0, Melissa will no longer have an index of 1. Their indexes will be shifted (incremented by 1), due to the fact that we're adding another element at the beginning which will have the index of 0. And this shifting of indexes consists of as many operations as the length of the array. Hence, it grows with the array.

//but when we talk about access, it is O(1)

console.log(names[2]); //JS goes straight to index number to and returns that value, it doesn't go to index 0, then 1 and then 2. Therefore it is always ONE operation.
