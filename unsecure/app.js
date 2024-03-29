const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'unsecure_app'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send('Logged in successfully');
    } else {
      res.send('Login failed');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});