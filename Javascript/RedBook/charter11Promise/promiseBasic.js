let  p = new Promise(()=>{

})


setTimeout(console.log,0,p) // 这句话表示什么意思？


// 期约状态机 在把一个期约实例传给console.log()时，控制台输出（可能因浏 览器不同而略有差异）表明该实例处于待定（pending）状态。如 前所述，期约是一个有状态的对象，可能处于如下3种状态之一： 待定（pending） 兑现（fulfilled，有时候也称为“解决”，resolved） 拒绝（rejected）

// 待定（pending）是期约的最初始状态。在待定状态下，期约可以 落定（settled）为代表成功的兑现（fulfilled）状态，或者代表失败 的拒绝（rejected）状态。无论落定为哪种状态都是不可逆的。只 要从待定转换为兑现或拒绝，期约的状态就不再改变。而且，也不能保证期约必然会脱离待定状态。因此，组织合理的代码无论期约 解决（resolve）还是拒绝（reject），甚至永远处于待定 （pending）状态，都应该具有恰当的行为。


// 通过执行函数控制期约状态

let p1 = new Promise((resolve,reject)=>resolve());
setTimeout(console.log,0,p1)
let p2 = new Promise((resolve,reject)=>reject());
setTimeout(console.log,0,p2)
// 
// 
