function add(num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var num1 = 5;
var num2 = 7.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(num1, num2, printResult, resultPhrase);
//
// const num1="5"; app.ts:8:16 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
