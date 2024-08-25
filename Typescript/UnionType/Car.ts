// 定义一个表示汽车的类
class Car {
    // 方法：在公路上行驶
    public driverOnRoad() {
        console.log("can drive on road");
    }

    // 方法：将字符串转换为大写
    public toUpper(str: string) {
        return str.toUpperCase();
    }
}

// 定义一个表示船的类
class Ship {
    // 方法：在水上行驶
    public driverInWater() {
        console.log("can drive in water");
    }

    // 方法：将字符串转换为大写
    public toUpper(str2: string) {
        return str2.toUpperCase();
    }
}

// 创建 Car 和 Ship 的实例
let car = new Car();
let ship = new Ship();

// 创建一个联合类型对象 carShip，它可以是 Car 或 Ship 类型
let carShip: Car | Ship = <Car | Ship>{};

// 将 car 的 driverOnRoad 方法赋值给 carShip
carShip["driverOnRoad"] = car["driverOnRoad"];

// 将 ship 的 driverInWater 方法赋值给 carShip
carShip["driverInWater"] = ship["driverInWater"];

// 将 ship 的 toUpper 方法赋值给 carShip
carShip["toUpper"] = ship["toUpper"];

// 调用 carShip 的 toUpper 方法，将字符串转换为大写
let str: string = carShip.toUpper("hello world");
console.log(str); // 输出: HELLO WORLD

// 由于 carShip 是联合类型，无法直接调用 driverOnRoad 和 driverInWater 方法
// carShip.driverOnRoad(); // 编译错误：不存在
// carShip.driverInWater(); // 编译错误：不存在

// 通过类型断言，可以调用特定类型的方法
(<Car>carShip).driverOnRoad(); // 输出: can drive on road
(<Ship>carShip).driverInWater(); // 输出: can drive in water



// 提示
// 可以用类型断言将Car | Ship断言成一个Car或者Ship
// 类型的对象，从而调用特有的方法。