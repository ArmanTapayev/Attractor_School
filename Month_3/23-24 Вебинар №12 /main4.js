const getRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Factory = {
  employee: 5,
  madeProductsCount: 0,

  startWork: function () {
    let total = 0;

    for (let i = 1; i <= this.employee; i++) {
      total += getRandomNum(i, 10);
    }

    if (getRandomNum(0, 100) > 50) {
      console.log(
        `Made ${total} products, ${Math.round(total / 2)} are broken`
      );
      total = Math.floor(total / 2);
    }

    this.madeProductsCount += total;
    console.log(`Ready ${total} products`);
  },

  sendToStock(productCount) {
    if (productCount <= this.madeProductsCount) {
      Stock.getProducts(productCount);
      this.madeProductsCount -= productCount;
    } else {
      console.log('Wrong input');
    }
  },

  showMadeProductsInfo() {
    console.log(`Made products count: ${this.madeProductsCount}`);
  },
};

const Stock = {
  maxSize: 100,
  availableSlotsCount: 100,
  getProducts(productCount) {
    console.log(`Available slots count: ${this.availableSlotsCount}`);
    console.log(`Incoming products count: ${productCount}`);

    if (this.availableSlotsCount >= productCount) {
      this.availableSlotsCount -= productCount;
    } else {
      console.log('No available slots');
    }
  },
  showSlotsInfo() {
    console.log(`Max slots count: ${this.maxSize}
      Available slots count: ${this.availableSlotsCount}`);
  },
};

// Factory.startWork();
// Factory.startWork();
// Factory.startWork();
// Factory.startWork();
// console.log(Factory.madeProductsCount);
// Factory.sendToStock(10);
// console.log(Factory.madeProductsCount);

let isRunning = true;
while (isRunning) {
  let option = prompt(`Enter option:
    1. Make products
    2. Deliver products to stoke
    3. Show made products count in Factory
    4. Show slots info
    5. Exit`);

  switch (option) {
    case '1':
    case 'Make products':
      Factory.startWork();
      break;
    case '2':
      let count = parseInt(prompt('Enter a product count to deliver'));
      Factory.sendToStock(count);
      break;
    case '3':
      Factory.showMadeProductsInfo();
      break;
    case '4':
      Stock.showSlotsInfo();
      break;
    case '5':
      isRunning = false;
      break;
    default:
      console.log('Wrong input');
  }
}
