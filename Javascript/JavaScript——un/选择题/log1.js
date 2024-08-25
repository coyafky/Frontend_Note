var a = 1;
function test() {
    console.log(a);
    if(false) {
        var a = 2;
    }
}
test();