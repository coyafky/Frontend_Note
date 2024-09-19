function text() {
  [...arguments].forEach(function (item) {
    console.log(item);
  });
}

text(1, 2, 3, 4, 5); // 1,2,3,4,5
