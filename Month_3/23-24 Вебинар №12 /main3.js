const initial = [4, 2, 5, 1, 0, 9, 6];

const bubbleSort = (array) => {
  let len = array.length;
  let count = 0;
  for (let i = len; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (array[j] < array[j - 1]) {
        const temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
      count++;
    }
    count++;
  }
  console.log('count = ', count);
};

console.log(initial);
bubbleSort(initial);
console.log(initial);
