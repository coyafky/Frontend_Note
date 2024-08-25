var searchInsert = function(nums, target) {

    let left = 0, right = nums.length - 1, x = nums.length;
    while (left <= right) {
        let numsMid = ((right - left) >> 1) + left;
        if (target <= nums[numsMid]) {
            x = numsMid;
            right = numsMid - 1;
        } else {
            left = numsMid + 1;
        }
    }
    return x;
};

