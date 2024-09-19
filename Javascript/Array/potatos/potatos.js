var potatos = [
  { id: '1001', weight: 50 },
  { id: '1002', weight: 80 },
  { id: '1003', weight: 120 },
  { id: '1004', weight: 40 },
  { id: '1005', weight: 110 },
  { id: '1006', weight: 60 },
];

// 现在的需求是把这上面的数量记录成一个数组

let arr = [];
for (const potato of potatos) {
  arr.unshift(potato.weight);
}
// 验证数据是否被完全加入
console.log(arr); // [ 60, 110, 40, 120, 80, 50 ]
// 接下俩：需要对这批土豆🥔进行催熟

potatos.forEach((potato) => {
  potato.weight += 20;
});

console.log(potatos);
// [
//   { id: '1001', weight: 70 },
//   { id: '1002', weight: 100 },
//   { id: '1003', weight: 140 },
//   { id: '1004', weight: 60 },
//   { id: '1005', weight: 130 },
//   { id: '1006', weight: 80 }
// ]

// map 也可以实现这个功能

// potatos.map(potato=>{potato.weight+=20})

// console.log(potatos);
// [
//   { id: '1001', weight: 90 },
//   { id: '1002', weight: 120 },
//   { id: '1003', weight: 160 },
//   { id: '1004', weight: 80 },
//   { id: '1005', weight: 150 },
//   { id: '1006', weight: 100 }
// ]

let w = potatos.map((potato) => {
  return (potato.weight += 20);
});

console.log(w); // [ 90, 120, 160, 80, 150, 100 ]

// forEach和map的最大区别就在于，forEach没有返回值。
// let v = potatos.forEach((potato) => {
//   return (potato.weight += 20);
// });
// console.log(v); // undefined

// 现在 老板说，我只需要大土豆

let BigOnes = potatos.filter((potato) => {
  return potato.weight >= 120;
});
console.log(BigOnes);
// [
//   { id: '1002', weight: 120 },
//   { id: '1003', weight: 160 },
//   { id: '1005', weight: 150 }
// ]

// 但是这个时候得到了Boss的质疑，需要找出一个符合大于120g的土豆

let hasBig = potatos.some((potato) => {
  return potato.weight >= 120;
});

console.log(hasBig); //true

// 老板不相信我们全是大的于是使用他的小弟来探查

let allBig = potatos.every((potato) => {
  return potato.weight >= 120;
});

console.log(allBig); // 说明这批土豆中不是所有土豆都满足要求

// 顾客 说要给我一个大的土豆

let big = potatos.find((potato) => {
  return potato.weight >= 120;
});
console.log(big);
//  find说：“哎呀我光顾着抱土豆了，没看是第几个”

let i = potatos.findIndex(potato=>{
  return potato.weight>=120
})
console.log(i); // { id: '1002', weight: 120 } 1


