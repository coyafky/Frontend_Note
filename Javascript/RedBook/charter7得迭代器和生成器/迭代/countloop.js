for (let i = 1; i <= 10; ++i) {
  console.log(i);
}

// 迭代会在一个有序集合上进行。（“有序”可以理解为集合中所有项都可 以按照既定的顺序被遍历到，特别是开始和结束项有明确的定义)

let collection = ["1", "2", "3"];

for (let index = 0; index < collection.length; index++) {
  console.log(collection[index]);
}
// 因为数组有已知的长度，且数组每一项都可以通过索引获取，所以整个 数组可以通过递增索引来遍历。
//  由于如下原因，通过这种循环来执行例程并不理想。 
// 迭代之前需要事先知道如何使用数据结构。数组中的每一项都只 能先通过引用取得数组对象，然后再通过[]操作符取得特定索引位 置上的项。这种情况并不适用于所有数据结构。 遍历顺序并不是数据结构固有的。通过递增索引来访问数据是特 定于数组类型的方式，并不适用于其他具有隐式顺序的数据结构

// 为了解决这个问题得到 Array.prototype.forEach()

let animal =['lion','taiger','rabbit','cat','doh'];
animal.forEach((item)=>{
    console.log(item);
    
})

// forEach 的结构组成 ，参数构成

