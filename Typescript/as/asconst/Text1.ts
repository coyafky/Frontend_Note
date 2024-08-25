

const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000
} as const;

function getConfig() {
    return config;
}

const myConfig = getConfig();
// myConfig 类型为 { readonly apiUrl: 'https://api.example.com'; readonly timeout: 5000 }



const colors = ['red', 'green', 'blue'] as const;

function getColor(index: number): typeof colors[number] {
    return colors[index];
}

console.log(getColor(0)); // 输出: red
console.log(getColor(1)); // 输出: green
console.log(getColor(2)); // 输出: blue