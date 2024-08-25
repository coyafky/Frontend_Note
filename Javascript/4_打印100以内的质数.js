let count 

for(let i=2; i<=100 ;i++){
    for(let j=2; j<i; j++){
        if(i%j===0){
            count++
        }
    }
    if(count === 2){
        console.log(i);
    }
    count = 0;
} 