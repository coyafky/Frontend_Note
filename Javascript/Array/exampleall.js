let arr = new Array();
console.log(Array.prototype);

let arr1 = [1, 2, 3];
console.log(arr1.join("-")); // 1-2-3

function repeatArray(n, str) {
  console.log(new Array(n + 1).join(str));
}
repeatArray(3, "*");
repeatArray(4, "*");

let arr2 = [1, 2, 3];
console.log(arr2.reverse()); // [ 3, 2, 1 ]

let arr3 = ["a", "d", "c", "b"];
console.log(arr3.sort()); // [ 'a', 'b', 'c', 'd' ]

let arr4 = [13, 5, 24, 41, 3];
console.log(
  arr4.sort(function (a, b) {
    return a - b;
  })
); // [ 3, 5, 13, 24, 41 ]
console.log(
  arr4.sort(function (a, b) {
    return b - a;
  })
); // [ 41, 24, 13, 5, 3 ]

let arr5 = [{ age: 25 }, { age: 3 }, { age: 6 }];
console.log(
  arr5.sort(function (a, b) {
    return a.age - b.age;
  })
); // [ { age: 3 }, { age: 6 }, { age: 25 } ]
console.log(
  arr5.sort(function (a, b) {
    return b.age - a.age;
  })
); // [ { age: 25 }, { age: 6 }, { age: 3 } ]

arr5.forEach(function (item) {
  console.log(item.age);
});

//4.concat()  合并数组,注意:concat方法(与reverse/sort方法不同)是不会改变原数组的,只会进行简单的调用,只能去掉外面一层数组符号
var arr6 = [1, 2, 3];
console.log(arr6.concat([4, 6, 7])); //[1,2,3,4,6,7]
console.log(arr6.concat([11, 12], 13)); //[1,2,3,11,12,13]
console.log(arr6.concat([11, [12, 13]])); //[1,2,3,11,[12,13]];

let arr7 = [1, 2, 3, 4, 5];
console.log(arr7.slice(1, 3)); // [ 2, 3 ]
console.log(arr7.slice(2)); // [ 3, 4, 5 ]
console.log(arr7.slice(1, -1)); // [ 2, 3, 4 ]
console.log(arr7.slice(-3)); // [ 3, 4, 5 ]

//6.splice() 数组拼接,删除从某个索引值开始的几个元素后,再重新拼接成数组,且原数组是被修改了的
var arr8 = [1, 2, 3, 4, 5];
//        arr8.splice(2);     //[1,2]    删除从索引值2开始往后的所有元素3,4,5之后,拼接的数组为[1,2]
//        arr8.splice(2,2);  //[1,2,5];  删除从索引值2开始往后的两个元素3,4之后,拼接的数组是[1,2,5]
arr8.splice(1, 1, "a", "b"); //[1,"a","b",3,4,5]  删除索引值1开始的一个元素2,然后在这个位置添加两个元素:"a","b"
console.log(arr8);

var arr9 = [1, 2, 3];
arr9.map(function (item) {
  //打印结果 2 3 4
  console.log(item + 1);
});
console.log(arr9); //返回的仍然是[1,2,3]

//10.every(function(item){})和some(function(item){})  判断数组中的每一个元素是不是都满足一个条件/存在某个元素满足条件,
// 返回布尔类型,且不会改变原数组
var arr11 = [1, 2, 3, 4, 5];
arr11.every(function (item) {
  //false  不是每个元素都符合条件
  return item > 4;
});
arr11.some(function (item) {
  //true   存在元素符合条件,即5
  return item > 4;
});

 //11.reduce(function(x,y){},m);    //每两个两个一起进行判断,得到的值作为新的x值.m参数指定为m为第一个x,(m可以省略)从左到右依次.不会改变原数组.
 var arr12=[3,6,9];
 arr12.reduce(function(x,y){
     return x>y?x:y;
 })
 //reduceRight(function(x,y){});   //方法和reduce一样,只是这次是从右向左开始依次进行判断取值.

 //12.indexOf()  //判断元素在数组中的索引值,有返回索引值,没有返回-1,顺序是从左到右,且不会改变原数组
 var arr13=[1,2,3,2,1];
 arr13.indexOf(1,-1);   //查找1,且从-1的位置开始从左到右开始找,那么应该就是最后一个元素,即4
 arr13.indexOf(2,-1);   //查找2,且从-1的位置开始从左到右开始找,那么则没有,返回-1
 //lastIndexOf()   //跟indexOf()方法一样,只是这是从右到左开始找元素索引值.
 // 注意这里的索引值都是不变的,不可能从右到左,那索引值也从右到左开始数, arr13的索引值一直都是0,1,2,3,4
 arr13.lastIndexOf(2,-2)   //查找2,从-2开始找,返回3
