// Вывод шахматной доски
let sting = '';

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if ((i + j) % 2 === 0) {
      sting += ' #';
    } else {
      sting += ' ';
    }
  }
  sting += '\n';
}

console.log(sting);

let sting2 = '';

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i === j) {
      sting2 += ' #';
    } else {
      sting2 += ' ';
    }
  }
  sting2 += '\n';
}

console.log(sting2);

let sting3 = '';

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i === 5) {
      sting3 += ' #';
    } else {
      sting3 += ' ';
    }
  }
  sting3 += '\n';
}

console.log(sting3);
