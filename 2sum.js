// 2Sum : Look for two numbers in an array that sum to a target number.
// One way we solved it was by using a Hashmap to store values:
// The function should return an array of indices that add up to the target.

function twoSumHash(nums, target) {
	const numMap = {}; // Hash map to store visited numbers

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		// If complement is in map, we found a pair that adds up to target
		if (numMap[complement] !== undefined) {
			return [numMap[complement], i];
		}

		// Otherwise, add the current number and its index to the map
		numMap[nums[i]] = i;
	}

	// If no pair is found, return null or an appropriate value
	return null;
}

// Which works in O(n) time and O(n) space.
// But we can also do an in-place sort first, and then use the two pointers to find the numbers,
// which brings us up to O(n*log(n)) time, but down to O(1) space.

// Refactor to use two pointers
function twoSumPointers(nums, target) {
	nums.sort((a, b) => a - b); // Sort in-place

	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		const sum = nums[left] + nums[right];

		if (sum === target) {
			return [left, right];
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}

	return null;
}

function gotIt(nums, target) {
	nums.sort((a, b) => a - b); //Sort in-place

	// Define our two pointers
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		const sum = nums[left] + nums[right];

		if (sum === target) {
			return [left, right];
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}

	return null;
}

// Refactor to return the values of the two indices
function twoSumVal(nums, target) {
	// Sort in-place
	nums.sort((a, b) => a - b);

	// Define our two pointers
	let left = 0;
	let right = nums.length - 1;

	// While our left pointer is less than our right pointer, cycle through the nums array looking for two index values that add up to target
	while (left < right) {
		const sum = nums[left] + nums[right];

		if (sum === target) {
			return [nums[left], nums[right]];
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}

	return null;
}

// console.log(twoSumVal([2, 7, 11, 15], 9)); // [2, 7]

// Two pointers returning values of indices
function repetitionBaby(nums, target) {
	// Define our two pointers
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		// Define a variable to keep track of the sum of our pointers through each iteration
		const sum = nums[left] + nums[right];

		// Let's see what the value of our pointers is in each iteration of the loop
		console.log(nums[left], nums[right]);

		// If sum is exactly equal to the input target number, then we've secured the bag! Return an array containing the values of our pointers
		if (sum === target) {
			return [nums[left], nums[right]];
			// If the sum is less than the target value, move our left pointer one index to the right
		} else if (sum < target) {
			left++;
			// If the sum is greater than the target value, move our right pointer one index to the left
		} else {
			right--;
		}
	}

	// When the provided nums array contains no numbers that equal target value, return null
	return null;
}

console.log(repetitionBaby([2, 7, 11, 15], 18)); // [7, 11]
