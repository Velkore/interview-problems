// Import readline module from node.js
const readline = require("readline");

// Create readline interface to read input from user
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Prompt user for input and print out greeting
rl.question("Please enter your name: ", (name) => {
	console.log(`Hello, ${name}!`);
	rl.close();
});
