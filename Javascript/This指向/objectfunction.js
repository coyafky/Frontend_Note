window.b = 2222
let obj = {
  a: 111,
  fn: function() {
    alert(this.a) //111
    alert(this.b) //undefined
  }
}
obj.fn()