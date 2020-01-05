const express = require('express');

const app = express();
const port = 3001;

const COURSES_DATA = [
  {
    id: 1,
    name: 'Javascript',
    author: 1,
    releaseDate: '2019-01-01 00:00:00',
  },
  {
    id: 2,
    name: 'Java',
    author: 2,
    releaseDate: '2019-01-01 00:00:00',
  },
  {
    id: 3,
    name: 'React',
    author: 3,
    releaseDate: '2019-01-01 00:00:00',
  },
];

const AUTHORS_DATA = [
  {
    id: 1,
    name: 'Le Quoc Binh',
  },
  {
    id: 2,
    name: 'Le Binh',
  },
  {
    id: 3,
    name: 'Binh Le',
  },
];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/courses', (req, res) => res.send(COURSES_DATA));

app.get('/courses/:id', (req, res) => {
  const course = COURSES_DATA.find((c) => c.id === parseInt(req.params.id, 10));
  console.log(req.params.id);
  res.send(course);
});

app.get('/authors', (req, res) => res.send(AUTHORS_DATA));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
