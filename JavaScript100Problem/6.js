function printC() {
    const width = 5;
    const height = 5;
    const borderChar = '*';
    const fillChar = ' ';
  
    for (let i = 0; i < height; i++) {
      let line = '';
      for (let j = 0; j < width; j++) {
        if (i === 0 || i === height - 1 || j === 0) {
          line += borderChar;
        } else {
          line += fillChar;
        }
      }
      console.log(line);
    }
  }
  
  printC();