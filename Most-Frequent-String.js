/*
Given an array of strings, 
find the one that appears most frequently and the number of times
it appears. 
If there are more than one element that occur that many times, 
pick any of them

Return the most repeated string s, 
and the number of times n it occurs,
as an array in the form [s, n]
*/

let mostRepeatedElement = function(arr){
 // create an object to store keys from the passed in array, assign key values to number of times index occurs
 // create variables for array index ( string ) and number of times it occurs 
    var countObj = {}
    let arrString = ""
    let counter = 0
    // iterate over input array, comparing each index to keys in myObj
    for (let i = 0; i < arr.length; i++){
        // if current array index is not already a key in myObj, create it, assign value to 1
        // else add 1 to current key value
        if (!countObj[arr[i]]){
            countObj[arr[i]] = 1
        } else {
            countObj[arr[i]]++
        }
    }    
    // now that strings and number of times they occur are in an object
    // we need to go through the object to pull the most repeated string ( key value pair with highest number )
    // into our storage variables that will be returned by the function
    for (let key in countObj){  // --- for each key in countObj
        if (countObj[key] > counter){  // --- if currently iterated key is greater than counter variable
            counter = countObj[key]  // --- then assign counter to value of currently iterated key
            arrString = key // --- and assign our string variable to currently iterated key
        }
    }
    // return string with most occurences and number of times it occured
    return [arrString, counter]
}