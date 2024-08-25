const sortColors = (nums) => {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
  
    while (mid <= high) {
      if (nums[mid] === 0) {
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        mid++;
      } else {
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
      }
    }
  };
  

let nums = [1, 0, 1, 2, 0, 2, 1, 0];
nums =sortColors(nums);
console.log(nums); // Output: [0, 0, 0, 1, 1, 1, 2, 2]