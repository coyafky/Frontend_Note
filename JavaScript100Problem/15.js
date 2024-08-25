const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateNumber(a, n) {
  let result = 0;
  let currentNumber = 0;
  
  for (let i = 0; i < n; i++) {
    currentNumber = currentNumber * 10 + a;
    result += currentNumber;
  }
  
  return result;
}

rl.question('请输入数字 a: ', (a) => {
  rl.question('请输入项数 n: ', (n) => {
    const sum = generateNumber(parseInt(a), parseInt(n));
    console.log(`s = ${sum}`);
    rl.close();
  });
});