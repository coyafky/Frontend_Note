var findPeaks = function(mountain) {
    let peak = [];//声明一个数据结构

    for(let i=1;i<=mountain.length-2;i++){
        if(mountain[i]>mountain[i-1]&&mountain[i]>mountain[i+1]){
            peak.push(i);
        }
    }
    return peak;


};

let  mountain = [1,4,3,8,5]
let  mountain2 = [2,4,4]
console.log(findPeaks(mountain));
console.log(findPeaks(mountain2));