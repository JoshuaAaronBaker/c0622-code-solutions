const fs = require('fs');
const [, , ...filePaths] = process.argv;

filePaths.forEach(element => {
  fs.readFile(element, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }
  );
});
