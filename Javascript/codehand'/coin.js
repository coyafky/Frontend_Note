// 动态规划
//2. 从面值为 1,2,5,10 的硬币中找零 36 块钱，最少要几枚硬币？

function getcoin(num){
    let coinNum =0;
    let coinValue1 =1;
    let coinValue2 =2;
    let coinValue3 =5;
    let coinValue4 =10;
    
    while(num>0){
     if(num>=coinValue4){
        coinNum++;
        num-=coinValue4;
     }
     else if(num>=coinValue3){
         coinNum++;
         num-=coinValue3;
     }
     else if(num>=coinValue2){
         coinNum++;
         num-=coinValue2;
     }
     else if(num>=coinValue1){
         coinNum++;
         num-=coinValue1;
     }
  }

  return coinNum;
    
  }
  
  console.log(getcoin(36));
  console.log(getcoin(31));