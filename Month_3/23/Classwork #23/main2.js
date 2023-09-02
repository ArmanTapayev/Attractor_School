const salaries = {
  Person1: 100,
  Person2: 300,
  Person3: 250,
  isPaid: false,
};

const findSum = (hash) => {
  let sum = 0;
  for (const key in hash) {
    if (!isNaN(hash[key])) {
      sum += hash[key];
    }
  }
  return sum;
};

console.log(findSum(salaries));
