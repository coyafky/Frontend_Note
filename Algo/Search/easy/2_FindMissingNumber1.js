function findMissingNumber(nums) {
    let i ;
    let temp = [];
    for(i=0;i<nums.length;i++){
        temp[i]=0;
    }

    for(i=0;i<nums.length;i++){
        temp[nums[i]-1]=1;
    }
    let ans =0;
    for(i=0;i<temp.length;i++){
        if(temp[i]==0){
            ans=i+1;
         
        }
    }
    console.log(ans);
}

let arr = [ 1, 3, 7, 5, 6, 2 ];

findMissingNumber(arr);
