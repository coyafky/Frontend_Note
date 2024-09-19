let url = "https://www.imooc.com?a=19&b=2&c=3#hash";

function queryURL(URL){
    let url = URL.split("?")[1];
    const urlSearchParams = new URLSearchParams(url);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params;
}


console.log(queryURL(url)); // { a: '19', b: '2', c: '3#hash' }
