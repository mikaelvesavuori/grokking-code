/**
 * Objects allow for richer, more human semantics, and functions make behaviors possible.
 */

/*
console.log('Hi!');
let text = '';
text += 'I ';
text += 'am ';
text += 'Thom!';
console.log(text);
console.log('Bye!');
*/

/*
function greet(name) {
  sayHi();
  present(name);
  sayBye();
}

function present(name) {
  //const _text = ['I ', 'am ', `${name}!`].join('');

  let text = '';

  text += 'I ';
  text += 'am ';
  text += `${name}!`;

  console.log(text);
}

function sayHi() {
  console.log('Hi!');
}

function sayBye() {
  console.log('Bye!');
}

greet('Thom');
*/

export class Greeter {
  // Public
  greet(name) {
    this.sayHi();
    this.present(name);
    this.sayBye();
  }

  // Private
  present(name) {
    //const _text = ['I ', 'am ', `${name}!`].join(''); // Functional style, no mutation

    let text = '';

    text += 'I ';
    text += 'am ';
    text += `${name}!`;

    console.log(text);
  }

  // Private
  sayHi() {
    console.log('Hi!');
  }

  // Private
  sayBye() {
    console.log('Bye!');
  }
}

//const greeter = new Greeter();
//greeter.greet('Thom');

// Bad API! Poor information hiding
//greeter.sayHi();
//greeter.present('someone');
//greeter.sayBye();

class Character {
  wisdom = 5;

  addStat(statName) {
    if (statName === 'wisdom') {
      const newValue = this.wisdom > 10 ? this.wisdom + 4 : this.wisdom + 1;
      this.wisdom = newValue;
      console.log(this.wisdom);
    }
  }
}

class Game {
  gitGud(char) {
    char.addStat('wisdom');
  }
}

const char = new Character();
const game = new Game();
game.gitGud(char);
