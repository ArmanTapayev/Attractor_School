let randomNumber;
let samplesNumber;
let sampleString = '';
const arrayOfGroup = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

do {
  samplesNumber = prompt('Введите необходимое количество данных N: ');
} while (!Number.isInteger(parseInt(samplesNumber)));

console.log('-'.repeat(55));
console.log(`Количество сгенерированных чисел: N = ${samplesNumber}`);

const lenOfLine = Math.pow(10, Math.floor(samplesNumber.length / 2));

const isShowSamples = confirm(
  'Показывать сгенерированные данные?\nРекомендуется для N <= 100'
);

for (let i = 0; i < samplesNumber; i++) {
  randomNumber = Math.floor(Math.random() * 100)
    .toString()
    .padStart(2, '  ');

  if (i % lenOfLine === 0) {
    sampleString += '\n';
  }
  sampleString += randomNumber + ' ';

  arrayOfGroup[Math.floor(randomNumber / 10)] += 1;
}

if (isShowSamples) {
  console.log('-'.repeat(55));
  console.log('Таблица с генерированными данными: ');
  console.log(sampleString);
}

console.log('-'.repeat(55));
console.log('Массив с количеством случайных чисел по десятичным группам: ');
console.log(arrayOfGroup);

console.log('-'.repeat(55));
console.log('Результирующая таблица по группам: ');
console.log('-'.repeat(55));

for (let i = 0; i < arrayOfGroup.length; i++) {
  console.log(
    `Группа ${(i * 10).toString().padStart(2, ' ')} - ${(i * 10 + 9)
      .toString()
      .padStart(2, ' ')}: ${arrayOfGroup[i]}`
  );
}
