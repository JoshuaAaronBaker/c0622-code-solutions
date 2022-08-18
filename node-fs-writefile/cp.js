const fs = require('fs');

const [, , og, copy] = process.argv;

fs.readFile(og, (err, data) => {
  if (err) throw err;
  fs.writeFile(copy, data, err => {
    if (err) throw err;
  });
});
