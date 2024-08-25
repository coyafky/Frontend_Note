var minimumTotal = function(triangle) {
  let len = triangle.length;
  let dp = new Array(len+1).fill(new Array(len+1).fill(null));
  for(let i=len-1;i>=0;i--){
      for(let j=0;j<len;j++){
          if(i===len-1){
              dp[i][j] = triangle[i][j];
          }else{
              dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j];
          }
      }
  }
  return dp[0][0]
};

let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
console.log(minimumTotal(triangle)); 