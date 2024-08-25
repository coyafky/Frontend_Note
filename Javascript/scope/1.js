var value =1;
function fn (){
    console.log(value);
}

function show (){
    var value =2;
    fn();
}

show()