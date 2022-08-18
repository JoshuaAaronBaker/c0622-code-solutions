const data = require('./data.json');
const fs = require('fs');

const inputCommand = process.argv[2];
const input = process.argv[3];
const updateInput = process.argv[4];

if (inputCommand === 'read') {
  for (var prop in data.notes) {
    console.log(`${prop}: ${data.notes[prop]}`);
  }
} else if (inputCommand === 'create') {
  data.notes[data.nextId] = input;
  data.nextId++;
} else if (inputCommand === 'update') {
  data.notes[input] = updateInput;
} else if (inputCommand === 'delete') {
  delete data.notes[input];
} else {
  console.log('Invalid Command, please try again.');
}

const niceJSON = JSON.stringify(data, null, 2);

fs.writeFile('data.json', niceJSON + '\n', err => {
  if (err) throw err;

});
