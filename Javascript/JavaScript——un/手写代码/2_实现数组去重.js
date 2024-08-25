var arr =[
    {},{},
    "" ,"",
    null,null,
    NaN,NaN,
]


// Array.prototype.myUnique = function(){
//     return Array.from(new Set(this));
// }

// console.log(arr.myUnique());
// 数组无法识别

Array.prototype.myUnique = function(){
    // let arr = [];
    // for (let i = 0; i < this.length; i++){
    //     if(!arr.includes(this[i])){
    //         arr.push(this[i]);
    //     }
    // }
    // return arr;
    return this.filter((v,idx)=>{
        return this.indexOf(v,0) === idx;
    })
}

console.log(arr.myUnique());