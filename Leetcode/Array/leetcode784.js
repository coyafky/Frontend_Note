var pivotIndex = function (nums) {
  // 如果传入景来的不是数组直接腿粗
  if (Object.prototype.toString.call(nums) !== "[object Array]") {
    return -1;
  }
  let sumTotal =0;// 总数字
  let sumLeft =0;//(左边的数字)

  nums.forEach(item =>{
    sumTotal+= item;
  })
  for(let i = 0;i<nums.length;i++){
    if((sumTotal-nums[i])/2 === sumLeft){
        return i
    }
    else{
        sumLeft+= nums[i];
    }
  }
  return -1;
};

let nums = [0,1,-1] ;
console.log(pivotIndex(nums));