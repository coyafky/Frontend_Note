
function count (coins,n,sum){
    if(sum==0){
        return 1
    }
    if(sum<0){
        return 0;
    }
    if(n<=0){
        return 0;
    }

    return count(coins,n-1,sum)+count(coins,n,sum-coins[n-1]);

}

// let coins=[1,2,3];

// let n =coins.length;

// console.log(count(coins,n,4));

let coins =[2,3,5,6];
console.log(count(coins,coins.length,10)); //5