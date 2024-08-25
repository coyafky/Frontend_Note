const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value);
}
// 输出：10 20 30

const str = "hello";
for (const char of str) {
  console.log(char);
}
// 输出：h e l l o

const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);
  for (const entry of map) {
    console.log(entry);
  }
  // 输出：['a', 1] ['b', 2] ['c', 3]
  
  const set = new Set([1, 2, 3]);
  for (const value of set) {
    console.log(value);
  }
  // 输出：1 2 3