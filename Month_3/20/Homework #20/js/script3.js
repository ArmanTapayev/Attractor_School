let num;
let exit;
let count = 0;
let sum = 0;

do {
  do {
    num = prompt(
      `Введите целое число в диапазоне от 1 до 100 или нажмите 'Cancel' для выхода из программы: `
    );
    if (num === null) {
      exit = null;
      alert(
        `Накопленная сумма: ${sum}\nКоличество введеных чисел: ${count}\nСреднее арифметическое: ${
          sum / count ? sum / count : 'Неопределено'
        }`
      );
      alert('Всего доброго!');
    }
  } while (
    (!(num >= 1 && num <= 100) || !Number.isInteger(parseInt(num))) &&
    exit !== null
  );
  sum += parseInt(num);
  count++;
  num = '';
} while (exit !== null);
