function catalan(n) {
    if(n===0){
        return 1
    }

    let catalanNumber = new Array(n+1).fill(0);

    catalanNumber[0] = 1;
    catalanNumber[1] = 1;

    for(let i=2;i<=n;i++){
        for(let j=0;j<i;j++){
            catalanNumber[i] += catalanNumber[j]*catalanNumber[i-j-1];
        }
    }
    return catalanNumber[n];
}



console.log(catalan(5)); // 42