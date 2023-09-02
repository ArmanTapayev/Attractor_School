const Car = {
  model: 'Toyota',
  color: 'gray',
  hasBroken: true,
  changeColor: function (color) {
    this.color = color;
  },
  repair: function () {
    this.hasBroken = false;
  },
  getCarInfo: function () {
    return `Model: ${this.model}, Color: ${this.color}, status: ${
      this.hasBroken ? 'Broken' : 'Ok'
    }`;
  },
};

const CarService = {
  repairCar: function () {
    Car.repair();
  },
  switchColor: function (color) {
    Car.changeColor(color);
  },
};

console.log(Car.getCarInfo());
CarService.repairCar();
console.log(Car.getCarInfo());
CarService.switchColor('red');
console.log(Car.getCarInfo());
