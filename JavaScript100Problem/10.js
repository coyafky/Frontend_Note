function isNarcissisticNumber(num) {
    const strNum = num.toString();
    const digits = strNum.split('');
    const sumOfCubes = digits.reduce((sum, digit) => sum + Math.pow(parseInt(digit), 3), 0);
    return sumOfCubes === num;
  }
  
  function findNarcissisticNumbers() {
    const narcissisticNumbers = [];
    for (let i = 100; i < 1000; i++) {
      if (isNarcissisticNumber(i)) {
        narcissisticNumbers.push(i);
      }
    }
    return narcissisticNumbers;
  }
  
  const narcissisticNumbers = findNarcissisticNumbers();
  console.log("所有的水仙花数是: ", narcissisticNumbers.join(', '));