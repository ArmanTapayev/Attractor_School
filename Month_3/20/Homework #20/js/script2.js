let message = '';

while (message === '' || message === null) {
  message = prompt('Введите строку: ');
}

const frame = '*'.repeat(message.length + 4);
message = `${frame}\n* ${message} *\n${frame}`;

console.log(message);
