// 局部作用域中定义的变量可用于在局部上下文中替换全局变量。

var color ='blue';

function changeColor(){
    let anotherColor = 'red';

    function swapColor(){
        let tempColor = color;
        color = anotherColor;
        anotherColor = tempColor;

        // 在这个作用域中可以访问tempColor,anotherColor,color
    }

    // 在这个作用域中恶意访问color,和anotherColor
    swapColor();
}

// 在这个作用域中只可以访问color
changeColor()