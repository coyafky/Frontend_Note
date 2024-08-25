let arr =[6,2,9,3,8,1];

for (let i =1;i<=arr.length;i++){
    for (let j=arr.length-1;j>=i;j--){
        if(arr[j]<arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}

console.log(arr); // [ 1, 2, 3, 6, 8, 9 ]
