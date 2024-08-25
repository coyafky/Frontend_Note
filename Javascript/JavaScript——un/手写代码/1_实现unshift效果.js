let arr =[1,2,3];

// 可以添加一个or多个元素
Array.prototype.myUnshift = function() {
    const len = arguments.length;
    for(let i=len-1;i>=0;i--){
        const element = arguments[i];
        this.splice(0,0,element)
    }
    return this.length;
}

console.log(arr.myUnshift(4,5,6),arr);