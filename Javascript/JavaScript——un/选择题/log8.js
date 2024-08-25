function test() {
    this.flag = false;
    this.change = () => {
      this.flag = true;
      console.log(button.flag);
    };
  }
  const button = new test();
  document.addEventListener("click", button.change);