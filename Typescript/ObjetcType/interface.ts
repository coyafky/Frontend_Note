
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

const person1: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(person1);


interface Obj{
    num:string,
    toString:() => void
}


let obj:Obj = {
    num:"123",
    toString(){
        console.log(this.num);
    }
}
obj.toString()
console.log(obj.num);
