const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countCharacters(str) {
  let letters = 0;
  let spaces = 0;
  let digits = 0;
  let others = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.match(/[a-zA-Z]/)) {
      letters++;
    } else if (char.match(/\s/)) {
      spaces++;
    } else if (char.match(/\d/)) {
      digits++;
    } else {
      others++;
    }
  }

  return { letters, spaces, digits, others };
}

rl.question('请输入一行字符: ', (input) => {
  const counts = countCharacters(input);
  console.log(`英文字母个数: ${counts.letters}`);
  console.log(`空格个数: ${counts.spaces}`);
  console.log(`数字个数: ${counts.digits}`);
  console.log(`其他字符个数: ${counts.others}`);
  rl.close();
});