flter数组方法，参数为回调函数，与find不同的是，可以查找出所有满足要求的元素，并返回一个新的数组，如果没有满足要求的元素，则返回空数组。
```js
const array = [1, 3, 5, 7, 9]

const res1 = array.filter(item => {
  return item > 6
})

const res2 = array.filter(item => {
  return item > 10
})

console.log(res1)    // 返回大于6的所有元素7

console.log(res2)    // 返回空数组[]
```