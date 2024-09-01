
// app.js
import { add as text } from './math.js';

const add = (a, b) => a * b; // 本地变量

console.log(add(2, 3)); // 输出: 6 (本地变量)
console.log(text(2, 3)); // 输出: 5 (导入的变量)