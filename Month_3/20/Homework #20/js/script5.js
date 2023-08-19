let randomNumber;
let samplesNumber = 100;
let sampleString = '';
const arrayOfGroup = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log('-'.repeat(55));
console.log(`Number of samples: ${samplesNumber}`);

for (let i = 0; i < samplesNumber; i++) {
  randomNumber = Math.floor(Math.random() * 100)
    .toString()
    .padStart(2, '  ');
  if (i % 10 === 0) {
    sampleString += '\n';
  }
  sampleString += randomNumber + ' ';

  arrayOfGroup[Math.floor(randomNumber / 10)] += 1;
}
console.log('-'.repeat(55));
console.log('Resulting table of random numbers: ');
console.log(sampleString);

console.log('-'.repeat(55));
console.log('Accumulated array of random numbers by decimal places: ');
console.log(arrayOfGroup);

console.log('-'.repeat(55));
console.log('Final grouping table : ');

for (let i = 0; i < arrayOfGroup.length; i++) {
  console.log(
    `Group ${(i * 10).toString().padStart(2, ' ')} - ${(i * 10 + 9)
      .toString()
      .padStart(2, ' ')}: ${arrayOfGroup[i]}`
  );
}
