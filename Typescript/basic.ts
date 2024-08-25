let isdone: boolean = true;
let name1  :string = "bob";

let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
let x: [string, number] = ["hello", 10]; // 元祖
console.log(x);

enum Color {Red, Green, Blue}
let c: Color = Color.Blue;
console.log(c);


let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // 正确，any 类型可以赋值为任意类型

function warnUser(): void {
    console.log("This is my warning message");
}


let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
    throw new Error(message);
}

const  str: string="helloworld"
console.log(str);
