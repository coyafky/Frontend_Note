
//  函数类型包含两部分：参数类型和返回值类型。
function add (x: number, y: number): number {
    return x + y
}


function text (x: number, y: number): never {
    throw new Error("xxx");
}

function text1 (x: number, y: number): void {
    console.log(x, y);
       
}