

function reverse(x:string):string;
function reverse(x:number):number;
function reverse(x:string|number){
    if (typeof x === "string") {
        return x.split("").reverse().join("");
    }

    if(typeof x === "number"){
        return Number(x.toString().split("").reverse().join(""))
    }
}

console.log(reverse("hello"));
console.log(reverse(1234));
