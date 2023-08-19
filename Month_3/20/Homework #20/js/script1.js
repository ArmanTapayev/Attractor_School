// const firstNumber = parseInt(prompt('Введите первое число: '));
// const secondNumber = parseInt(prompt('Введите второе число: '));
// const result = firstNumber - secondNumber;
let firstNumber = '';
// firstNumber = parseInt(prompt('Введите первое число: '));
// console.log(firstNumber);

while (firstNumber === '' || firstNumber === null || firstNumber === 'NaN') {
  firstNumber = parseInt(prompt('Введите первое число: '));
  console.log(typeof firstNumber);
  console.log(firstNumber);
  //   alert('Number needed!');
}

// if (result > 0) {
//   alert('Первое число больше второго!');
// } else if (result < 0) {
//   alert('Первое число меньше второго!');
// } else {
//   alert('Числа равны!');
// }
