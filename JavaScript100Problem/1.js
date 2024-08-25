function generateUniqueThreeDigitNumbers() {
    const digital =[1,2,3,4];
    const numbers = [];
    for (let i = 0; i < digital.length; i++) {
        for (let j = 0; j < digital.length; j++) {
            for (let k = 0; k < digital.length; k++) {
                numbers.push(digital[i] * 100 + digital[j] * 10 + digital[k]);
            }
        }
    }
    return numbers;
}

const uniqueThreeDigitNumbers = generateUniqueThreeDigitNumbers();
console.log("能组成的三位数个数：", uniqueThreeDigitNumbers.length);
console.log("具体的三位数：", uniqueThreeDigitNumbers);