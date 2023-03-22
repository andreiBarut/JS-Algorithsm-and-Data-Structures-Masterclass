// What is a stack?

//STACKS AND QUEUES - abstract data structures.

//STACK - LIFO (Last in First Out) - A collection of books on my desk
// the last thing to be added in is the first thing to be removed.

// GOOD EXAMPLE - The call stack

// A STACK IS A CONCEPT - STRUCTURE DATA IN A CERTAIN WAY

// ^ 1. CREATING A STACK WITH AN ARRAY (easiest way)

const stack = [];

stack.unshift("1");
stack.unshift("2");
stack.unshift("3");

console.log(stack);

console.log(stack.shift());
console.log(stack);

//? HOWEVER, IT'S BETTER TO USE PUSH() AND POP() FOR PERFORMANCE
