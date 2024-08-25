let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);

for (let vagetable of recipeMap.keys()) {
    console.log(vagetable);
}


for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap.entries()) {
    console.log(entry);
}
for (let [key, value] of recipeMap) {
    console.log(key, value); // 输出: name John, age 30
  }

recipeMap.forEach((value, key) => console.log(key, value));
