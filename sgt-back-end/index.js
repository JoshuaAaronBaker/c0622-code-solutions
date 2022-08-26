const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
  SELECT *
  FROM "grades"
  `;
  db.query(sql)
    .then(results => {
      const grades = results.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ Error: 'An unexpected error occured.' });
    });
});

app.post('/api/grades/', (req, res) => {
  const input = req.body;

  if (!input.name || !input.course) {
    res.status(400).json({ Error: 'Please provide a name, course, and score.' });
    return;
  }
  const score = Number(input.score);
  if (!(score >= 0) || !(score <= 100) || !Number.isInteger(score)) {
    res.status(400).json({ Error: 'Please enter an integer between 0 and 100.' });
    return;
  }
  const sql = `
        INSERT INTO "grades" ("name", "course", "score")
        VALUES ($1, $2, $3)
        RETURNING *`;

  const params = [input.name, input.course, input.score];
  db.query(sql, params)
    .then(result => {
      res.status(200).json(input);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ Error: 'An unexpected error occured.' });
    });

});

app.put('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);
  const input = req.body;

  if (!Number.isInteger(id) || Number(id <= 0)) {
    res.status(400).json({ Error: 'Please enter a positive integer for the id.' });
    return;
  }
  const score = Number(input.score);
  if (!(score >= 0) || !(score <= 100) || !Number.isInteger(score)) {
    res.status(400).json({ Error: 'Please enter an integer between 0 and 100.' });
    return;
  }

  const sql = `
    UPDATE "grades"
    SET "name" = $1,
    "course" = $2,
    "score" = $3
    WHERE "gradeId" = $4
    RETURNING *`;

  const params = [input.name, input.course, input.score, id];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({ Error: `Cannot find a record matching ${id}` });
        return;
      }
      res.status(200).json(input);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ Error: 'An unexpected error occured' });
    });
});

app.delete('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || Number(id <= 0)) {
    res.status(400).json({ Error: 'Please enter a positive integer for the id.' });
    return;
  }
  if (!id) {
    res.status(404).json({ Error: 'An unexpected error occured.' });
    return;
  }

  const sql = `
    DELETE FROM "grades"
    WHERE "gradeId" = $1
    RETURNING *`;

  const params = [id];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({ Error: `Cannot find matching id of ${id}.` });
        return;
      }
      res.status(204).json();
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ Error: 'An unexpected error occured' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000!');
});
