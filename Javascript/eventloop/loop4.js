function logRunningTask() {
    let count =0;
    for(let j =0; j<1e9;j++){
        count++;
    }
    console.log("long task done");

}

function importantTask() {

    console.log("important task done");
}


logRunningTask();
importantTask();