let anys: any = 123;
anys = "123";
anys = true;

console.log(anys);

let thisnotSure: any = 4;
thisnotSure = "maybe a string instead";
thisnotSure = false; // okay, definitely a boolean

let obj: any = {
  num: "123",
  toString() {
    console.log(this.num);
  },
};

console.log(obj);
