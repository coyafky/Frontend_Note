let number :number[] =[1,2,3]
let i=0
while(i<number.length){
    console.log(number[i]);
    i++;
}

number.push(4);

console.log(number);

let fibonacci: Array<number> = [1, 1, 2, 3, 5];
console.log(fibonacci);

interface NumberArray {
    [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];
console.log(fibonacci2);


let data :number [][]= [[1, 2], [3, 4]];
console.log(data);


function Arr(...args: any): void {
    console.log(arguments);
    // 使用 ts 内置对象 IArguments 定义
    let arr: IArguments = arguments;
}
Arr(111, 222, 333);

// IArguments 接口定义
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}

let list3: any[] = ['test', 1, [], { a: 1 }];
console.log(list3);


