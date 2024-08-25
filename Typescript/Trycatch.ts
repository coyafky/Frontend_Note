try{
    let a =b/0; // b未定义


}catch(error){
    switch(error.name){
        case "ReferenceError":
            console.log("未定义的变量");
            break;
        case "TypeError":
            console.log("类型错误");
            break;
        case "SyntaxError":
            console.log("语法错误");
            break;
        default:
            console.log("未知错误");
    }
}finally{
    console.log("finally");
}