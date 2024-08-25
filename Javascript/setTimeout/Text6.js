function showTime(){
    let date = new Date();

    let time = date.toLocaleTimeString();
    console.log(time);

    setTimeout(showTime, 1000);
}

showTime() 