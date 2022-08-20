const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const id in grades) {
    gradesArr.push(grades[id]);
  }
  res.json(gradesArr);
});

const expressJson = express.json();
app.use(expressJson);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening at port 3000!');
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  body.id = nextId;
  nextId++;
  grades[body.id] = body;
  res.status(201);
  res.json(grades[body.id]);
});
