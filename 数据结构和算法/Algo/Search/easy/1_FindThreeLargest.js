// 查找数组中最大的三个不同元素

function findThreeLargestNumbers(nums) {
    let first , second ,third ;


    if(nums.length < 3){
        return "Array should have at least 3 elements";
    }

    first = second = third = -Infinity;

    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] > first){
            third = second;
            second = first;
            first = nums[i];
        }
        else if(nums[i] > second){
            third = second;
            second = nums[i];
        }
        else if(nums[i] > third){
            third = nums[i];
        }
    }

    return [third , second , first];
}
let arr = [ 12, 13, 1, 10, 34, 1 ]; 

console.log(findThreeLargestNumbers(arr));