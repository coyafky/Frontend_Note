function add(num1:number,num2:number,showResult:boolean,phrase:string){
    const result=num1+num2;
    if(showResult){
        console.log(phrase+result);
    }
    else{
        return result;
    }
}


let num1:number;
num1=5;
const num2=7.8
const printResult=true
let resultPhrase="Result is: "
// resultPhrase =4

add(num1,num2,printResult,resultPhrase);


//
// const num1="5"; app.ts:8:16 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

// num1="5"; 不能把类型String分配给类型number

// let resultPhrase="Result is: "
// resultPhrase =4 () 不能把number类型分配给string类型