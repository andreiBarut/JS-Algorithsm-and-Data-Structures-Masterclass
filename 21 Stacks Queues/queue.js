//Queues are FIFO data structures
//First in First Out, like a queue

/*

HOW ARE THEY USED

- for processing tasks tasks
- they are foundations for more complex data structures
- print queue (pragmatic example)

*/

const q = [];

q.push("FIRST");
q.push("SECOND");
q.push("THIRD");

q.shift(); // for removing

//! THIS IS NOT GOOD FOR PERFORMANCE BECAUSE WHEn USING SHIFT WE HAVE TO REINDEX EVERYTHING

//^ AGAIN, INSERTION AND REMOVAL are prioritized, and are O(1). For searching and access it would be better to use something else.

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const node = new Node(val);
		if (!this.first) {
			this.first = node;
			this.last = node;
			this.size++;
		} else {
			this.last.next = node;
			this.last = node;
			this.size++;
			return this.size;
		}
	}

	dequeue() {
		if (!this.first) return null;
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

const queue = new Queue();

queue.enqueue("FIRST CUSTOMER");
queue.enqueue("SECOND CUSTOMER");
queue.enqueue("THIRD CUSTOMER");
queue.enqueue("FOURTH CUSTOMER");

console.log(queue);

queue.dequeue();

console.log(queue);
