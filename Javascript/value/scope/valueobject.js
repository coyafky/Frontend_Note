function fn2(){
    console.log(arguments);
    // arguments 属于who
    //console.log(this);
    var foo =1
}
fn2(2) // [Arguments] { '0': 2 }