// Input array
let arr = [1.5, 20.3, 11.1, 40.7];

// Callback function for reduce method
function sumofArray(sum, num) {
    return sum + Math.round(num);
}

//Function to execute reduce method 
function myGeeks(item) {

    // Display output
    console.log(arr.reduce(sumofArray, 0));
}
myGeeks();
