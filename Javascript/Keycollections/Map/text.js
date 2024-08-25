
// Creating a new Map object
let map = new Map();


// Adding key-value pairs to the Map
map.set('key1', 'value1');
map.set(1, 'num1');
map.set(true, 'bool1');


// Getting values by key
console.log(map.get('key1')); // Output: value1
console.log(map.get(1)); // Output: num1
console.log(map.get(true)); // Output: bool1

// Checking if a key exists in the Map
console.log(map.has('key1')); // Output: true
console.log(map.has(1)); // Output: true
console.log(map.has(true)); // Output: true


// Logging the Map object
console.log(map); // Output: Map { 'key1' => 'value1', 1 => 'num1', true => 'bool1' }

// Getting the size of the Map
console.log(map.size); // Output: 3

