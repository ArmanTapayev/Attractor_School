const numbers = [];

while (true) {
  let number = prompt('Enter a number');
  if (number === null) {
    break;
  }

  number = parseInt(number);

  if (number < 1 || number > 100 || isNaN(number)) {
    console.log('This is not a number');
    continue;
  }
  numbers.push(number);
}

console.log(numbers);
