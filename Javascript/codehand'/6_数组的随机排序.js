let  arr =[1,2,3,4,5,6,7,8,9,10];

function result (arr){
    for (let i = 0; i < arr.length; i++){
        let randomIndex = parseInt(Math.random()*arr.length);

        //存下当前正常索引的对应数字
        let curNum = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = curNum;
    }

    return arr;
}

arr.sort(()=>{
    return Math.random()-0.5;
})