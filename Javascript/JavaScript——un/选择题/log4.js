function out(x){
    var temp = 2;
    function inside(y){
        document.write( x + y + (temp--));
    }
    inside(5);
}
out(3);