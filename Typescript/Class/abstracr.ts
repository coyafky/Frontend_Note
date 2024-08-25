abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

// 定义的方法是抽象方法的话，那在子类中一定要实现
class Lion extends Animal {
    makeSound(): void {
        console.log("roar...");
    }
    
}

class Snack extends Animal {
    makeSound(): void {
        console.log("chomp...");
    }
}