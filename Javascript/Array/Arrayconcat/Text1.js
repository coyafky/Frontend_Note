function arrConcat(arr, arr2) {
    arr.concat(arr2);
    return arr;
}

var arr_1 = [1, 2];
var arr_2 = [3, 4];

console.log(arrConcat(arr_1, arr_2));