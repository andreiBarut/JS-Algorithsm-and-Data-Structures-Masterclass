class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		const node = new Node(val);
		if (!this.root) {
			this.root = node;
		} else {
			let currentNode = this.root;
			while (true) {
				if (val > currentNode.val) {
					if (!currentNode.right) {
						currentNode.right = node;
						return this;
					} else {
						currentNode = currentNode.right;
					}
				} else {
					if (!currentNode.left) {
						currentNode.left = node;
						return this;
					} else {
						currentNode = currentNode.left;
					}
				}
			}
		}
	}
	search(val) {
		if (!this.root) {
			return this;
		} else {
			let currentNode = this.root;
			while (true) {
				if (val === currentNode.val) {
					return currentNode;
				} else if (val > currentNode.val) {
					if (currentNode.right) {
						currentNode = currentNode.right;
					} else {
						return undefined;
					}
				} else if (val < currentNode.val) {
					if (currentNode.left) {
						currentNode = currentNode.left;
					} else {
						return undefined;
					}
				}
			}
		}
	}
}

const tree = new BinarySearchTree();

tree.insert(15);
tree.insert(18);
tree.insert(17);
tree.insert(16);
tree.insert(32);
tree.insert(33);
tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(11);
tree.insert(12);
tree.insert(4);
tree.insert(6);

console.log(tree);
