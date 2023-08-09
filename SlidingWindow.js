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

console.log(subArraySum([1, 2, 5, 1, 1, 3, 3], 7)); //* 3
console.log(subArraySum([1, 2, 5, 1, 1, 3, 3], 6)); //* 4

//? Time Complexity: O(n) - The algorithm runs in linear time since it iterates through the input array once.
//? Space Complexity: O(1) - The extra space used by the algorithm is constant, regardless of the size of the input array.
