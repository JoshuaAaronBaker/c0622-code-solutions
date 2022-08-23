const express = require('express');
const fs = require('fs');
const data = require('./data.json');

const app = express();
const expressJson = express.json();

app.use(expressJson);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

app.get('/api/notes', (req, res) => {
  res.status(200).json(Object.values(data.notes));
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: 'id should be a positve integer!!!' });
    return;
  }
  if (!data.notes[id]) {
    res.status(404).json({ error: `sorry there is no note with an id of: ${id}` });
    return;
  }
  res.status(200).json(data.notes[id]);
});

app.post('/api/notes', (req, res) => {
  const body = req.body;
  if (body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    body.id = data.nextId;
    data.nextId++;
    data.notes[body.id] = body;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2) + '\n', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(201).json(data.notes[body.id]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = Number(req.params.id);
  if (!Number.isInteger(deleteId) || deleteId <= 0) {
    res.status(400).json({ Error: 'Sorry id must be a positive integer' });
  } else if (!data.notes[deleteId]) {
    res.status(404).json({ Error: `Sorry cannot find note with an id of: ${deleteId}` });
  } else {
    delete data.notes[deleteId];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2) + '\n', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Sorry an unexpected error occured' });
      } else {
        res.status(204).json();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const updateId = Number(req.params.id);
  const body = req.body;
  if (!Number.isInteger(updateId) || updateId <= 0) {
    res.status(400).json({ error: 'Sorry id must be a positive integer' });
  } else if (Number.isInteger(updateId) && (body.content === undefined)) {
    res.status(400).json({ error: 'Sorry content is a required field' });
  } else if (!data.notes[updateId]) {
    res.status(404).json({ error: `Sorry cannot find note with an id of: ${updateId}` });
  } else {
    data.notes[updateId].content = body.content;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2) + '\n', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Sorry an unexpected error occured' });
      } else {
        res.status(200).json(data.notes[updateId]);
      }
    });
  }
});
