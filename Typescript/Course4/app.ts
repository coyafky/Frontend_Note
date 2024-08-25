function Add<T>(a:T,b:T):Array<T>{
    return [a,b];
}

Add<number>(1,2);

Add<string>("1","2");

console.log(Add<number>(3,4));
console.log(Add<string>("3","4"));

