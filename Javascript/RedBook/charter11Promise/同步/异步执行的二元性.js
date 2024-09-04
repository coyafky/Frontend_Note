try {
  throw new Error("foo");
} catch (e) {
  console.log(e); // Error: foo
}
try {
  Promise.reject(new Error("bar"));
} catch (e) {
  console.log(e);
} // Uncaught (in promise) Error: bar

// 第一个try/catch抛出并捕获了错误，第二个try/catch抛出错误却 没有捕获到。
// 因为代码中确实是同步 创建了一个拒绝的期约实例，而这个实例也抛出了包含拒绝理由的 错误。这里的同步代码之所以没有捕获期约抛出的错误，是因为它 没有通过异步模式捕获错误。从这里就可以看出期约真正的异步特 性：它们是同步对象（在同步执行模式中使用），但也是异步执行 模式的媒介