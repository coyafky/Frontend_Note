TypeScript 中的类型兼容性（Type Compatibility）是指在类型系统中，一个类型是否可以赋值给另一个类型。这种兼容性是基于结构子类型（Structural Subtyping）的原则，而不是名义子类型（Nominal Subtyping）。这意味着类型的兼容性是根据类型的结构（即类型的成员）来决定的，而不是类型的名称或显式的继承关系。

### 核心概念

1. **结构子类型**：
   - TypeScript 的类型兼容性是基于类型的结构。如果一个类型的所有成员在另一个类型中都有对应的兼容成员，那么这两个类型就是兼容的。
   - 例如：
     ```typescript
     interface Point {
       x: number;
       y: number;
     }
     class Point2D {
       x: number;
       y: number;
     }
     let point: Point = new Point2D(); // OK, 因为 Point2D 的结构与 Point 兼容
     ```

2. **函数兼容性**：
   - 函数的参数和返回值的兼容性是类型兼容性的重要部分。
   - 参数兼容性：如果一个函数的参数类型可以赋值给另一个函数的参数类型，那么这两个函数在参数上是兼容的。
   - 返回值兼容性：如果一个函数的返回值类型可以赋值给另一个函数的返回值类型，那么这两个函数在返回值上是兼容的。
   - 例如：
     ```typescript
     let x = (a: number) => 0;
     let y = (b: number, s: string) => 0;
     y = x; // OK, x 的参数类型可以赋值给 y 的参数类型
     x = y; // 错误，y 的参数类型不能赋值给 x 的参数类型
     ```

3. **枚举兼容性**：
   - 枚举类型与数字类型是兼容的，但不同枚举类型的枚举值是不兼容的。
   - 例如：
     ```typescript
     enum Status { Ready, Waiting }
     enum Color { Red, Blue, Green }
     let status: Status = Status.Ready;
     status = 1; // OK, 数字 1 可以赋值给 Status 类型
     status = Color.Green; // 错误，不同枚举类型的值不兼容
     ```

4. **类兼容性**：
   - 类的兼容性只考虑实例成员，不考虑静态成员和构造函数。
   - 私有成员和受保护成员必须来自同一个类或其子类。
   - 例如：
     ```typescript
     class Animal {
       feet: number;
     }
     class Dog extends Animal {
       bark(): void {}
     }
     let animal: Animal = new Dog(); // OK, Dog 的实例成员与 Animal 兼容
     ```

5. **泛型兼容性**：
   - 泛型类型的兼容性取决于类型参数的使用情况。如果泛型类型没有指定类型参数，则默认使用 `any` 进行兼容性检查。
   - 例如：
     ```typescript
     interface Box<T> {
       value: T;
     }
     let box1: Box<number> = { value: 1 };
     let box2: Box<string> = { value: "hello" };
     box1 = box2; // 错误，Box<number> 与 Box<string> 不兼容
     ```

### 实际应用

理解类型兼容性对于编写 TypeScript 代码非常重要，因为它决定了哪些值可以赋值给哪些变量，以及哪些函数可以传递给哪些参数。通过遵循结构子类型的原则，TypeScript 提供了一种灵活且强大的类型系统，使得代码既安全又易于扩展。

### 总结

TypeScript 的类型兼容性是基于结构子类型的原则，这意味着类型的兼容性是根据类型的结构（即类型的成员）来决定的。理解这一概念有助于更好地利用 TypeScript 的类型系统，编写更安全、更可靠的代码。