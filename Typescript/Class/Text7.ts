// class Greeter3 {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello, " + this.greeting;
//         }
//         else {
//             return Greeter.standardGreeting;
//         }
//     }
// }

// let greeter1: Greeter3;
// greeter3 = new Greeter3();
// console.log(greeter3.greet());

// let greeterMaker: typeof Greeter3 = Greeter3;
// greeterMaker.standardGreeting = "Hey there!";

// let greeter3: Greeter = new greeterMaker();
// console.log(greeter3.greet());