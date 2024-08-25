var removeElement = function(nums, val) {
    while(true) {
        const index = nums.indexOf(val)
        if (index < 0) {
            break;
        }
        nums.splice(index, 1)
    }

    return nums.length
    
};