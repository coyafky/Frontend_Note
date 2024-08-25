function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }

    }

    return -1

}
const numbers = [2, 4, 67, 8, 44, 6, 12];
console.log(linearSearch(numbers, 8)); // Output: 3 (index of 8 in the array)
console.log(linearSearch(numbers, 28)); // Output: -1 (28 not found in the array)