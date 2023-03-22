// In an array is indexed with a number
// Linked Lists contain nodes with a value and a pointer to another node or null
// LL contain a head, tail and a length property.

//NODE

//piece of data -val
//reference to the nexxt node - next

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("SIR");

console.log(list.head.next);
