const takeAChance = require('./take-a-chance');

const myChance = takeAChance('Joshua Baker');

myChance
  .then(value => console.log(value))
  .catch(error => console.error(error.message));
