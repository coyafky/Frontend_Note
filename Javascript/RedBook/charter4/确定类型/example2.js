console.log(person instanceof Object);
console.log(colors instanceof Array);
console.log(pattern instanceof RefExo);




// 按照定义，所有引用值都是Object的实例，因此通过instanceof操作符 检测任何引用值和Object构造函数都会返回true。类似地，如果 用instanceof检测原始值，则始终会返回false，因为原始值不是对象。 注意 typeof操作符在用于检测函数时也会返回"function"。当在 Safari（直到Safari 5）和Chrome（直到Chrome 7）中用于检测正则 表达式时，由于实现细节的原因，typeof也会返回"function"。 ECMA-262规定，任何实现内部[[Call]]方法的对象都应该 在typeof检测时返回"function"。因为上述浏览器中的正则表达式 实现了这个方法，所以typeof对正则表达式也返回"function"。在 IE和Firefox中，typeof对正则表达式返回"object"。

