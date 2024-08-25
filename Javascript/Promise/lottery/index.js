const lotteryBtn = document.getElementById("lotteryBtn");

lotteryBtn.addEventListener("click", function () {
  let lotteryPromise = new Promise(function (resolve, reject) {
    // 模拟抽奖过程
    const random = Math.random();
    if (random < 0.3) {
      resolve("恭喜你中奖了！");
    } else {
      reject("很遗憾，未中奖。");
    }

  }

);

lotteryPromise.then(function (result) {
    alert(result);

}).catch(function (error) {
    alert(error);
})
});
