// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

// Example:
// First Pass:
// ( 5 1 4 2 8 ) – > ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
// ( 1 5 4 2 8 ) – >  ( 1 4 5 2 8 ), Swap since 5 > 4
// ( 1 4 5 2 8 ) – >  ( 1 4 2 5 8 ), Swap since 5 > 2
// ( 1 4 2 5 8 ) – > ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
// Second Pass:
// ( 1 4 2 5 8 ) – > ( 1 4 2 5 8 )
// ( 1 4 2 5 8 ) – > ( 1 2 4 5 8 ), Swap since 4 > 2
// ( 1 2 4 5 8 ) – > ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) – >  ( 1 2 4 5 8 )
// Now, the array is already sorted, but our algorithm does not know if it is completed.
// The algorithm needs one whole pass without any swap to know it is sorted.
// Third Pass:
// ( 1 2 4 5 8 ) – > ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) – > ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) – > ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) – > ( 1 2 4 5 8 )

function bubbleSort(arr) {
    // loop through array
    for (let i = 0; i < arr.length; i++) {
        // loop through array again
        for (let j = 0; j < arr.length; j++) {
            // if current index is greater than next index
            if (arr[j] > arr[j + 1]) {
                // swap current index with next index
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // return sorted array
    return arr
}