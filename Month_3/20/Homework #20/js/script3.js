let number;
let count = 0;
let average = 0;

do {
  if (
    !(number >= 1 && number <= 100) ||
    number === '' ||
    !(number === 'number')
  ) {
    number = prompt('Введите число в диапазоне от 1 до 100: ');
    console.log(number);
    count++;
    console.log(`count: ${count}`);
  }
} while (number !== null);
