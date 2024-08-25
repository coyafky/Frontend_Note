const sortByFreq = (arr) => {
    // Create a hash table to store the frequency of each element
    const frequencyMap = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (!frequencyMap[element]) {
        frequencyMap[element] = 0;
      }
      frequencyMap[element]++;
    }
  
    // Create a heap to store the elements in descending order of frequency
    const heap = [];
    for (const element in frequencyMap) {
      heap.push({ element, frequency: frequencyMap[element] });
    }
    heap.sort((a, b) => b.frequency - a.frequency);
  
    // Create a sorted array
    const sortedArray = [];
    while (heap.length) {
      const { element, frequency } = heap.shift();
      for (let i = 0; i < frequency; i++) {
        sortedArray.push(element);
      }
    }
  
    return sortedArray;
  };
  
let arr = [1, 1, 1, 2, 2, 3]

console.log(sortByFreq(arr)); // [ '1', '1', '1', '2', '2', '3' ]
let  arr2 = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4];
console.log(sortByFreq(arr2)); // [ '4', '4', '4', '4', '4', '1', '1', '2', '2', '3', '3' ]