function problem() {
    let objectA = new Object();
    let objectB = new Object();

    objectA.someOtherObject = objectB;
    objectB.someOtherObject = objectA;
}

// objectA和objectB通过各自的属性相互引用，意味着它 们的引用数都是2。在标记清理策略下，这不是问题，因为在函数结束 后，这两个对象都不在作用域中。而在引用计数策略下，objectA和 objectB在函数结束后还会存在，因为它们的引用数永远不会变成0。如 果函数被多次调用，则会导致大量内存永远不会被释放

