function countOnesSortedBinaryArray(arr) {
    let low =0;
    let high = arr.length-1;
    while (low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]===0){
            low = mid+1;
        }
        else{
            high=mid-1
        }
    }
    return arr.length-low;
}
const binaryArray = [0, 0, 0, 1, 1, 1, 1];
const count = countOnesSortedBinaryArray(binaryArray);
console.log(`Number of ones in the sorted binary array: ${count}`);