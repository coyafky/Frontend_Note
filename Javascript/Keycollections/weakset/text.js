let visitedSet = new WeakSet();

let jhon = {name:'Jhon'};
let peter = {name:'Peter'};
let mary = {name:'Mary'};

visitedSet.add(jhon);
visitedSet.add(peter);
visitedSet.add(mary);

console.log(visitedSet.has(jhon));
console.log(visitedSet.has(peter));
console.log(visitedSet.has(mary));

console.log(visitedSet);

console.log(visitedSet.jhon);
console.log(visitedSet.peter);
console.log(visitedSet.mary);
console.log(visitedSet.name);
console.log(visitedSet.length);
console.log(visitedSet.size);
console.log(visitedSet[0]);

visitedSet.delete(jhon);
console.log(visitedSet)
visitedSet.delete(mary);
console.log(visitedSet);
visitedSet.delete(peter);
console.log(visitedSet);