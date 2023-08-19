let answer;
let option;
let numberOne;
let numberTwo;
let result;
let tempRandomNum;
let errors;
let errorString = '';
let answerString = '';
const arrayErrorStat = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const objErrorStat = {};

do {
  option = prompt(`Выберите сложность от 1 до 4:
    1. "Низкая": таблица умножения на 1 и 2
    2. "Средняя": таблица умножения от 3 до 5
    3. "Высокая": вся таблица, кроме 1, 2 и 5
    4. "Всё": вся таблица умножения`);

  if (option === null) {
    alert('Всего доброго!');
  } else if (
    option !== '' &&
    Number.isInteger(parseInt(option)) &&
    option >= 1 &&
    option <= 4
  ) {
    switch (option) {
      case '1':
        while (answer !== null) {
          numberOne = Math.floor(Math.random() * 2) + 1;
          numberTwo = Math.floor(Math.random() * 2) + 1;
          result = numberOne * numberTwo;

          answer = prompt(`What is ${numberOne} * ${numberTwo}?`);

          if (answer === null) {
            option = null;
            for (let i = 0; i < 2; i++) {
              if (arrayErrorStat[i]) {
                if (arrayErrorStat[i] < 11) {
                  errors = arrayErrorStat[i];
                  switch (errors) {
                    case 1:
                      errorString = 'ошибка';
                      break;
                    case 2:
                    case 3:
                    case 4:
                      errorString = 'ошибки';
                      break;
                    case 0:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                      errorString = 'ошибок';
                    default:
                      errorString = 'ошибок';
                  }
                } else if (arrayErrorStat[i] < 15) {
                  errorString = 'ошибок';
                } else {
                  errors = arrayErrorStat[i] % 10;
                  switch (errors) {
                    case 1:
                      errorString = 'ошибка';
                      break;
                    case 2:
                    case 3:
                    case 4:
                      errorString = 'ошибки';
                      break;
                    case 0:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                      errorString = 'ошибок';
                    default:
                      errorString = 'ошибок';
                  }
                }
                answerString += `В таблице на ${i + 1} - ${
                  arrayErrorStat[i]
                } ${errorString}\n`;
              }
            }
            if (answerString === '') {
              answerString += 'Ваш результат: \n\nОшибок нет';
              alert(answerString);
            } else {
              const resultingString =
                'Ваш результат: \n\n' + answerString + '\nВсего доброго!';
              alert(resultingString);
            }
          } else if (answer !== '' && Number.isInteger(parseInt(answer))) {
            if (result === parseInt(answer)) {
              alert('Всё верно!');
            } else {
              alert('Неверно!');
              arrayErrorStat[numberOne - 1] += 1;
              arrayErrorStat[numberTwo - 1] += 1;
            }
          } else {
            alert('Не избегайте ответа!');
          }
        }
        break;

      case '2':
        while (answer !== null) {
          numberOne = Math.floor(Math.random() * 3) + 3;
          numberTwo = Math.floor(Math.random() * 3) + 3;
          result = numberOne * numberTwo;

          answer = prompt(`What is ${numberOne} * ${numberTwo}?`);

          if (answer === null) {
            option = null;
            for (let i = 2; i < 5; i++) {
              if (arrayErrorStat[i]) {
                if (arrayErrorStat[i] < 11) {
                  errors = arrayErrorStat[i];
                  switch (errors) {
                    case 1:
                      errorString = 'ошибка';
                      break;
                    case 2:
                    case 3:
                    case 4:
                      errorString = 'ошибки';
                      break;
                    case 0:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                      errorString = 'ошибок';
                    default:
                      errorString = 'ошибок';
                  }
                } else if (arrayErrorStat[i] < 15) {
                  errorString = 'ошибок';
                } else {
                  errors = arrayErrorStat[i] % 10;
                  switch (errors) {
                    case 1:
                      errorString = 'ошибка';
                      break;
                    case 2:
                    case 3:
                    case 4:
                      errorString = 'ошибки';
                      break;
                    case 0:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                      errorString = 'ошибок';
                    default:
                      errorString = 'ошибок';
                  }
                }
                answerString += `В таблице на ${i + 1} - ${
                  arrayErrorStat[i]
                } ${errorString}\n`;
              }
            }
            if (answerString === '') {
              answerString += 'Ваш результат: \n\nОшибок нет';
              alert(answerString);
            } else {
              const resultingString =
                'Ваш результат: \n\n' + answerString + '\nВсего доброго!';
              alert(resultingString);
            }
          } else if (answer !== '' && Number.isInteger(parseInt(answer))) {
            if (result === parseInt(answer)) {
              alert('Всё верно!');
            } else {
              alert('Неверно!');
              arrayErrorStat[numberOne - 1] += 1;
              arrayErrorStat[numberTwo - 1] += 1;
            }
          } else {
            alert('Не избегайте ответа!');
          }
        }
        break;

      case '3':
        while (answer !== null) {
          while (
            tempRandomNum === undefined ||
            tempRandomNum === 1 ||
            tempRandomNum === 2 ||
            tempRandomNum === 5
          ) {
            tempRandomNum = Math.floor(Math.random() * 9) + 1;
          }
          numberOne = tempRandomNum;

          tempRandomNum = null;
          while (
            tempRandomNum === null ||
            tempRandomNum === 1 ||
            tempRandomNum === 2 ||
            tempRandomNum === 5
          ) {
            tempRandomNum = Math.floor(Math.random() * 9) + 1;
          }
          numberTwo = tempRandomNum;

          result = numberOne * numberTwo;

          answer = prompt(`What is ${numberOne} * ${numberTwo}?`);

          if (answer === null) {
            option = null;

            for (let i = 2; i < arrayErrorStat.length; i++) {
              if (arrayErrorStat[i]) {
                if (arrayErrorStat[i] < 11) {
                  errors = arrayErrorStat[i];
                  switch (errors) {
                    case 1:
                      errorString = 'ошибка';
                      break;
                    case 2:
                    case 3:
                    case 4:
                      errorString = 'ошибки';
                      break;
                    case 0:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                      errorString = 'ошибок';
                    default:
                      errorString = 'ошибок';
                  }
                } else if (arrayErrorStat[i] < 15) {
                  errorString = 'ошибок';
                } else {
                  errors = arrayErrorStat[i] % 10;
                  switch (errors) {
                    case 1:
                      errorString = 'ошибка';
                      break;
                    case 2:
                    case 3:
                    case 4:
                      errorString = 'ошибки';
                      break;
                    case 0:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                      errorString = 'ошибок';
                    default:
                      errorString = 'ошибок';
                  }
                }

                answerString += `В таблице на ${i + 1} - ${
                  arrayErrorStat[i]
                } ${errorString}\n`;

                objErrorStat[i + 1] = [arrayErrorStat[i], errorString];
              }
            }

            if (answerString === '') {
              answerString += 'Ваш результат: \n\nОшибок нет';
              alert(answerString);
            } else {
              answerString = 'Ваш результат: \n\n' + answerString;
              answerString += '-'.repeat(40) + '\n';
              answerString += 'Рекомендации для повторения: \n';

              const tempArrObj = Object.entries(objErrorStat)
                .sort((a, b) => {
                  if (a[1][0] > b[1][0]) return 1;
                  if (a[1][0] == b[1][0]) return 0;
                  if (a[1][0] < b[1][0]) return -1;
                })
                .reverse()
                .slice(0, 3);

              answerString += '-'.repeat(40) + '\n';

              tempArrObj.forEach((item) => {
                answerString += `В таблице на ${item[0]} - ${item[1][0]} ${item[1][1]}\n`;
              });

              answerString += '\nВсего доброго!';

              alert(answerString);
            }
          } else if (answer !== '' && Number.isInteger(parseInt(answer))) {
            if (result === parseInt(answer)) {
              alert('Всё верно!');
            } else {
              alert('Неверно!');
              arrayErrorStat[numberOne - 1] += 1;
              arrayErrorStat[numberTwo - 1] += 1;
            }
          } else {
            alert('Не избегйте ответа!');
          }
        }
        break;

      case '4':
        while (answer !== null) {
          numberOne = Math.floor(Math.random() * 9) + 1;
          numberTwo = Math.floor(Math.random() * 9) + 1;
          result = numberOne * numberTwo;

          answer = prompt(`What is ${numberOne} * ${numberTwo}?`);

          if (answer === null) {
            option = null;

            for (let i = 0; i < arrayErrorStat.length; i++) {
              if (arrayErrorStat[i]) {
                if (arrayErrorStat[i] < 11) {
                  errors = arrayErrorStat[i];
                  switch (errors) {
                    case 1:
                      errorString = 'ошибка';
                      break;
                    case 2:
                    case 3:
                    case 4:
                      errorString = 'ошибки';
                      break;
                    case 0:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                      errorString = 'ошибок';
                    default:
                      errorString = 'ошибок';
                  }
                } else if (arrayErrorStat[i] < 15) {
                  errorString = 'ошибок';
                } else {
                  errors = arrayErrorStat[i] % 10;
                  switch (errors) {
                    case 1:
                      errorString = 'ошибка';
                      break;
                    case 2:
                    case 3:
                    case 4:
                      errorString = 'ошибки';
                      break;
                    case 0:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                      errorString = 'ошибок';
                    default:
                      errorString = 'ошибок';
                  }
                }

                answerString += `В таблице на ${i + 1} - ${
                  arrayErrorStat[i]
                } ${errorString}\n`;

                objErrorStat[i + 1] = [arrayErrorStat[i], errorString];
              }
            }

            if (answerString === '') {
              answerString += 'Ваш результат: \n\nОшибок нет';
              alert(answerString);
            } else {
              answerString += '-'.repeat(40) + '\n';
              answerString += 'Рекомендации для повторения: \n';

              const tempArrObj = Object.entries(objErrorStat)
                .sort((a, b) => {
                  if (a[1][0] > b[1][0]) return 1;
                  if (a[1][0] == b[1][0]) return 0;
                  if (a[1][0] < b[1][0]) return -1;
                })
                .reverse()
                .slice(0, 3);

              answerString += '-'.repeat(40) + '\n';

              tempArrObj.forEach((item) => {
                answerString += `В таблице на ${item[0]} - ${item[1][0]} ${item[1][1]}\n`;
              });

              answerString += '\nВсего доброго!';

              alert(answerString);
            }
          } else if (answer !== '' && Number.isInteger(parseInt(answer))) {
            if (result === parseInt(answer)) {
              alert('Всё верно!');
            } else {
              alert('Неверно!');
              arrayErrorStat[numberOne - 1] += 1;
              arrayErrorStat[numberTwo - 1] += 1;
            }
          } else {
            alert('Не избегйте ответа!');
          }
        }
        break;

      default:
        alert('Выберите сложность!');
    }
  } else {
    alert('Выберите сложность от 1 до 4!');
  }
} while (option !== null);
