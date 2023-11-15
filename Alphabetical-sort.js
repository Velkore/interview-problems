// Sort strings in an array alphabetically

function sortAlphabetically(arr) {
	return arr.sort();
}

console.log(sortAlphabetically(["dog", "cat", "zebra", "ant"])); // Output: [ 'ant', 'cat', 'dog', 'zebra' ]

// Now without using the built-in sort() method

function sortAlphabetically(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
}

// How does this work with strings?
// Strings are compared based on their UTF-16 code units.
// The UTF-16 code unit value of each letter is compared to the UTF-16 code unit value of the next letter.
// If the UTF-16 code unit value of the current letter is greater than the UTF-16 code unit value of the next letter, we swap them.
// We continue this process until the array is sorted.

