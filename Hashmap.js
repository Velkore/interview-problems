// What is a Hashmap?
// A hashmap is a data structure that is used to store key-value pairs.
// It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

// Creating a hashmap using the Map object
const hashmap = new Map();

// Adding key-value pairs
hashmap.set("name", "John");
hashmap.set("age", 30);

// Accessing values
console.log(hashmap.get("name")); // Output: John
console.log(hashmap.get("age")); // Output: 30

// Checking if a key exists
console.log(hashmap.has("city")); // Output: false

// Deleting a key-value pair
hashmap.delete("age");