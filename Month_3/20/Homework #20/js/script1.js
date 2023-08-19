let firstNumber;
let secondNumber;
let exit;

do {
  while (!Number.isInteger(parseInt(firstNumber)) && firstNumber !== null) {
    firstNumber = prompt(
      `Введите первое число или нажмите 'Cancel' для выхода из программы: `
    );
    if (firstNumber === null) {
      exit = null;
      alert('Всего доброго!');
    }
    if (Number.isInteger(parseInt(firstNumber))) {
      alert(`Первое число: ${firstNumber}`);
      do {
        secondNumber = prompt(
          `Введите второе число или нажмите 'Cancel' для выхода из программы: `
        );
        if (secondNumber === null) {
          exit = null;
          alert('Всего доброго!');
        } else if (Number.isInteger(parseInt(secondNumber))) {
          alert(`Второе число: ${secondNumber}`);
          if (firstNumber - secondNumber < 0) {
            alert(
              `${firstNumber} < ${secondNumber}\nПервое число меньше второго`
            );
          } else if (firstNumber - secondNumber > 0) {
            alert(
              `${firstNumber} > ${secondNumber}\nПервое число больше второго`
            );
          } else {
            alert(`${firstNumber} = ${secondNumber}\nДва числа равны`);
          }
          exit = null;
          alert('Всего доброго!');
        }
      } while (
        !Number.isInteger(parseInt(secondNumber)) &&
        secondNumber !== null
      );
    }
  }
} while (exit !== null);
