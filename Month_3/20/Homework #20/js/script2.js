let message = '';

while (message === '' || message === null) {
  message = prompt('Введите строку: \nПробелы выведут красивую рамку ) ');
}

const frame = '*'.repeat(message.length + 4);
message = `${frame}\n* ${message} *\n${frame}`;

const option = confirm('Вывести в консоль?');
if (option) {
  console.log(message);
} else {
  alert(message);
}
