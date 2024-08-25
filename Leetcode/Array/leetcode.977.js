var sortedSquares = function (nums) {
  let k = nums.length - 1;
  let newList = new Array(k + 1);

  //定义双指针
  // i++,j-- 是取得最大值之后更新的条件
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      newList[k--] = nums[i] * nums[i];
      i++;
    } else {
      newList[k--] = nums[j] * nums[j];
      j--;
    }
  }

  return newList;
};
