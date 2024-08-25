function printMultiplicationTable() {
    for (let i = 1; i <= 9; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += `${j} * ${i} = ${i * j}\t`;
      }
      console.log(row);
    }
  }
  
  printMultiplicationTable();