let martix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(martix[1][1]); //5
console.log(martix.length); //3

for (let i = 0; i < martix.length; i++) {
  for (let j = 0; j < martix[i].length; j++) {
    console.log(martix[i][j]);
  }
}
