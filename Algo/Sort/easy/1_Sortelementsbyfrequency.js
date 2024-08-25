const sortElementsByFrequency = (arr) => {
  // Create a frequency map
  const frequencyMap = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!frequencyMap[element]) {
      frequencyMap[element] = 0;
    }
    frequencyMap[element]++;
  }

  // Sort the frequency map by frequency
  const sortedFrequencyMap = Object.entries(frequencyMap).sort(
    (a, b) => b[1] - a[1]
  );

  // Create a sorted array
  const sortedArray = [];
  for (let i = 0; i < sortedFrequencyMap.length; i++) {
    const [element, frequency] = sortedFrequencyMap[i];
    for (let j = 0; j < frequency; j++) {
      sortedArray.push(element);
    }
  }

  return sortedArray;
};

const arr1 = [1, 2, 3, 4, 5, 1, 2, 3];
const sortedArray1 = sortElementsByFrequency(arr1);
console.log(sortedArray1); // [1, 1, 2, 2, 3, 3, 4, 5]

const arr2 = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'c'];
const sortedArray2 = sortElementsByFrequency(arr2);
console.log(sortedArray2); // ['c', 'c', 'c', 'a', 'a', 'b', 'b', 'd', 'e']
