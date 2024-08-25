function countNumbers(num) {
    if (num < 10) {
      console.log(num);
      setTimeout(() => countNumbers(num + 1), 1000);
    }
  }
  
  countNumbers(0);

  for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }