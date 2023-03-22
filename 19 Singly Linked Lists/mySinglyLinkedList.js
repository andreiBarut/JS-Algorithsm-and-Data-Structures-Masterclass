class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// const firstNode = new Node(1);
// const secondNode = (firstNode.next = new Node(2));
// const thirdNode = (secondNode.next = new Node(3));

// console.log(firstNode);
// console.log(secondNode);
// console.log(thirdNode);

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		//list is empty, no node
		if (!this.head) {
			return null;
		}

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;
			return;
		}

		let currentNode = this.head;
		let penultimateNode = this.head;
		while (currentNode.next) {
			penultimateNode = currentNode;
			currentNode = currentNode.next;
		}

		penultimateNode.next = null;
		this.tail = penultimateNode;
		this.length--;

		return currentNode;
	}

	shift() {
		if (!this.head) {
			return null;
		}

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;
			return;
		}

		let currentHead = this.head;
		let nextHead = currentHead.next;
		this.head = nextHead;
		this.length--;

		return currentHead;
	}

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return;
		}

		this.head.next = this.head;
		this.head = newNode;
		this.length++;
		return this.head;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}

		let target = this.head;
		for (let i = 0; i < index; i++) {
			target = target.next;
		}

		return target;
	}

	set(index, val) {
		if (index < 0 || index >= this.length) {
			return null;
		}

		const target = this.get(index);
		target.value = val;
	}

	insert(index, val) {
		//if list is empty or index is in invalid range
		if (!this.tail || index < 0 || index > this.length) {
			return null;
		}

		//insert at end
		if (index === this.length) {
			this.push();
			return `succesful insertion`;
		}

		//insert at begining
		if (index === 0) {
			this.unshift();
			return `succesful insertion`;
		}

		//middle
		let newNode = new Node(val);
		let previous = this.get(index - 1);
		let current = previous.next;
		previous.next = newNode;
		newNode.next = current;
		this.length++;
		return `succesful insertion`;
	}

	remove(index) {
		if (!this.tail || index < 0 || index > this.length) {
			return null;
		}

		//insert at end
		if (index === this.length) {
			this.pop();
			return `succesful insertion`;
		}

		//insert at begining
		if (index === 0) {
			this.shift();
			return `succesful insertion`;
		}

		//middle
		let target = this.get(index - 1);
		let temp = target.next;
		temp = temp.next;
		target.next = temp;
		this.length--;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = node.next;
			prev = node;
			node = next;
		}
		return this;
	}
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list);
