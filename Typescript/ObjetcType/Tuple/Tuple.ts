type StringNumberPair = [string, number];

const pair: StringNumberPair = ['hello', 42];

const first = pair[0];
const second = pair[1];

// Error: Index out of bounds
// const third = pair[2];
// 长度为 "2" 的元组类型 "StringNumberPair" 在索引 "2" 处没有元素。