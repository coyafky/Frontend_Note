function findMissingNumber(nums) {
    let total = Math.floor((1 + nums.length) * (nums.length + 2) / 2);
    for(let i =0;i<nums.length;i++){
        total -= nums[i];
        
    }
    return total;
}

 let arr = [ 1, 2, 3, 5 ];
 console.log(findMissingNumber(arr)); // 4
 