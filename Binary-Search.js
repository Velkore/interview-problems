// Binary Search Demo

// Binary Search is a much faster form of searching an array than linear search but it requires that the array is sorted.

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
function search(arr, val) {
	// add whatever parameters you deem necessary - good luck!
	let left = 0;
	let right = arr.length - 1;
	let middle = Math.floor((left + right) / 2);
	while (arr[middle] !== val && left <= right) {
		if (val < arr[middle]) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
		middle = Math.floor((left + right) / 2);
	}
	if (arr[middle] === val) {
		return middle;
	}
	return -1;
}