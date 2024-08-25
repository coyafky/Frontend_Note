function calculateBonus (profit){
    let bonus =0;
    if(profit<=100000){
        bonus = profit*0.1;
    }else if(profit<=200000){
        bonus = 100000*0.1+(profit-100000)*0.075;
    }else if(profit<=400000){
        bonus = 100000*0.1+(200000-100000)*0.075+(profit-200000)*0.05;
    }else if(profit<=600000){
        bonus = 100000*0.1+(200000-100000)*0.075+(200000-100000)*0.05+(profit-400000)*0.03;
    }else if(profit<=1000000){
        bonus = 100000*0.1+(200000-100000)*0.075+(200000-100000)*0.05+(400000-200000)*0.03+(profit-600000)*0.015;
    }else if(profit>1000000){
        bonus = 100000*0.1+(200000-100000)*0.075+(200000-100000)*0.05+(400000-200000)*0.03+(1000000-400000)*0.015+(profit-1000000)*0.01;
    }
    return bonus;
}

// 从键盘输入当月利润I
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入当月利润（单位：元）：', (profit) => {
  const bonus = calculateBonus(parseFloat(profit));
  console.log(`应发放奖金总数：${bonus.toFixed(2)}元`);
  rl.close();
});