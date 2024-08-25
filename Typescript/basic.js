var isdone = true;
var name1 = "bob";
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var x = ["hello", 10]; // 元祖
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // 正确，any 类型可以赋值为任意类型
function warnUser() {
    console.log("This is my warning message");
}
var u = undefined;
var n = null;
function error(message) {
    throw new Error(message);
}
var str = "helloworld";
console.log(str);
