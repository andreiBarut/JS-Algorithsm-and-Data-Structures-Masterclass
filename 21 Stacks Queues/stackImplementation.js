//MY OWN STACK IMPLEMENTATION

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val) {
		// this is actually unshift
		let node = new Node(val);
		if (!this.first) {
			this.first = node;
			this.last = node;
			this.size++;
		} else {
			let temp = this.first;
			this.first = node;
			this.first.next = temp;
			this.size++;
		}
		return this.size;
	}
	pop() {
		// this is actually shift
		if (!this.first) {
			return null;
		}
		let temp = this.first;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
			this.size = 0;
			return temp.val;
		} else {
			this.first = this.first.next;
			this.size--;
			return temp.val;
		}
	}
}

//! THE ISSUE WITH MY INITIAL IMPLEMENTATION IS THAT THE POP METHOD IS NOT CONSTANT TIME, IT IS O(N)

// THERREFORE WE HAVE TO USE SHIFT AND UNSHIFT (basically add and remove from the beginning), but we call them push and pop, because the stack is a concept where we can push and pop following the LIFO principle

const stack1 = new Stack();

//^ STACKS prioritize insertion and removal (pushing and popping) and these operations are O(1)

//^they can be used for operations like undo / redo, function invocations (like the callstack)
