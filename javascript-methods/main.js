var a = 23;
var b = 6;
var c = 24;
var maximumValue = Math.max(a, b, c);
console.log('maximumValue: ', maximumValue);

var heroes = ['Batman', 'Spiderman', 'Flash', 'Deadpool'];
var randomNumber = Math.random(heroes);
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    title: 'Harry Potter and The Order of the Pheonix',
    author: 'JK Rowling'
  }
];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);

library.splice(1, 1, js);
console.log('library: ', library);

var fullName = 'Joshua Baker';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
