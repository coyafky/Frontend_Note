let arr = [175, 50, 25];

// Callback function for reduce method
function subofArray(total, num) {
    return total - num;
}

//Function to execute reduce method 
function myGeeks(item) {

    // Display output
    console.log(arr.reduce(subofArray));
}
myGeeks()