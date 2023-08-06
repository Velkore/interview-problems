//* 3Sum - Problem Statement: Given an array of integers find all unique triplets which give the sum of zero.
//* The solution set must not contain duplicate triplets.

//* Example:
//* Given array nums = [-1, 0, 1, 2, -1, -4],

//* Example solution set:
//* [
//*   [-1, 0, 1],
//*   [-1, -1, 2]
//* ]

//* Solution 1: Pointers
function threeSum(nums) {
	//* Create a result array to store the triplets
	const result = [];
	//* Sort the input array in-place and ascending order
	nums = nums.sort((a, b) => a - b);
	//* Loop through the array starting from the first element and ending at the third last element (nums.length - 2 is to make sure that we have at least 3 elements to form a triplet)
	for (let i = 0; i < nums.length - 2; i++) {
		//* Skip duplicates for i (i > 0 is to make sure that we do not skip the first element) (nums[i] === nums[i - 1] is to make sure that we do not skip the first duplicate)
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		//* Create two pointers j and k to point to the next element after i and the last element of the array respectively
		let j = i + 1;
		let k = nums.length - 1;

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k];
			//* If sum is 0, push the triplet to the result array and increment j and decrement k
			if (sum === 0) {
				result.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;

				//* Skip duplicates for j and k (j < k is to make sure that j and k do not cross each other)
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

//? What is the difference between the two solutions? The first solution is more efficient in terms of space complexity but the second solution is more efficient in terms of time complexity

//* Get those reps in

function threeSumRep(nums) {
	const result = [];
	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let j = i + 1;
		let k = nums.length - 1;

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k];

			if (sum === 0) {
				result.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;

				while (j < k && nums[j] === nums[j - 1]) j++;
				while (j < k && nums[k] === nums[k - 1]) k--;
			} else if (sum < 0) {
				j++;
			} else {
				k--;
			}
		}
	}

	return result;
}

console.log(threeSumRep([-1, 0, 1, 2, -1, -4]));
