class Counter {
  constructor(limit) {
    this.count = 0;
    this.limit = limit;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this.count < this.limit) {
      return {
        done: false,
        value: ++this.count
      };
    } else {
      return {
        done: true
      };
    }
  }
}

for (let i of new Counter(3)) {
  console.log(i);
}
// 1
// 2
// 3
