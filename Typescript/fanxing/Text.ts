interface IdFunc<Type>{
    id:(value:Type)=>Type
    ids:()=>Type[]
}

let obj:IdFunc<string> = {
    id:(value)=>value,
    ids:()=>[]
}

let obj2:IdFunc<number> = {
    id:(value)=>value,
    ids:()=>[1,2,3]
}