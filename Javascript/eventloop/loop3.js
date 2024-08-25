console.log('One');

console.log('Two');

function logThree (){
    console.log('Three');
}


function logThreeandFour(){
    logThree();
    console.log('Four');
}

logThreeandFour();