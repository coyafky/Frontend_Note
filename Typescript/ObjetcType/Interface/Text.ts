
interface Person2{
    readonly id:number,
    pname:string,
    age?:number // 可选属性
    [propName:string]:any // 任意属性
}


let person:Person2={
    id:1234,
    pname:'coya',
    age:18,
    sex:'男',
    car:'宝马',
    wife:'小红'
}



