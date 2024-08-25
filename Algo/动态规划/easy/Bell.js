let n=5;
let s = new Array(n+1);
for(let i=0;i<n+1;i++){
    s[i] = new Array(n+1);
    for(let j=0;j<n+1;j++){
        if(j>i) s[i][j]=0;
        else if(i==j) s[i][j]=1;
        else if(i==0 || j==0) s[i][j]=0;
        else{
 
            s[i][j]= j*s[i-1][j] + s[i-1][j-1];
        }
 
    }
}
let ans=0;
for(let i=0;i<n+1;i++){
    ans += s[n][i];
}
console.log(ans)