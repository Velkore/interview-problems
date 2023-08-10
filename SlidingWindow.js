/*
Subarray Sum Equals K:
Problem Statement: Given an array of integers and an integer K, find the total number of continuous subarrays whose sum equals to K.

Example:
    Input: nums = [1,2,5,1,1,3,3], k = 7
    Output: 3

Explanation: The subarrays that sum to 7 are are [2,5],  [5,1,1], and [1,3,3]
*/

//* Find the total number of continuous subarrays whose sum equals K
function subArraySum(nums, K) {
	//* Edge Case
	if (nums.length === 0) {
		return 0;
	}

	//* Initialize variables for the total number of subarrays, window start, and window sum
	let totalSubArrays = 0;
	let windowStart = 0;
	let windowSum = 0;

	//* Loop through the array and add the current element to the window sum
	for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
		windowSum += nums[windowEnd];

		//* If the window sum is greater than K, subtract the window start element from the window sum and increment the window start
		while (windowSum > K) {
			windowSum -= nums[windowStart];
			windowStart++;
		}

		//* If the window sum equals K, increment the total number of subarrays
		if (windowSum === K) {
			totalSubArrays++;
		}
	}

	//* Return the total number of subarrays
	return totalSubArrays;
}

// console.log(subArraySum([1, 2, 5, 1, 1, 3, 3], 7)); //* 3
// console.log(subArraySum([1, 2, 5, 1, 1, 3, 3], 6)); //* 2

//? Time Complexity: O(n) - The algorithm runs in linear time since it iterates through the input array once.
//? Space Complexity: O(1) - The extra space used by the algorithm is constant, regardless of the size of the input array.

//* Using a sliding window algorithm, find the longest substring of input string without repeating characters

function longestSubString(str) {
	//* Initialize a set to store current substring
	let tracker = new Set();
	let windowStart = 0;
	let windowEnd = 0;
	let longest = 0;

	//* Loop through the string
	while (windowEnd < str.length && windowStart < str.length) {
		//* If the current character is not in the set, add it to the set and increment the windowEnd
		if (!tracker.has(str[windowEnd])) {
			tracker.add(str[windowEnd]);
			windowEnd++;
			//* If the current character is in the set, delete the first character in the set and increment the windowStart
		} else {
			tracker.delete(str[windowStart]);
			windowStart++;
		}
		//* Update the longest substring
		longest = Math.max(longest, tracker.size);
	}
	//* Return the longest substring
	return longest;
}

console.log(longestSubString("abcabcbb")); //* 3
//? Time Complexity: O(n) - The algorithm runs in linear time since it iterates through the input string once.
//? Space Complexity: O(n) - The extra space used by the algorithm is linear, since the size of the set is dependent on the size of the input string.
