function Box(height, width) {
    this.height = height;
    this.width = width;
  }
  
  function Widget(height, width, color) {
    Box.call(this, height, width);
    this.color = color;
  }
  
  let widget = new Widget('red', 100, 200);
  
  console.log(widget);