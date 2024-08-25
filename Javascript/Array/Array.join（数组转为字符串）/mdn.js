const a = ["Wind", "Water", "Fire"];
a.join(); // 'Wind,Water,Fire'
a.join(", "); // 'Wind, Water, Fire'
a.join(" + "); // 'Wind + Water + Fire'
a.join(""); // 'WindWaterFire'


console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3'


const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // ignored by join() since length is 3
  };
  console.log(Array.prototype.join.call(arrayLike));
  // 2,3,4
  console.log(Array.prototype.join.call(arrayLike, "."));
  // 2.3.4
  