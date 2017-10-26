import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, firstName: 'tom', lastName: 'sawyer' },
    { id: 2, firstName: 'bill', lastName: 'cromton' },
    { id: 1, firstName: 'sam', lastName: 'solo' }
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open(`http://localhost:${port}`);
  }
});
