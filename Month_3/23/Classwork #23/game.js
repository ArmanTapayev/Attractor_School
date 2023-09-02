const Game = {
  guess: 0,
  tries: 0,
  getRandomNumber: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  start: function () {
    this.guess = this.getRandomNumber(1, 7);
    console.log(this.guess);

    while (this.tries < 3) {
      let answer = prompt('Enter a number');

      if (answer === null) {
        alert('Bye!');
        return;
      }

      answer = parseInt(answer);
      console.log(answer);

      if (answer < 1 || answer > 7 || isNaN(answer)) {
        console.log('Wrong input!');
        continue;
      }

      this.tries++;
      if (answer === this.guess) {
        console.log(
          `You won in ${this.tries} ${this.tries > 1 ? 'tries' : 'try'}`
        );
        return;
      }
    }
    console.log('You lost');
  },
};

Game.start();
