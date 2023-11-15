// Linked List Demonstration
// What is a Linked List?
// A linked list is a linear data structure that consists of a sequence of nodes.
// Each node contains a piece of data and a reference to the next node in the sequence.
// The last node in the sequence points to null.
// 

// Create a node class to represent a node in the linked list
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

// Create a linked list class
class LinkedList {
	constructor() {
		this.head = null;
	}

	// Insert a new node into the linked list
	insert(data) {
		const newNode = new Node(data);

		if (this.head === null) {
			this.head = newNode;
		} else {
			this.insertNode(this.head, newNode);
		}
	}

	// Helper function to insert a new node into the linked list
	insertNode(node, newNode) {
		if (node.next === null) {
			node.next = newNode;
		} else {
			this.insertNode(node.next, newNode);
		}
	}

	// Delete a node from the linked list
	delete(data) {
		this.head = this.deleteNode(this.head, data);
	}

	// Helper function to delete a node from the linked list
	deleteNode(node, data) {
		if (node === null) {
			return null;
		} else if (data === node.data) {
			return node.next;
		} else {
			node.next = this.deleteNode(node.next, data);
			return node;
		}
	}

	// Print the linked list
	print() {
		let current = this.head;

		while (current !== null) {
			console.log(current.data);
			current = current.next;
		}
	}
}

// Create a linked list object
const list = new LinkedList();

// Insert nodes into the linked list
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);

// Delete a node from the linked list
list.delete(20);

// Print the linked list
list.print(); // Output: 10 30 40
