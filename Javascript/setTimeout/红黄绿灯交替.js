// 使用setTimeout、Promise、async await 三种方式实现红绿灯代码，红灯2秒，黄灯1秒，绿灯3秒，循环改变颜色。改变颜色的方法，就简单写成打印出颜色?

function changeColor(color) {
  console.log("color" + color + new Date().getSeconds());
}

function bar() {
  changeColor("red");
  setTimeout(function () {
    changeColor("yellow");
    setTimeout(function () {
      changeColor("green");
      setTimeout(function () {
        bar();
      }, 3000);
    }, 1000);
  }, 2000);
}

bar();