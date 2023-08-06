//* 3Sum - Problem Statement: Given an array of integers find all unique triplets which give the sum of zero.
//* The solution set must not contain duplicate triplets.

//* Example:
//* Given array nums = [-1, 0, 1, 2, -1, -4],

//* Example solution set:
//* [
//*   [-1, 0, 1],
//*   [-1, -1, 2]
//* ]

//* Solution 1: Brute Force
function threeSum(nums) {
	//* Create a result array
	const result = [];
	//* Sort the input array in-place and ascending order
	nums = nums.sort((a, b) => a - b);
	//* Loop through the array
	for (let i = 0; i < nums.length - 2; i++) {
		//* Skip duplicates
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let j = i + 1;
		let k = nums.length - 1;

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k];
			//* If sum is 0, push the triplet to the result array
			if (sum === 0) {
				result.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;

				//* Skip duplicates
				while (j < k && nums[j] === nums[j - 1]) j++;
				while (j < k && nums[k] === nums[k + 1]) k--;
				//* If sum is less than 0, increment j
			} else if (sum < 0) {
				j++;
				//* If sum is greater than 0, decrement k
			} else {
				k--;
			}
		}
	}
	//* Return the result array
	return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //* O/P: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
//? What is the space complexity of this solution? O(1) - We are not creating any additional space
//? What is the time complexity of this solution? O(n log n) - We are looping through the array and for each element we are looping through the rest of the array

//* Solution 2: Using Hash Map
// Refactor the above solution to use a hash map
function threeSumHash(nums) {
	//* Create a result array to store the triplets
	const result = [];
	//* Create a hash map to store the elements of the array
	const map = {};
	//* Sort the input array in-place and ascending order
	nums = nums.sort((a, b) => a - b);
	//* Loop through the array starting from the first element
	for (let i = 0; i < nums.length; i++) {
		//* Skip duplicates for i
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		//* Loop through the rest of the array starting from the next element after i
		for (let j = i + 1; j < nums.length; j++) {
			//* Calculate the complement of the current element and the element at index j
			let complement = 0 - nums[i] - nums[j];
			//* If the complement exists in the hash map, push the triplet to the result array
			if (complement in map && map[complement] > j) {
				result.push([nums[i], nums[j], complement]);
				//* Skip duplicates for j
				while (j < nums.length && nums[j] === nums[j + 1]) j++;
			}
			//* Add the current element to the hash map with the index as the value of the key (element) in the hash map (if the element already exists in the hash map, it will be overwritten with the latest index)
			map[nums[j]] = j + 1;
		}
	}
	//* Return the result array
	return result;
}

console.log(threeSumHash([-1, 0, 1, 2, -1, -4])); //* O/P: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
//? What is the space complexity of this solution? O(n) - We are creating a result array and a hash map
//? What is the time complexity of this solution? O(n^2) - We are looping through the array and for each element we are looping through the rest of the array

//* Solution 3: Using pointers
// Refactor the above solution to use pointers
function threeSumPointers(nums) {
	//* Create a result array to store the triplets
	const result = [];
	//* Sort the input array in-place and ascending order
	nums = nums.sort((a, b) => a - b);
	//* Loop through the array starting from the first element
	for (let i = 0; i < nums.length - 2; i++) {
		//* Skip duplicates for i
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		//* Create two pointers j and k
		let j = i + 1;
		let k = nums.length - 1;
		//* Loop through the array starting from the next element after i
		while (j < k) {
			//* Calculate the sum of the current element and the elements at index j and k
			let sum = nums[i] + nums[j] + nums[k];
			//* If the sum is 0, push the triplet to the result array
			if (sum === 0) {
				result.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				//* Skip duplicates for j and k
				while (j < k && nums[j] === nums[j - 1]) j++;
				while (j < k && nums[k] === nums[k + 1]) k--;
				//* If the sum is less than 0, increment j
			} else if (sum < 0) {
				j++;
				//* If the sum is greater than 0, decrement k
			} else {
				k--;
			}
		}
	}
	//* Return the result array
	return result;
}

console.log(threeSumPointers([-1, 0, 1, 2, -1, -4])); //* O/P: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
//? What is the space complexity of this solution? O(1) - We are not creating any additional space
//? What is the time complexity of this solution? O(n log n) - We are looping through the array and for each element we are looping through the rest of the array

//? Which solution is the best? Solution 3 is the best because it has the best space complexity and time complexity
