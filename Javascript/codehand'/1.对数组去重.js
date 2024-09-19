// 使用fliter方法
const numbers =[1,2,3,4,5];
const eventNumbers = numbers.filter((number) => number % 2 === 0);

console.log(eventNumbers); // 输出 [2, 4]


// 过滤对象数组中的元素
const products = [
    { id: 1, name: 'Product 1', price: 40 },
    { id: 2, name: 'Product 2', price: 60 },
    { id: 3, name: 'Product 3', price: 30 }
  ];
  const expensiveProducts = products.filter(product => product.price > 50);
  // expensiveProducts: [{ id: 2, name: 'Product 2', price: 60 }]
  
  // 从数组中删除特定元素
  const array = [1, 2, 3, 4, 5];
  const filteredArray = array.filter(item => item !== 3);
  // filteredArray: [1, 2, 4, 5]

  // 手动实现一个fliter函数
function customFilter(array, condition) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = customFilter(numbers1, (number) => number % 2 === 0);
// condition 是一个函数，它接受一个参数并返回一个布尔值，表示是否满足条件  (number) => number % 2 === 0，customFilter 接受数组对象和一个条件函数对象，并输出一个新数组

const products2 = [
    { id: 1, name: 'Product 1', price: 40 },
    { id: 2, name: 'Product 2', price: 60 },
    { id: 3, name: 'Product 3', price: 30 }
];
const expensiveProducts2 = customFilter(products, product => product.price > 50);

// 对数组去重的第二个方法 set 函数

const array2 =[1,2,3,4,4,5,5,5];
const uniqueArray = [...new Set(array2)];
console.log(uniqueArray); // 输出 [1, 2, 3, 4, 5]
// 是，Set函数会移除重复的元素，但不会保留原始数组的顺序。如果需要保留原始数组的顺序



// 手动实现一个Set函数

function customset(array){
    let uniqueArray=[];
    for(let i=0;i<array.length;i++){
        if(!uniqueArray.includes(array[i])){
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

const array3 = [1,2,3,4,4,5,5,5];
const uniqueArray2 = customset(array3);
console.log(uniqueArray2); // 输出 [1, 2, 3, 4, 5]


const array4 = [1,2,3,4,4,5,5,5];
const uniqueArray3 =  array.reduce((acc,curent)=>{
    if(!acc.includes(current)){
        acc.push(current);
    }
    return acc;
},[]);
console.log(uniqueArray3); // 输出 [1, 2, 3, 4, 5]