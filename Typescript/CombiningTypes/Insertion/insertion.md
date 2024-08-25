### TypeScript Intersection Types 教程总结

在本教程中，您学习了 TypeScript 中的交集类型，这是一种通过组合多个现有类型来创建新类型的方法。新类型将包含所有现有类型的特性。以下是您学到的关键点：

#### 交集类型的定义

交集类型使用 `&` 运算符来组合多个类型：

```typescript
type typeAB = typeA & typeB;
```

`typeAB` 将包含 `typeA` 和 `typeB` 的所有属性。

#### 联合类型与交集类型的区别

联合类型使用 `|` 运算符，定义一个变量可以保存 `typeA` 或 `typeB` 的值：

```typescript
let varName: typeA | typeB; // 联合类型
```

#### 示例

假设有三个接口：`BusinessPartner`、`Identity` 和 `Contact`。

```typescript
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}
```

可以定义两种交集类型：

```typescript
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
```

`Employee` 类型包含 `Identity` 和 `Contact` 的所有属性：

```typescript
let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};
```

`Customer` 类型包含 `BusinessPartner` 和 `Contact` 的所有属性：

```typescript
let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
```

如果需要实现员工销售，可以创建包含 `Identity`、`BusinessPartner` 和 `Contact` 所有属性的新交集类型：

```typescript
type Employee = Identity & BusinessPartner & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};
```

#### 类型顺序

在交集类型中，类型的顺序并不重要：

```typescript
type typeAB = typeA & typeB;
type typeBA = typeB & typeA;
```

`typeAB` 和 `typeBA` 将具有相同的属性。

### 总结

- 交集类型通过组合两个或多个类型来创建一个新类型，该新类型包含所有现有类型的属性。
- 使用 `&` 运算符来定义交集类型。
- 联合类型使用 `|` 运算符，定义一个变量可以保存多个类型之一的值。
- 在交集类型中，类型的顺序并不重要。

通过学习这些概念，您可以更灵活地定义和使用复杂的数据类型，从而提高 TypeScript 代码的类型安全性和可维护性。