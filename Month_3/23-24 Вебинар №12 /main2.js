// Массив объектов
const people = [
  {
    name: 'Ilyas',
    age: 33,
    supportedFC: ['Club1', 'Club2', 'Club3'],
  },
  {
    name: 'Sanat',
    age: 20,
    supportedFC: ['Club4', 'Club5', 'Club6', 'Club7'],
  },
  {
    name: 'John',
    age: 38,
    supportedFC: ['Club8', 'Club1', 'Club9', 'Club10', 'Club11'],
  },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name + ' supports: ');
  for (let j = 0; j < people[i].supportedFC.length; j++) {
    console.log(j + 1, people[i].supportedFC[j]);
  }
  console.log('-'.repeat(20));
}
