// Definition of a binary tree and its traversal

// Create a node class to represent a node in the binary tree
class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

// Create a binary tree class
class BinaryTree {
	constructor() {
		this.root = null;
	}

	// Insert a new node into the binary tree
	insert(data) {
		const newNode = new Node(data);

		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	// Helper function to insert a new node into the binary tree
	insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	// In-order traversal to print the tree's elements
	inOrderTraversal(node, callback) {
		if (node !== null) {
			this.inOrderTraversal(node.left, callback);
			callback(node.data);
			this.inOrderTraversal(node.right, callback);
		}
	}
}

// Create a binary tree object
const tree = new BinaryTree();

// Insert nodes into the tree
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(8);

// Perform an in-order traversal to print the tree's elements
const result = [];
tree.inOrderTraversal(tree.root, (data) => {
	result.push(data);
});

console.log(result); // Output: [3, 5, 8, 10, 15]
