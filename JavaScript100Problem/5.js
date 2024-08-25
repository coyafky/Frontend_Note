const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sortNumbers(x, y, z) {
  const numbers = [x, y, z];
  numbers.sort((a, b) => a - b);
  return numbers;
}

rl.question('请输入第一个整数: ', (x) => {
  rl.question('请输入第二个整数: ', (y) => {
    rl.question('请输入第三个整数: ', (z) => {
      const sortedNumbers = sortNumbers(parseInt(x), parseInt(y), parseInt(z));
      console.log('排序后的数:', sortedNumbers.join(', '));
      rl.close();
    });
  });
});